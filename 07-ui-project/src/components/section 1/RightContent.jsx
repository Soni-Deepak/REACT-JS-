import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='right' className='p-6 flex overflow-x-auto rounded-4xl flex-nowrap gap-10 h-full w-2/3' >
      {/* <RightCard/> */}

      {props.users.map(function(elem , idx) {

        return <RightCard key ={idx} id = {idx} img ={elem.img} tag = {elem.tag} color = {elem.color} />
      })}

    </div>
  )
}

export default RightContent
