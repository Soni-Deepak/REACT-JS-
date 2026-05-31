//RAFCE -> shortcut

import React from 'react'
import Card from './components/card'
import Navbar from './components/Navbar'

const App = () => {



  return (
    <div>
      <Navbar />

       {Card()} {<br></br>}
        <Card/>
       
    </div>
  )
}

export default App
