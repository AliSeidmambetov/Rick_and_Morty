import axios from 'axios'

const API_URL = 'https://rickandmortyapi.com/api/character/'

export const getCharacters = async (page = 1, filters = {}) => {
  const params = {
    page,
    name: filters.name || '',
    status: filters.status || ''
  }
  const response = await axios.get(API_URL, { params })
  return response.data
}
