import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage/HomePage'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import ShopCategory from './pages/ShopCategory/ShopCategory'
import LoginSignup from './pages/LoginSignup/LoginSignup'
import Cart from './pages/Cart/Cart'
import Product from './pages/Product/Product'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import men_banner from './assets/banner_mens.png'
import women_banner from './assets/banner_women.png';
import kid_banner from './assets/banner_kids.png';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/men' element={<ShopCategory banner={men_banner} category={'men'}/>}/>
          <Route path='/woman' element={<ShopCategory banner={women_banner} category={'women'}/>}/>
          <Route path='/kids' element={<ShopCategory banner={kid_banner} category={'kid'}/>}/>
          <Route path='/login' element={<LoginSignup/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
     
    </>
  )
}

export default App
