import React from 'react'
import './App.scss'
import { Navbar } from "./components";
import { Header, Product } from "./container"; 

function App() {
  return (
    <div className='app'>
      <Navbar/>
      <Header/>
      <Product/>
    </div>
    
  )
}

export default App
