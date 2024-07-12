import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <div className="navbar">
        <h1>Logo Tienda</h1>
        <button>Playstation</button>
        <button>Xbox</button>
        <button>Nintendo</button>
        <button>Pc</button>
        <CartWidget />
    </div>
  )
}

export default NavBar