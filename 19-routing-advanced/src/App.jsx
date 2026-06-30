import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import { Route , Routes } from 'react-router-dom'
import About from './pages/About'
import Product from './pages/Product'
import NotFound from './pages/NotFound'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'
import Courses from './pages/Courses'
import CoursesDetails from './pages/CoursesDetails'
import Navbar2 from './components/Navbar2'

const App = () => {
  return (
    <div className='h-screen  bg-black  text-white' >
      <Navbar />
      <Navbar2 />

     <Routes>

      <Route path ='/' element = {<Home />} />
      <Route path ='/about' element = {<About />} />
      <Route path ='/courses' element = {<Courses />} />
      <Route path ='/courses/:Courseid' element = {<CoursesDetails />} /> {/* Dynamic Routing (after colon : you can use any parameter or name) */}

      <Route path ='/product' element = {<Product />} > {/*Nested Routing */}

      <Route path ='men' element = {<Men />} />
      <Route path ='women' element = {<Women />} />
      <Route path ='kids' element = {<Kids />} />

      </Route>

      {/* when no route is found so we use "*" */}
      <Route path='*' element = {<NotFound />} />  

     </Routes>

      <Footer />
    </div>
  )
}

export default App
