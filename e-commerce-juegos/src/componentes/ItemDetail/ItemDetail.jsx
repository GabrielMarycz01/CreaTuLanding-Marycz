import React from 'react'
import ItemCount from '../../ItemCount/ItemCount'
import "../../componentes/Item/Item.css";





 export const ItemDetail = ({producto}) => {
  
    const {nombre, desc, image, precio, id} = producto
    return (
    <div className='detalleProducto'>
        <h3>{nombre}</h3>
        <img src={image} alt={`fotoproducto ${nombre}`}  />
        <p>{desc}</p>
        <p>{precio}</p>
        <ItemCount id={id}/>

    </div>
  )
}

