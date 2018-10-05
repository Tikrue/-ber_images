import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import Waypoint from 'react-waypoint'
import { observer, inject } from 'mobx-react';

import { routes } from '../../utils/constants'
import Store from '../../store/store'
import ImageList from './imageList'
import ImageCard from './imageCard'

interface IProps {
  store : Store
}

@inject("store")
@observer
class Images extends React.Component<IProps> {
  state = {
    pageNum: 1,
  }

  componentDidMount() {
    this.props.store.loadImages(this.state.pageNum)  
  }

  getMoreImages = () => {
    const newPageNum = this.state.pageNum + 1

    this.props.store.loadImages(newPageNum)

    this.setState({ pageNum: newPageNum })
  }

  render() {
    const { store } = this.props

    return (
      <div>  
        <div>
          <Switch>
            <Route 
              exact path={routes.images + '/:id'} 
              render={(props) => <ImageCard {...props} images={store.images} />} 
            />
            <Route 
              exact path={routes.images} 
              render={(props) => <ImageList {...props} images={store.images} />} 
            />
          </Switch>
        </div>
        {
          !store.isLoading ? 
          <Waypoint onEnter={this.getMoreImages} /> : 
          <div style={{fontWeight: 'bold', fontSize: 3+'em'}}>
            Loading images...
          </div>
        }
      </div>
    )
  }
}

export default Images