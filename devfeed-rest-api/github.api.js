const octokit = require('@octokit/rest')()

const authenticate = () => octokit.authenticate({
  type: 'basic',
  username: process.env.GITHUB_USERNAME,
  password: process.env.GITHUB_PASSWORD,
})

// https://developer.github.com/v3/activity/events/types/

const getColleagueFeed = username => octokit.activity.getEventsForUserPublic({ username })

const getProfile = (username) => {
  authenticate()
  return octokit.users.getForUser({ username }).then(({ data }) => data)
}

module.exports = { getColleagueFeed, getProfile }
