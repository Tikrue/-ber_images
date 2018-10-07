import * as React from 'react'
import { Route, Switch } from 'react-router-dom'

import { routes } from '../../utils/constants'
import AlbumList from './albumList'
import SingleAlbum from './singleAlbum'

const Albums : React.SFC<{}> = () => {
  return (
    <div>
      <Switch>
        <Route 
          exact path={routes.albums + '/:id'} 
          component={SingleAlbum} 
        />
        <Route 
          exact path={routes.albums} 
          component={AlbumList} 
        />
      </Switch>
    </div>
  )
}

export default Albums