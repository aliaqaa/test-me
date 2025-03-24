import React from 'react'
import CoursesHero from '../../components/Courses/CoursesHero/CoursesHero'
import CoursesPagination from '../../components/Courses/CoursesPangination/CoursesPagination'

function Courses() {
  return (
    <div className='container m-auto '>
        <CoursesHero/>
        <CoursesPagination/>
    </div>
  )
}

export default Courses