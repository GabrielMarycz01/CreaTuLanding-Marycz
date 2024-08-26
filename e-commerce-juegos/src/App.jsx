import './App.css'
import { ItemDetailContainer } from './componentes/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './componentes/itemListContainer/itemListContainer';
import NavBar from './componentes/NavBar/NavBar'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { CartContextProvider } from './context/cartContext';


function App() {


  return (
    <>

    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/categoria/:cat' element={<ItemListContainer/>}/>
          <Route path='/detalle/:id' element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
    </>
  )
}

export default App
