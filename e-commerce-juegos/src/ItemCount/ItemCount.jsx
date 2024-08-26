import React, { useState, useContext } from 'react'
import { cartContext } from '../context/cartContext'


const ItemCount = ({id}) => {
    const {setCuenta} = useContext(cartContext)
    const [count, setCount] = useState(1)


  return (
    <div>
        <button onClick={() => setCount(count-1)}>-</button>
        <span>{count}</span>
        <button onClick={() => setCount(count+1)}>+</button>
        <button onClick={() => setCuenta(count)}>Agregar a Carrito</button>
    </div>
  )
}

export default ItemCount