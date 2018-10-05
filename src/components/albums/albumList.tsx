import * as React from 'react'
import { Link } from 'react-router-dom'

import { routes } from '../../utils/constants'
import { IAlbum } from '../../utils/interfaces'
import './albums.css'

interface IProps {
  albums : IAlbum[]
}
 
const AlbumList : React.SFC<IProps> = (props) => {
  console.log(props)
  return (
    <div>
      <h1>Albums</h1>
      <div className="albumListWrapper">
        {
          props.albums.map(album =>
            <Link
              to={routes.albums + '/' + album.id}
              key={album.id}
            >
              <div>{album.title}</div>
            </Link>
          )
        }
      </div>
    </div>
  )
}

export default AlbumList