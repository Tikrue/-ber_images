import * as React from 'react'
import { RouteComponentProps } from "react-router"
import { observer } from 'mobx-react'

import store from '../../store/store'
import './images.css'

@observer
class ImageCard extends React.Component<RouteComponentProps<any>> {
  componentDidMount() {
    store.doLoadSingleImage(this.props.match.params.id)
  }

  render() {
    const { match } = this.props
    const imageId = match.params.id
    const image = store.getSingleImage(imageId)

    return (
      <div className="imageCard">
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