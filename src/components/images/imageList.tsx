import * as React from 'react'
import { Link } from 'react-router-dom'

import { routes } from '../../utils/constants'
import { Image } from '../../utils/interfaces'

import './images.css'

interface IProps {
  images : Image[]
}
 
const ImageList : React.SFC<IProps> = (props) => {
  return (
    <div>
      <h1>Images</h1>
      <div className="imageListWrapper">
        {
          props.images.map(image =>
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
    </div>
  )
}

export default ImageList