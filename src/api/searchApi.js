import axios from 'axios'
import { searchUrl } from './urls'

export const searchQuestions = async (query) => {
  const res = await axios.get(searchUrl.replace(':query', query))
  return res.data;
}
