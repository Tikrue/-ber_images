import { observable, action } from 'mobx'
import { uniqBy } from 'lodash'

import Api from '../utils/api'
import { Image, IAlbum } from '../utils/interfaces'

const filterDuplicatesById = (array : any) => {
  const filteredArray = uniqBy(array, (e : any) => {
    return e.id
  })

  return filteredArray
}

class Store {
  @observable images : Image[] = []
  @observable albums : IAlbum[] = []
  @observable isLoading = false

  constructor() {
    this.fetchImages()
  }

  getSingleImage = (imageId : number) => {
    const image = 
      this.images.find(exactImage => exactImage.id === imageId) || {} as Image
    
    return image
  }

  getSingleAlbum = (albumId : number) => {
    const album = 
      this.albums.find(exactAlbum => exactAlbum.id === albumId) || {} as IAlbum

    return album
  }

  @action
  setLoading = (loading : boolean) => {
    this.isLoading = loading
  }

  @action
  setAlbums = (albums : IAlbum[]) => {
    this.albums = albums
  }

  @action
  setImages = (images : Image[]) => {
    this.images = images
  }

  @action
  fetchSingleImage = async (imageId : number) => {
    this.setLoading(true)

    try {
      const data = await Api.getSingleImage(imageId)
      const tempImages = [...this.images, data]
      this.setImages(filterDuplicatesById(tempImages))
      this.fetchSingleAlbum(data.albumId)
    }
    catch(err) {
      alert(err)
    }
    this.setLoading(false)
  }

  @action
  fetchSingleAlbum = async (albumId : number) => {
    try {
      const data = await Api.getSingleAlbum(albumId)
      const tempAlbums = [...this.albums, data]
      this.setAlbums(filterDuplicatesById(tempAlbums))
      this.fetchImagesPerAlbum(data.id)
    }
    catch(err) {
      alert(err)
    }
  }

  @action
  fetchImages = async (pageNum : number = 1, limit : number = 10) => {
    this.setLoading(true)  

    try {
      const data = await Api.getImages(pageNum, limit)    
      const tempImages = [...this.images, ...data]
      this.setImages(filterDuplicatesById(tempImages))      
    }
    catch(err) {
      alert(err)
    }
    this.setLoading(false)
  }

  @action
  fetchAlbums = async () => {
    this.setLoading(true)

    try {
      const data = await Api.getAlbums()
      this.setAlbums(data)
    }
    catch(err) {
      alert(err)
    }
    this.setLoading(false)
  }

  @action
  fetchImagesPerAlbum = async (albumId : number) => {
    this.setLoading(true)
    
    try {
      const data = await Api.getImagesFromAlbum(albumId)    
      const tempImages = [...this.images, ...data]
      this.setImages(filterDuplicatesById(tempImages))      
    }
    catch(err) {
      alert(err)
    }
    this.setLoading(false)
  }
}

export default new Store()