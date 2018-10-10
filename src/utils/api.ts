import axios from 'axios'

import { Image, IAlbum } from './interfaces'

const baseURL = 'https://jsonplaceholder.typicode.com'

const getImages = async (pageNum : number, limit : number) : Promise<Image[]> => {
  const response = await axios.get(`${baseURL}/photos?_page=${pageNum}&_limit=${limit}`)
  return response.data
}

const getAlbums = async () : Promise<IAlbum[]> => {
  const response = await axios.get(`${baseURL}/albums`)
  return response.data
}

const getImagesFromAlbum = async (albumId : number) : Promise<Image[]> => {
  const response = await axios.get(`${baseURL}/albums/${albumId}/photos`)
  return response.data
}

const getSingleImage = async (imageId : number) : Promise<Image> => {
  const response = await axios.get(`${baseURL}/photos/${imageId}`)
  return response.data
}

const getSingleAlbum = async (albumId : number) : Promise<IAlbum> => {
  const response = await axios.get(`${baseURL}/albums/${albumId}`)
  return response.data 
}

export const Api = { 
  getAlbums,
  getImages,  
  getImagesFromAlbum,
  getSingleAlbum, 
  getSingleImage 
}

export default Api