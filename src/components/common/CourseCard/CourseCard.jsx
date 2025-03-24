import React from 'react';  

function CourseCard({ img, title, cost, teacherName, currentRegistrants, levelName }) {  
  return (  
    <div className='w-50 h-80 flex flex-col border rounded shadow-lg p-4'>  
      <img   
        src={img}   
        alt={title}   
        className='object-cover h-40 w-full rounded-md'  
        onError={(e) => {   
          e.target.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeG8eNGIrLcY_4JsLdQS_GmbtCrsh-PvXWaQ&s';   
        }}   
      />  
      <h2 className='text-lg font-bold mt-2'>{title}</h2>  
      <p className='text-sm text-gray-700'>Cost: {cost}</p>  
      <p className='text-sm text-gray-700'>Instructor: {teacherName}</p>  
      <p className='text-sm text-gray-700'>Registrants: {currentRegistrants}</p>  
      <p className='text-sm text-gray-700'>Level: {levelName}</p>  
    </div>  
  );  
}  

export default CourseCard;  