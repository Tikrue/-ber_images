import * as React from 'react'
import { RouteComponentProps } from "react-router"
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react'

import { IAlbum, Image } from '../../utils/interfaces'
import store from '../../store/store'
import { routes } from '../../utils/constants'

@observer
class SingleAlbum extends React.Component<RouteComponentProps<any>> {
  componentDidMount() {
    store.doLoadImagesPerAlbum(this.props.match.params.id)
  }

  filterImages = (images : Image[], albumId : string) => {
    return images.filter(image => image.albumId.toString() === albumId)
  }

  render() {
    const { match } = this.props
    const albumId = match.params.id
    const albumImages = this.filterImages(store.images, match.params.id)
    const album : IAlbum = store.getSingleAlbum(albumId)
  
    return (
      <div>
        {
          !store.isLoading &&
          <div className="albumWrapper">
            <h2>
              {album.title}
            </h2>
            {
              albumImages.map(image => 
                <Link
                to={routes.images + '/' + image.id}
                key={image.id}
              >
                <img 
                  className="imageCard" 
                  src={image.thumbnailUrl}
                  alt={image.title} 
                />
              </Link>
              )
            }
          </div>
        }  
      </div>
    )
  }
}

export default SingleAlbum