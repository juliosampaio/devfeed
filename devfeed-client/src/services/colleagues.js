import api from './api'

const colleagues_url = 'http://localhost:3000/users/{userId}/colleagues'

const colleague_url = 'http://localhost:3000/colleagues/{colleagueId}'

export const addColleague = (colleagueData) => api('POST', colleagues_url, colleagueData)

export const listColleagues = (colleagueData) => api('GET', colleagues_url)

export const fetchColleague = (colleagueId) => api('GET', colleague_url, null, { colleagueId })
