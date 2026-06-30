import React from 'react'
import { useParams } from 'react-router-dom'

const CoursesDetails = () => {

    const params = useParams();  {/* useParams gives the after slash value */}
    // console.log(params);

  return (
    <div>
      <h1>{params.Courseid} Courses Details Page</h1>
    </div>
  )
}

export default CoursesDetails
