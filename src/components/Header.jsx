import React from 'react'
import CartWidget from './CartWidget'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="lf-header">
      <input type="checkbox" style={{ display: 'none' }} id="nav-switch" />
      <div className="top-header">
        <Link to="/">
          <h2>CLC</h2>
        </Link>

        <div className="top-end">
          <label htmlFor="nav-switch" className="burger-btn">
            <i className="bi bi-list"></i>
          </label>
          <CartWidget />
        </div>
      </div>
      <NavBar />
    </header>
  )
}

export default Header
