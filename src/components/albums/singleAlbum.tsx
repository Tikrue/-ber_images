import * as React from 'react'
import { RouteComponentProps } from "react-router"

// import ImageList from '../images/imageList'
import { IAlbum } from '../../utils/interfaces'

interface IProps {
  albums : IAlbum[]
}

class SingleAlbum extends React.Component<RouteComponentProps<any> & IProps> {
  componentDidMount() {
    // this.props.doLoadImagesForAlbum(this.props.match.params.id)
  }

  render() {
    const {match, albums} = this.props
    const album : IAlbum = 
      albums.find(exactAlbum  => exactAlbum.id.toString() === match.params.id) || {} as IAlbum

    return (
      <div>
        <h2>
          {album.title}
        </h2>
        {/* <ImageList images={}/>*/}
      </div>
    )
  }
}

export default SingleAlbum