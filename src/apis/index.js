import axios from 'axios'
import { API_ROOT } from '~/utils/constants'

export const fetchBoardDetailsApi = async (boardId) => {
  const res = await axios.get(`${API_ROOT}/v1/board/${boardId}`)
  return res.data
}