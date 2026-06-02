import React from 'react'
import { User } from "lucide-react";

const Card = (props) => {
  return (
    <div>
      <div className="Card">

<div>
        <div className="top">

        <button>
           <User size={17} /> Available
        </button>

        <div className="img">
            <img src={props.image} alt="" />
        </div>
        </div>

        <div className="center">
        <h2>{props.name}</h2>
        <p>{props.job}</p>
        
        <div className="tag">
          <h4>{props.qualification1}</h4>
        <h4>{props.qualification2}</h4>
        <h4>{props.qualification3}</h4>
        </div>
      
        <p>{props.para} </p>
        </div>
</div>

        <div className="bottom">
        <button>
          View Profile
        </button>
        </div>
      </div>
    </div>
  )
}

export default Card
