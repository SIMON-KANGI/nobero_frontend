import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProductsDetails from './pages/products/productDetails'

function App() {
  return (
    <main className='w-screen h-screen'>
    <Navbar/>
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product/:title" element={<ProductsDetails/>}/>
      </Routes>
    </main>
  )
}

export default App
