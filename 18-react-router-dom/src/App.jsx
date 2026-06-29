import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Product from './pages/Product'
//Route => Perticular Route
//Routes => Container for Route 
//benefit of react-router-dom => it is making SPA (single page application) , it change the url and doesn't Reload

// BrowserRouter  => /
// HashRouter     => /#/ 
// MemoryRouter   => stored in memory
// StaticRouter   => use by express , next.js etc

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/about' element ={<About />} /> 
        <Route path='/contact' element ={<Contact />} /> 
        <Route path='/product' element ={<Product />} /> 
      </Routes>
    </div>
  )
}

export default App
