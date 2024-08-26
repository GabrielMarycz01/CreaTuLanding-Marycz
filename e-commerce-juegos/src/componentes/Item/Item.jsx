import React from 'react'
import "./Item.css"
import { Link } from 'react-router-dom'

const Item = ({ e }) => {
  return (
    <div className='ItemCard'>
        <h2>{e.nombre}</h2>
        <img src={e.image} alt="foto producto" />
        <p>${e.precio}</p>
        <p>Hay {e.stock} Productos.</p>
        <Link to={`/detalle/${e.id}`} className="LinkDetalle">Ver Detalle</Link>
    </div>
  )
}

export default Item