import * as React from 'react'
import { RouteComponentProps } from "react-router"
import { observer } from 'mobx-react'
import { isEmpty } from 'lodash'

import store from '../../store/store'
import LinkButton from '../navigation/linkButton'
import './images.css'

@observer
class ImageCard extends React.Component<RouteComponentProps<any>> {
  componentDidMount() {
    const { match } = this.props
    store.fetchSingleImage(parseInt(match.params.id, 10))
  }

  render() {
    const { match } = this.props
    const { getSingleImage, getSingleAlbum, images } = store
    const imageId = parseInt(match.params.id, 10)
    const image = getSingleImage(imageId)
    const album = getSingleAlbum(image.albumId)
    const index = images.findIndex(x => x.id === imageId)

    return (
      <div className="imageCard">
        <img 
          src={image.url}
          alt={image.title} 
        />
        <div className="imageCardDetails">
          <p>Title: {image.title}</p>
          {!isEmpty(album) && <p>Album: {album.title}</p>}
        </div>
        <div className="btnWrapper">
          {
            index > 0 && 
            <LinkButton imageId={imageId - 1} btnText={'Prev'}/>
          }
          <LinkButton imageId={imageId + 1} btnText={'Next'}/>  
        </div>
      </div>
    )
  }
}

export default ImageCard