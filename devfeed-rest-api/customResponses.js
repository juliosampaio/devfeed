const twitter = require('./twitter.api')

const addAvatar = async colleague => twitter
  .colleagueTimeline(colleague.twitter)
  .then((tweets) => {
    // eslint-disable-next-line
    colleague.avatar = tweets[0].user.profile_image_url
    // eslint-disable-next-line
    colleague.tags = tweets.reduce((tags, tweet) => {
      console.log(tweet)
      tags.concat(tweet.entities.hashtags.map(tag => tag.text))
      return tags
    }, [])
    return colleague
  })
  .catch(() => colleague)

const responseHandlers = {}

responseHandlers['/colleagues'] = async (colleagues = []) => {
  const promises = colleagues.map(colleague => addAvatar(colleague))
  const response = await Promise.all(promises)
  return response
}
const customResponses = async (req, res) => {
  const { data } = res.locals
  const handler = responseHandlers[req.url] || (d => Promise.resolve(d))
  const customData = await handler(data)
  res.jsonp(customData)
}

module.exports = customResponses
