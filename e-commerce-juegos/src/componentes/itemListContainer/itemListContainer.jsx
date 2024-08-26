import React, { useState, useEffect, useContext } from 'react'
import { getProducts } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { cartContext } from '../../context/cartContext'

const ItemListContainer = ({greeting}) => {
  const [ productos, setProductos ] = useState([])
  const [ loading, setLoading ] = useState(true)



 

  const { cat } = useParams()

  
  useEffect(() => {
    if(cat){
      getProducts().then(res => setProductos(res.filter(e => e.categoria === cat))).finally(setLoading(false))
    }else{
      getProducts().then(res => setProductos(res)).finally(setLoading(false))
    }
  }, [cat])

  console.log(productos)



  if(loading){
    return(
      <h2>Cargando...</h2>
    )
  }

  return (
    <div>
      {
       productos.length > 0 &&  
      <ItemList productos={productos} />
      }
    </div>
  )
}

export default ItemListContainer
