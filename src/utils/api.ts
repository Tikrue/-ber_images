import axios from 'axios'

import { Image, IAlbum } from './interfaces'

const baseURL = 'https://jsonplaceholder.typicode.com'

const getImages = (pageNum : number, limit : number) : Promise<Image[]> => {
  return axios.get(`${baseURL}/photos?_page=${pageNum}&_limit=${limit}`)
  .then(res => {
    return res.data   
  })
}

const getAlbums = () : Promise<IAlbum[]> => {
  return axios.get(`${baseURL}/albums`)
  .then(res => {
    return res.data   
  })
}

const getImagesFromAlbum = (albumId : number) : Promise<Image[]> => {
  return axios.get(`${baseURL}/albums/${albumId}/photos`)
  .then(res => {
    return res.data   
  })
}

export const Api = { getImages, getAlbums, getImagesFromAlbum }

export default Api