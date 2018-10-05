import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import { observer, inject } from 'mobx-react';

import { routes } from '../../utils/constants'
import AlbumList from './albumList'
import SingleAlbum from './singleAlbum'
import Store from '../../store/store'

interface IProps {
  store : Store
}

@inject("store")
@observer
class Albums extends React.Component<IProps> {
  componentDidMount() {
    this.props.store.loadAlbums()
  }

  render() {
    const { store } = this.props
    return (
      <div>
        {
          !store.isLoading &&
          <Switch>
            <Route 
              exact path={routes.albums + '/:id'} 
              render={(props) => <SingleAlbum {...props} albums={store.albums} />} 
            />
            <Route 
              exact path={routes.albums} 
              render={(props) => <AlbumList {...props} albums={store.albums} />} 
            />
          </Switch>
        }
      </div>
    )
  }
}

export default Albums