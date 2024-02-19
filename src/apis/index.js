import axios from 'axios'
import { API_ROOT } from '~/utils/constants'

export const fetchBoardDetailsApi = async (boardId) => {
  const res = await axios.get(`${API_ROOT}/v1/board/${boardId}`)
  return res.data
}

export const createNewColumnApi = async (newColumnData) => {
  const res = await axios.post(`${API_ROOT}/v1/columns`, newColumnData)
  return res.data
}

export const createNewCardApi = async (newCardData) => {
  const res = await axios.post(`${API_ROOT}/v1/cards`, newCardData)
  return res.data
}