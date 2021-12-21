import React from 'react'
import './Header.css'
import punkLogo from '../assets/header/cryptopunk-logo.png'
import searchIcon from '../assets/header/search.png'
import themeSwitchIcon from '../assets/header/theme-switch.png'

const Header = () => {
  return (
    <div className="header">
      <div className="punkLogoContainer">
        <img src={punkLogo} className="punkLogo" alt="logo" />
      </div>

      <div className="searchBar">
        <div className="searchIconContainer">
          <img src={searchIcon} alt="search-icon" />
        </div>

        <input
          type="search"
          className="searchInput"
          placeholder="Collection, item, user..."
        />
      </div>

      <div className="headerItems">
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Create</p>
      </div>

      <div className="headerActions">
          <div className="themeSwitchContainer">
              <img src={themeSwitchIcon} alt="theme-switch-icon" />
          </div>
      </div>

      <div className="loginButton">GET IN</div>
    </div>
  )
}

export default Header
