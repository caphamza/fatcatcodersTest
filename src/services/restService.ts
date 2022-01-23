import axios from 'axios'
import config from '../utils/config'

export const get = async (url: string) => {
  return new Promise((resolve, reject) => {
    axios.get(config.BaseURL + url).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}