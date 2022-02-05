export interface RocketAPIResponse {
  flickr_images: string[],
  name: string,
  active: boolean,
  description: string,
  [key: string]: any
}

export interface CrewMembersAPIResponse {
  agency: string
  id: string
  image: string
  name: string
  status: string
  wikipedia: string,
  [key: string]: any
}
