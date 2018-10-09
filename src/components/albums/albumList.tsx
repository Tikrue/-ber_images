import * as React from 'react'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react'

import { routes } from '../../utils/constants'
import store from '../../store/store'
import './albums.css'

@observer
class AlbumList extends React.Component<{}> {
  componentDidMount() {
    store.fetchAlbums()
  }

  render() {
    return (
      <div className="albumTableWrapper">
        <h1>Albums</h1>
        {
          !store.isLoading ?
          <table className="albumListWrapper">
            <thead>
              <tr className="albumHeaderRow">
                <td>ID</td>
                <td>Title</td>
              </tr>
            </thead>
            <tbody>
              {
                store.albums.map(album =>
                  <tr key={album.id} className="albumRow">
                    <td>{album.id}</td>
                    <td>
                      <Link
                          to={routes.albums + '/' + album.id}
                          className="albumListItem"
                        >
                          {album.title}
                        </Link>
                    </td>
                  </tr>
                )
              }
            </tbody>
          </table>
          :
          <div className="loader" />
        }
      </div>
    )
  }
}

export default AlbumList