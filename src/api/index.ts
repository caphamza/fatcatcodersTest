import { get } from '../services/restService'

export const rocketAPI = () => {
  return get('rockets')
}

export const crewMembersAPI = () => {
  return get('crew')
}