import api from './api'

const add_colleague_url = 'http://localhost:3000/users/{userId}/colleagues'

export const addColleague = (colleagueData) => api('POST', add_colleague_url, colleagueData)
