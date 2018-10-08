import * as React from 'react'
import { RouteComponentProps } from "react-router"
import { observer } from 'mobx-react'
import { isEmpty } from 'lodash'

import store from '../../store/store'
import './images.css'

@observer
class ImageCard extends React.Component<RouteComponentProps<any>> {
  componentDidMount() {
    const { match } = this.props
    store.fetchSingleImage(parseInt(match.params.id, 10))
  }

  render() {
    const { match } = this.props
    const imageId = parseInt(match.params.id, 10)
    const image = store.getSingleImage(imageId)
    const album = store.getSingleAlbum(image.albumId)

    return (
      <div className="imageCard">
        <img 
          src={image.url}
          alt={image.title} 
        />
        <div>
          <p>Title: {image.title}</p>
          {!isEmpty(album) && <p>Album: {album.title}</p>}
        </div>
      </div>
    )
  }
}

export default ImageCard