import React from 'react'
import {Link} from 'react-router-dom'

export default (props) => (
  <nav className='Nav'>
      <Link to='/'>Home</Link>
      <Link to='/settings'>Settings</Link>
  </nav>
)
