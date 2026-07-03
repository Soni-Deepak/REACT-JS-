import React, { useContext, useState } from 'react'
import Nav2 from './Nav2'
import { themeDataContext } from '../context/ThemeContext'

const Navbar = (props) => {

    const [theme] = useContext(themeDataContext)
    // console.log(data)

  return (
    <div className={theme}>
        <h2>Sheryians</h2>
        <Nav2 theme = {props.theme}/>
      
    </div>
  )
}

export default Navbar
