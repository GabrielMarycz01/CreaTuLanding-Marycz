import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { cartContext } from '../../context/cartContext'

const NavBar = () => {
 


  return (
    <div className="navbar">
      <Link to ="/">
        <h1 className="H1logo">Logo Tienda</h1>
      </Link>


        <ul className="ulNavBar">
          <li>
           <Link to={'/categoria/Pc'} className="AdeLink">Pc</Link>
         </li>
          <li>
           <Link to={'/categoria/Playstation'} className="AdeLink">Playstation</Link>
          </li>
          <li>
           <Link to={'/categoria/Xbox'} className="AdeLink">Xbox</Link>
          </li>
         <li>
           <Link to={'/categoria/Nintendo'} className="AdeLink">Nintendo</Link>
          </li>
        </ul>
        <CartWidget />
    </div>
  )
}

export default NavBar