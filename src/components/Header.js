import React from 'react'
import './Header.css'
import punkLogo from '../assets/header/cryptopunk-logo.png'

const Header = () => {
  return (
    <div className="header">
      <div className="punkLogoContainer">
        <img src={punkLogo} className="punkLogo" alt="" />
      </div>
    </div>
  )
}

export default Header
