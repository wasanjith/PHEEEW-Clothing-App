import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../src/pages/Home'
import Collection from '../src/pages/Collection'
import About from '../src/pages/About'
import Contactc from '../src/pages/Contact'
import Product from '../src/pages/Product'
import Cart from '../src/pages/Cart'
import Login from '../src/pages/Login'
import PlaceHolder from '../src/pages/PlaceHolder'
import Orders from '../src/pages/Orders'
import Navbar from '../src/components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path = '/' element = {<Home/>} /> 
        <Route path = '/collection' element = {<Collection/>} />
        <Route path = '/about' element = {<About/>} />
        <Route path = '/contact' element = {<Contactc/>} />
        <Route path = '/product/:productId' element ={<Product/>} />
        <Route path = '/cart' element = {<Cart/>} />
        <Route path = '/login' element = {<Login/>} />
        <Route path = '/place-holder' element = {<PlaceHolder/>} />
        <Route path = '/orders' element = {<Orders/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App