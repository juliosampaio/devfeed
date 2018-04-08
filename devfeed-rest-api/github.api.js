const octokit = require('@octokit/rest')()

const authenticate = () => octokit.authenticate({
  type: 'basic',
  username: process.env.GITHUB_USERNAME,
  password: process.env.GITHUB_PASSWORD,
})

const getColleagueFeed = (username) => {
  authenticate()
  return octokit.activity.getEventsForUserPublic({ username }).then(({ data }) => data)
}

const getProfile = (username) => {
  authenticate()
  return octokit.users.getForUser({ username }).then(({ data }) => data)
}

module.exports = { getColleagueFeed, getProfile }
