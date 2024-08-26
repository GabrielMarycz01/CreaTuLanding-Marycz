
import React, {useEffect, useState} from 'react'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { getSingleProduct } from '../../asyncMock'
import { useParams } from 'react-router-dom'

export const ItemDetailContainer = () => {
    const [producto , setProducto] = useState({})
    const [loading , setLoading] = useState(true)
    const [error , setError] = useState()
    const [ mensaje, setMensaje] = useState("")

    const {id} = useParams()

    useEffect(() => {
        getSingleProduct(id).then(res => setProducto(res)).finally(
            setLoading(false)
        )
    }, [])
 
    if(loading){
        return(
            <h1>Cargando...</h1>
        )
    }
 
    return (
    <div>
        <ItemDetail producto={producto}/>
    </div>
  )
}

