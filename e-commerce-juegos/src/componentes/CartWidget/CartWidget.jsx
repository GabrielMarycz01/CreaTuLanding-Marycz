import React, {useContext} from 'react'
import { IoCartOutline,   } from "react-icons/io5";
import { cartContext } from '../../context/cartContext';
import { CiBellOn, CiShoppingCart } from 'react-icons/ci';




const CartWidget = () => {
  const cart = useContext(cartContext)


  return (
    <div className='carrito'>
        <CiBellOn />
        <span>{cart.cuenta}</span>
        <CiShoppingCart />
    </div>
  )
}

export default CartWidget