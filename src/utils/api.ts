import axios from 'axios'

import { Image, IAlbum } from './interfaces'

const baseURL = 'https://jsonplaceholder.typicode.com'

const getImages = async (pageNum : number, limit : number) : Promise<Image[] | null> => {
  try {
    const response = await axios.get(`${baseURL}/photos?_page=${pageNum}&_limit=${limit}`)
    return response.data
  }
  catch (err) {
    return null
  } 
}

const getAlbums = async () : Promise<IAlbum[] | null> => {
  try {
    const response = await axios.get(`${baseURL}/albums`)
    return response.data
  }
  catch (err) {
    return null
  } 
}

const getImagesFromAlbum =  async (albumId : number) : Promise<Image[] | null> => {
  try {
    const response = await axios.get(`${baseURL}/albums/${albumId}/photos`)
    return response.data
  }
  catch (err) {
    return null
  } 
}

export const Api = { getImages, getAlbums, getImagesFromAlbum }

export default Api