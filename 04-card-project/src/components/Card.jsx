import React from 'react'
import { Bookmark } from "lucide-react";

const Card = (props) => {
  return (
   <div className="card">

          <div>

          <div className="top">
            <img
              src="https://imgs.search.brave.com/siHHGkmIuk_-XyHCnFJ5xy74HYTP0NMdaNx1GZP8Rqg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/aWNvbnM4LmNvbS8z/ZC1mbHVlbmN5LzEy/MDAvYW1hem9uLmpw/Zw"
              alt=""
            />
            <button>
              Save <Bookmark />
            </button>
          </div>
          

          <div className="center">
            <h3>{props.company} <span>5 Days ago</span></h3>
            <h2>Senior UI/UX Designer</h2>
            <div className="tag">
              <h4>Part Time</h4>
              <h4>Senior Level</h4>
            </div>

          </div>

          </div>

          <div className="bottom">
            <div>
            <h3>$120/hr</h3>
            <p>Mumbai , India</p>
            </div>
              <button>Apply Now</button>

          </div>

        </div>
  )
}

export default Card


