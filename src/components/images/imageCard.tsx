import * as React from 'react'
import { RouteComponentProps } from "react-router"

import store from '../../store/store'

class ImageCard extends React.Component<RouteComponentProps<any>> {
  render() {
    const { match } = this.props
    const imageId = match.params.id
    const image = store.getSingleImage(imageId)

    console.log(image)

    return (
      <div>
        <img 
          src={image.url}
          alt={image.title} 
        />
        <div>
          {image.title}
        </div>
      </div>
    )
  }
}

export default ImageCard