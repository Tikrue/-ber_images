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

  @action
  loadImages(pageNum : number, limit : number = 10) {
    this.isLoading = true

    Api.getImages(pageNum, limit)
    .then(
      action("loadSuccess", (images : Image[]) => {
        const tempImages = [...this.images, ...images]

        this.images = filterDuplicates(tempImages)
        this.isLoading = false
      }),
      action("loadFailure", (err : string) => {
        throw Error(err)
      })
    )
  }

  @action
  loadAlbums() {
    this.isLoading = true
    
    Api.getAlbums()
    .then(
      action("loadSuccess", (albums : IAlbum[]) => {
        console.log(albums)
        this.albums = albums
        this.isLoading = false
      }),
      action("loadFailure", (err : string) => {
        throw Error(err)
      })
    )
  }
}

export default Store