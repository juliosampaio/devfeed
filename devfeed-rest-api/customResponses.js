const twitter = require('./twitter.api')
const github = require('./github.api')

const extractTwitterInfo = (colleague, tweets) => {
  const avatar = tweets[0].user.profile_image_url
  const tags = tweets.reduce((hashtags, tweet) =>
    hashtags.concat(tweet.entities.hashtags.map(tag => tag.text)), [])
  const lastTweet = tweets[0].full_text
  return Object.assign(colleague, { avatar, tags, lastTweet })
}

const addTwitterData = async colleague => twitter
  .colleagueTimeline(colleague.twitter, 10)
  .then(tweets => extractTwitterInfo(colleague, tweets))
  .catch(() => colleague)

const extractGithubInfo = (colleague, githubProfile) => {
  const { location, company } = githubProfile
  return Object.assign(colleague, { location, company })
}

const addGithubData = async colleague => github
  .getProfile(colleague.github)
  .then(githubProfile => extractGithubInfo(colleague, githubProfile))
  .catch(() => colleague)

const responseHandlers = {}

responseHandlers['GET/colleagues'] = async (colleagues = []) => {
  const twitterDataPromises = colleagues.map(colleague => addTwitterData(colleague))
  const withTwitterData = await Promise.all(twitterDataPromises)
  const githubDataPromises = withTwitterData.map(colleague => addGithubData(colleague))
  const response = await Promise.all(githubDataPromises)
  return response
}
const customResponses = async (req, res) => {
  const { data } = res.locals
  const handler = responseHandlers[`${req.method}${req.url}`] || (d => Promise.resolve(d))
  const customData = await handler(data)
  res.jsonp(customData)
}

module.exports = customResponses
