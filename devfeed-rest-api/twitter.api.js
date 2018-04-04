const Twitter = require('twitter');

const api = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  bearer_token: process.env.TWITTER_BEARER_TOKEN,
})

const colleagueTimeline = (screenName, count = 5) => api.get('statuses/user_timeline.json?tweet_mode=entities', { screen_name: screenName, count })

module.exports = {
  colleagueTimeline,
}
