import React from "react";

function Card(){


let user = "Deepak";
let age = 54;

    return ( <div className="card">
            <h1>Hey I am {user}</h1>
            <h3>And My age is {age}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, illum.</p>
          
          </div>
    )
}

export default Card;