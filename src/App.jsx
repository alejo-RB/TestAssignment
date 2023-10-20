import React from 'react'
import './App.scss'
import { Navbar } from "./components";
import { Header, Stages } from "./container"; 

function App() {
  return (
    <div className='app'>
      <Navbar/>
      <Header/>
      <Stages/>
    </div>
    
  )
}

export default App
