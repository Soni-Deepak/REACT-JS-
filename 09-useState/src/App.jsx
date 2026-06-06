import React, { useState } from 'react'

const App = () => {

  // const [num, setNum] = useState(10)
  // const [username, setUsername] = useState("Ram")

  // function changeNum(){
  //   setNum(20);
  //   setUsername("Mukesh");
  // }

  const [num, setNum] = useState(0)

  function increaseNum(){
    setNum(num+1);
  }

  function decreaseNum(){
    setNum(num-1);
  }

  function jump5Num(){
    setNum(num+5);
  }


  return (
    <div>
      {/* <h1>Value of num is {num} <br /> Value of user is {username} </h1>
      <button onClick={changeNum} >Click</button> */}

      <h1>{num}</h1>
      <button onClick={increaseNum} >Increase</button> 
      <button onClick={decreaseNum} >Decrease</button>
      <button onClick={jump5Num} >Jump By 5</button>
    </div>
  )
}

export default App
