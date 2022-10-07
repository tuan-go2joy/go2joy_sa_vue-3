import apiCaller from './apiCaller'

async function fetchSuggestionsUsers (params: any) {
  return await apiCaller.get('suggestions/app-users', { params: params })
}

export {
  fetchSuggestionsUsers
}
