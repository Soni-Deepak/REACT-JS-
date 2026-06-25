import React from "react";
import axios from "axios"; // it is a 3rd party library which is helpful in error deduction and easy to use
import { useState } from "react";

const App = () => {

  //By Fetch
  //  async function getData (){
  //     const response = await  fetch('https://jsonplaceholder.typicode.com/todos/1')

  //     const data = await response.json() // json is also asynchronous so we used await

  //     // console.log(response);
  //     console.log(data);
  //   }

  const [data, setData] = useState([])

  //By Anxios
  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list')

    // console.log(response.data)
    setData(response.data)
  }

  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map(function (elem , idx) {
          return <h3>Hello , {elem.author} {idx}</h3>
        })}
      </div>
    </div>
  );
};

export default App;
