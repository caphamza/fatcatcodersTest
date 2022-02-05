import { RocketAPIResponse, CrewMembersAPIResponse } from '../interfaces'
import config from '../utils/config'
import axios from 'axios'

export const rocketAPI = async (): Promise<RocketAPIResponse[]> => {
  const res = await axios.get(config.BaseURL + 'rockets')
  return res.data
}

export const crewMembersAPI = async (): Promise<CrewMembersAPIResponse[]> => {
  const res = await axios.get(config.BaseURL + 'crew')
  return res.data
}