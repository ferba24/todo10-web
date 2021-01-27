import { formEndpoint } from '../data/constants'
import axios from 'axios'

export default async function sendEmail(data) {
  return await axios.post(formEndpoint, data)
}