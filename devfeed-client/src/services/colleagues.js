import api from './api'

const colleagues_url = 'http://localhost:3000/users/{userId}/colleagues'

export const addColleague = (colleagueData) => api('POST', colleagues_url, colleagueData)

export const listColleagues = (colleagueData) => api('GET', colleagues_url)
