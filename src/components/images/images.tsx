import * as React from 'react'
import { Route, Switch } from 'react-router-dom'

import { routes } from '../../utils/constants'
import ImageList from './imageList'
import ImageCard from './imageCard'
import './images.css'

const Images : React.SFC<{}> = () => {
  return (
    <div>  
      <div>
        <Switch>
          <Route 
            exact path={routes.images + '/:id'} 
            component={ImageCard}
          />
          <Route 
            exact path={routes.images} 
            component={ImageList} 
          />
        </Switch>
      </div>   
    </div>
  )
}

export default Images