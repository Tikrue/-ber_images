import { observable, action } from 'mobx'
import { uniqBy } from 'lodash'

import Api from '../utils/api'
import { Image, IAlbum } from '../utils/interfaces'

const filterDuplicates = (array : Image[]) => {
  const filteredArray = uniqBy(array, (e) => {
    return e.id
  })

  return filteredArray
}

class Store {
  @observable images : Image[] = []
  @observable albums : IAlbum[] = []
  @observable isLoading = false

  getSingleImage = (imageId : string) => {
    const image = 
      this.images.find(exactImage => exactImage.id.toString() === imageId) || {} as Image
    
    return image
  }

  getSingleAlbum = (albumId : string) => {
    const album = 
      store.albums.find(exactAlbum  => exactAlbum.id.toString() === albumId) || {} as IAlbum

    return album
  }

  @action
  doLoadImages = async (pageNum : number, limit : number = 10) => {
    this.isLoading = true
    
    const data = await Api.getImages(pageNum, limit)

    if(data != null) {
      const tempImages = [...this.images, ...data]
      this.images = filterDuplicates(tempImages)
    }
    else {
      alert('Images cannot be loaded')
    }
    
    this.isLoading = false
  }

  @action
  doLoadAlbums = async () => {
    this.isLoading = true

    const data = await Api.getAlbums()

    if(data != null) {
      this.albums = data
    }
    else {
      alert('Albums cannot be loaded')
    }

    this.isLoading = false
  }

  @action
  doLoadImagesPerAlbum = async (albumId : number) => {
    this.isLoading = true

    const data = await Api.getImagesFromAlbum(albumId)

    if(data != null) {
      const tempImages = [...this.images, ...data]
      this.images = filterDuplicates(tempImages)
    }
    else {
      alert('Images cannot be loaded')
    }

    this.isLoading = false
  }
}

const store = new Store()

export default store