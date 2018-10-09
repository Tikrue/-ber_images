import * as React from 'react'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react'
import Waypoint from 'react-waypoint'

import { routes } from '../../utils/constants'
import store from '../../store/store'

@observer
class ImageList extends React.Component<{}> {
  state = {
    pageNum: 1,
  }

  getMoreImages = () => {
    const { pageNum } = this.state
 
    this.setState({ pageNum: pageNum + 1 }, () => store.fetchImages(this.state.pageNum))
  }

  render() {
    return (
      <div>
        <h1>Images</h1>
          <div className="imageListWrapper">
          {
            store.images.map(image =>
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
          {
            !store.isLoading
            ? <Waypoint 
                bottomOffset = '-500px' 
                onEnter={this.getMoreImages}
              />
            : <div className="loader" /> 
          }
      </div>
    )
  }
}

export default ImageList