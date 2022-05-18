import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const cartValue = useSelector(store=> store.cart)
  const [showNav, setShowNav] = useState(false)
  return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-danger">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={showNav} aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" onClick={()=>setShowNav(!showNav)}></span>
            </button>
            <div className={`collapse navbar-collapse ${showNav ? 'show' : ''}`} id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/cart">Cart {cartValue.cartItems.length}</Link>
                </li>
              </ul>
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </>
  )
}

export default Navbar