const twitter = require('./twitter.api')
const github = require('./github.api')

const extractTwitterInfo = (colleague, tweets) => {
  const { user } = tweets[0]
  const cover = user.profile_banner_url
  const avatar = user.profile_image_url_https.replace('_normal', '')
  const followers = user.followers_count || 0
  const following = user.friends_count
  const timeline = { twitter: tweets }
  const tags = tweets.reduce((hashtags, tweet) => hashtags
    .concat(tweet.entities.hashtags.map(tag => tag.text)), [])
  const lastTweet = tweets[0].full_text
  return Object.assign(colleague, {
    avatar,
    cover,
    followers,
    following,
    lastTweet,
    tags,
    timeline,
  })
}

const addTwitterData = async colleague => twitter
  .colleagueTimeline(colleague.twitter, 10)
  .then(tweets => extractTwitterInfo(colleague, tweets))
  .catch(() => colleague)

const extractGithubInfo = (colleague, githubProfile) => {
  let { followers, following } = githubProfile
  const { location, company } = githubProfile
  followers = colleague.followers + followers
  following = colleague.following + following
  return Object.assign(colleague, {
    location, company, followers, following,
  })
}

const extractGithubFeed = (colleague, feed = []) => {
  const slicedFeed = feed.slice(0, 10)
  const { timeline } = colleague
  timeline.github = slicedFeed
  return Object.assign(colleague, { timeline })
}

const addGithubData = async colleague => github
  .getProfile(colleague.github)
  .then(githubProfile => extractGithubInfo(colleague, githubProfile))
  .catch(() => colleague)

const addGithubFeed = async colleague => github
  .getColleagueFeed(colleague.github)
  .then(feed => extractGithubFeed(colleague, feed))
  .catch(() => colleague)

const responseHandlers = {}

responseHandlers['GET/colleagues$'] = async (colleagues = []) => {
  const twitterDataPromises = colleagues.map(colleague => addTwitterData(colleague))
  const withTwitterData = await Promise.all(twitterDataPromises)
  const githubDataPromises = withTwitterData.map(colleague => addGithubData(colleague))
  const response = await Promise.all(githubDataPromises)
  return response
}

responseHandlers['GET/colleagues/\\d+'] = async (colleague = {}) => {
  const withTwitterData = await addTwitterData(colleague)
  const withGithubData = await addGithubData(withTwitterData)
  const withGithubFeed = await addGithubFeed(withGithubData)
  return withGithubFeed
}

const customResponses = async (req, res) => {
  const { data } = res.locals
  const handlerKey = Object.keys(responseHandlers).find(key => new RegExp(key).test(`${req.method}${req.url}`))
  const handler = responseHandlers[handlerKey] || (d => Promise.resolve(d))
  const customData = await handler(data)
  res.jsonp(customData)
}

module.exports = customResponses
