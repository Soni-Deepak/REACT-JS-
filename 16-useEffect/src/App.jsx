import React, { useEffect, useState } from 'react'

const App = () => {

  // const [num, setNum] = useState(0)
  // const [num2, setNum2] = useState(100)

  // useEffect(function(){  // useeffect is used to run things in parallel
  //   console.log('Use Effect is Running')
  // }, [num] ) // [num] is dependency

  const [a, setA] = useState(0)

  const [b, setB] = useState(0)

  function aChanging() {
       console.log('A ki value change hogyi') ;
      }

  function bChanging() {
       console.log('B ki value change hogyi') ;
      }

      useEffect(function(){
        aChanging();
      } , [a])

      useEffect(function(){
        bChanging();
      } , [b])

  return (
    // <div>
    //   <h1>num {num}</h1>
    //   <h1>num2 {num2}</h1>

    //   <button onMouseEnter={()=> {
    //     setNum(num + 1)
    //   }} 
    //   onMouseLeave={()=>{
    //     setNum2(num2 + 1)
    //   }}
    //   >Hover</button>
    // </div>

    <div>
     <h1>A is {a}</h1> 
     <h1>B is {b}</h1> 

     <button onClick={()=>{
      setA(a+1);
     }} >
      Change A
     </button>

     <button onClick={()=>{
      setB(b-1);
     }} >
      Change B
     </button>

    </div>
  )
}

export default App
