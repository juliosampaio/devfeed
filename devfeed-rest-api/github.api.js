const octokit = require('@octokit/rest')()

//https://developer.github.com/v3/activity/events/types/

const getColleagueFeed = () => octokit.activity.getEventsForUserPublic({
  username: 'juliosampaio'
})

// Compare: https://developer.github.com/v3/repos/#list-organization-repositories
getColleagueFeed().then(({data}) => {
  console.log(data[0])
})
