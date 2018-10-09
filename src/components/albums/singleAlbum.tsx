import * as React from 'react'
import { RouteComponentProps } from "react-router"
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react'

import { IAlbum, Image } from '../../utils/interfaces'
import store from '../../store/store'
import { routes } from '../../utils/constants'
import '../images/images.css'

@observer
class SingleAlbum extends React.Component<RouteComponentProps<any>> {
  componentDidMount() {
    store.fetchSingleAlbum(this.props.match.params.id)
  }

  filterImages = (images : Image[], albumId : string) => {
    return images.filter(image => image.albumId.toString() === albumId)
  }

  render() {
    const { match } = this.props
    const albumId = parseInt(match.params.id, 10)
    const albumImages = this.filterImages(store.images, match.params.id)
    const album : IAlbum = store.getSingleAlbum(albumId)
  
    return (
      <div>
        <h1>{album.title}</h1>
        {
          !store.isLoading ?
          <div className="imageListWrapper">
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
          :
          <div className="loader" />
        }   
      </div>
    )
  }
}

export default SingleAlbum