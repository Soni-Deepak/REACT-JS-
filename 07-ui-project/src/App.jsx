import React from 'react'
import Section1 from './components/section 1/Section1'
import Section2 from './components/section 2/Section2'

const App = () => {

  const users = [
  {img : 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' , 
    intro : '',
    color : 'royalblue',
    tag : 'Satisfied',
    },

  {img : 'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' , 
    intro : '',
    color : 'lightseagreen',
    tag : 'Underserved',
    },

  {img : 'https://plus.unsplash.com/premium_photo-1683140688508-e3c9e4e7870d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' , 
    intro : '',
    color : 'orange',
    tag : 'Underbanked',
    },

  {img : 'https://images.unsplash.com/photo-1600275669439-14e40452d20b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' , 
    intro : '',
    color : 'pink',
    tag : 'Undertaker',
    },
  ]

  return (
    <div  >
      <Section1 users = {users} />
      <Section2/>
    </div>
  )
}

export default App
