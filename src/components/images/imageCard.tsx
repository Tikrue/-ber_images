import * as React from 'react'
import { RouteComponentProps } from "react-router"

import { Image } from '../../utils/interfaces'

interface IProps {
  images : Image[]
}

class ImageCard extends React.Component<RouteComponentProps<any> & IProps> {
  render() {
    const {match, images} = this.props
    const image : Image = 
      images.find(exactImage => exactImage.id.toString() === match.params.id) || {} as Image

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