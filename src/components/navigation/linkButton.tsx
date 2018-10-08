import * as React from 'react'
import { Link } from 'react-router-dom'

import { routes } from '../../utils/constants'

interface ILinkButtonProps {
  imageId : number
  btnText : any
}

const LinkButton : React.SFC<ILinkButtonProps> = ({ imageId, btnText }) => {
  return (
    <Link
      to={routes.images + '/' + imageId}
    >
      <button className="linkBtn">{btnText}</button>
    </Link>
  )
}

export default LinkButton