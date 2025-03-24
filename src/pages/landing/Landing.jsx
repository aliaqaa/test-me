import React from 'react'
import { Link } from 'react-router'

function Landing() {
  return (
    <div className='bg-red-200 text-center'>

        landing is empty go to <Link to={'/courses'}>Course</Link>
    </div>
  )
}

export default Landing