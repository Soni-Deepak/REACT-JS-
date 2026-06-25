import React from 'react'

const App = () => {

  // sessionStorage.setItem('user' , 'deepak')  It is temporaly storage which is remove after browser shut down

  // localStorage.setItem("User" , 'deepak'); give both key and value pair
  // localStorage.clear()
  // const user = localStorage.getItem('User') ;  Local storage is permanent storage which is non-erasable after the pc shut down

  // localStorage.removeItem('User')
  // console.log(user)

  // const user = {
  //   name: 'Deepak',
  //   age: 18,
  //   city: 'bhopal',
  // }

  // localStorage.setItem('user' , JSON.stringify(user)) convert to string

  const user = JSON.parse(localStorage.getItem('user'))  //convert to original
  console.log(user)

  return (

    <div>
    App  
    </div>
  )
}

export default App
