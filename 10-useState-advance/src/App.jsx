import React, { useState } from 'react'

const App = () => {


  // const [num, setNum] = useState({user: 'Sarthak' , age : 29})

  // const btnClicked =()=>{
    // there are two different methods 

    // setNum(prev=> ({...prev , age: 50}))
     
  //   const newNum = {...num}; //destruct
  //   newNum.user = 'Aman';
  //   newNum.age = 19;
  //   setNum(newNum);

  // }

  // const [num, setNum] = useState([10 , 20 , 30])

  // const btnClicked = () => {
  //   const newNum = [...num]
  //   newNum.push(99);
  //   setNum(newNum);
  // }

  //BATCH UPDATE

  const [num, setNum] = useState(10)

  const btnClicked = () => {
    setNum(prev => (prev+1))
    setNum(prev => (prev+1))
    setNum(prev => (prev+1))
  }

  return (
    <div>
      {/* <h1>{num.user} , {num.age} </h1>
      <button onClick={btnClicked} >Click</button> */}

      {/* <h1>{num}</h1>
      <button onClick={btnClicked} >Clcik</button> */}

      {/* BATCH UPDATE */}
      <h1>{num}</h1>
      <button onClick={btnClicked} >Click</button>
    </div>
  )
}

export default App
