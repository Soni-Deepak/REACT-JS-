import React from 'react'

const App = () => {

  // function btnClicked(){
  //   console.log("Button is Clicked");
  // }

  // function mouseEntered(){
  //   console.log("Mouse Entered");
  // }

  // function inputChanging(val){
  //   console.log(val)
  // }
  
  const pageScrolling = (elem)=> {
    // console.log('Page Scrolling...... at speed' , elem)
    if (elem > 0) {
      console.log("Sidha Scrolling");
    } else{
      console.log("Ulta Scrolling");
    }
  }
  return (
    <div>
      {/* <button onMouseEnter={mouseEntered} onClick={btnClicked} >Click Here</button>
      <button onClick={function () {
        console.log("Hello Guys");
      }} >Explore More</button> */}

      {/* There are two methods of passing the arguments in a function */}

      {/* <input onChange={function(elem) {
        console.log(elem.target.value)
      }} type="text" placeholder='Enter Name' />


      <input onChange={function(elem) {
        inputChanging(elem.target.value)
      }} type="text" placeholder='Enter Name' />

      <div className="box" onMouseMove={function (elem) {
        console.log(elem.clientX)
      }}> */}

     <div onWheel={(elem) => {
      // console.log(elem.deltaY)
      pageScrolling(elem.deltaY)
     }} >
       <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
     </div>


      </div>
    // </div>
  )
}

export default App
