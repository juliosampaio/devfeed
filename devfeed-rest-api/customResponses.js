const twitter = require('./twitter.api')
const github = require('./github.api')

const addTwitterData = async colleague => twitter
  .colleagueTimeline(colleague.twitter, 10)
  .then((tweets) => {
    const avatar = tweets[0].user.profile_image_url
    const tags = tweets.reduce((hashtags, tweet) =>
      hashtags.concat(tweet.entities.hashtags.map(tag => tag.text)), [])
    return Object.assign(colleague, { avatar, tags })
  })
  .catch(() => colleague)

const responseHandlers = {}

responseHandlers['GET/colleagues'] = async (colleagues = []) => {
  const promises = colleagues.map(colleague => addTwitterData(colleague))
  const response = await Promise.all(promises)
  return response
}
const customResponses = async (req, res) => {
  const { data } = res.locals
  const handler = responseHandlers[`${req.method}${req.url}`] || (d => Promise.resolve(d))
  const customData = await handler(data)
  res.jsonp(customData)
}

module.exports = customResponses
