import React from 'react'
import ClosedMenu from './Closed/ClosedMenu'
import MiniMenu from './Mini/MiniMenu'

const Menu = ({ type, schema }) => {

  switch (type) {
    case 'closed':
      return <ClosedMenu schema={ schema } />
    case 'mini':
      return <MiniMenu schema={ schema } />
    default:
      return <ClosedMenu schema={ schema } />
  }

}

export default Menu