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
    const data = await Api.getSingleImage(imageId)

    if(data != null) {
      const tempImages = [...this.images, data]
      this.setImages(filterDuplicatesById(tempImages))
      this.fetchSingleAlbum(data.albumId)
    }
    else {
      alert('Image cannot be loaded')
    }
  }

  @action
  fetchSingleAlbum = async (albumId : number) => {
    const data = await Api.getSingleAlbum(albumId)

    if(data != null) {
      const tempAlbums = [...this.albums, data]
      this.setAlbums(filterDuplicatesById(tempAlbums))
      this.fetchImagesPerAlbum(data.id)
    }
    else {
      alert('Image cannot be loaded')
    }
  }

  @action
  fetchImages = async (pageNum : number = 1, limit : number = 10) => {
    this.setLoading(true)
    
    const data = await Api.getImages(pageNum, limit)

    if(data != null) {
      const tempImages = [...this.images, ...data]
      this.setImages(filterDuplicatesById(tempImages))
    }
    else {
      alert('Images cannot be loaded')
    }
    
    this.setLoading(false)
  }

  @action
  fetchAlbums = async () => {
    const data = await Api.getAlbums()

    if(data != null) {
      this.setAlbums(data)
    }
    else {
      alert('Albums cannot be loaded')
    }
  }

  @action
  fetchImagesPerAlbum = async (albumId : number) => {
    const data = await Api.getImagesFromAlbum(albumId)

    if(data != null) {
      const tempImages = [...this.images, ...data]
      this.setImages(filterDuplicatesById(tempImages))
    }
    else {
      alert('Images cannot be loaded')
    }
  }
}

const store = new Store()

export default store