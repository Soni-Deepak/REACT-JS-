import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className="parent">

      <Card user='Deepak' age={18} img="https://imgs.search.brave.com/lmtAwzSRiQ_tZ2UVPwAULaq_hot6l_PybwoVaKUmD9E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9rZnR6d2R5/YXV3dDkvNVZWQnhE/V2hzNkNwNlJFaWZZ/bmxvUy84MWMwMmI1/ZDczZGI1ZGM4NTM2/NWUxNWZlYjNiNThl/NC9BbmFzdHJvbmF1/dHJpZGluZ2Fob3Jz/ZWluYXBob3RvcmVh/bGlzdGljc3R5bGU5/LmpwZz93PTM4NDAm/cT05MCZmbT13ZWJw" />

      <Card user='sarthak' age={21} img='https://images.pexels.com/photos/37660830/pexels-photo-37660830.jpeg' />

      <Card user='Aadi' age={42} img='https://images.pexels.com/photos/36815593/pexels-photo-36815593.jpeg' />

    </div>
  )
}

export default App
