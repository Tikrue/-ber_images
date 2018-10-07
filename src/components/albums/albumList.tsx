import * as React from 'react'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react'

import { routes } from '../../utils/constants'
import store from '../../store/store'
import './albums.css'

@observer
class AlbumList extends React.Component<{}> {
  componentDidMount() {
    store.doLoadAlbums()
  }

  render() {
    return (
      <div>
        <h1>Albums</h1>
        <div className="albumListWrapper">
          {
            store.albums.map(album =>
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
}

export default AlbumList