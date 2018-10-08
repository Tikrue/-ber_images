import * as React from 'react'
import { NavLink } from 'react-router-dom'

import './navigation.css'

interface INavigationProps {
  routes : any
}

const Navigation : React.SFC<INavigationProps> = ({ routes }) => {
  return (
    <ul className="navList">
      <li className="navItem">
        <NavLink
          exact={true} 
          to={routes.home}
          activeClassName="activeNavItem"
          className="navLink"
        >
          Home
        </NavLink>
      </li>
      <li className="navItem">
        <NavLink 
          to={routes.images}
          activeClassName="activeNavItem"
          className="navLink"
        >
          Images
        </NavLink>
      </li>
      <li className="navItem">
        <NavLink 
          to={routes.albums}
          activeClassName="activeNavItem"
          className="navLink"
        >
          Albums
        </NavLink>
      </li>
    </ul>
  )
}

export default Navigation