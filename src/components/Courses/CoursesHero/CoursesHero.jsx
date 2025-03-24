import React from 'react'
import { FaSearch } from 'react-icons/fa'

function CoursesHero() {
  return (
    <div className="container mx-auto rounded-2xl p-4 sm:p-6 my-20  ">
      <div className="container m-auto bg-[#EBF9F982] rounded-2xl h-48 sm:h-64 absolute w-full -z-10 mt-10"></div>

      
      <div className="flex flex-col lg:flex-row justify-around items-center ">
      <div id="leftside" className="relative -top-10 lg:-top-0 max-lg:my-20">
          <img
            src="/src/assets/photos/courses hero section shape.png"
            alt="courses hero section shape"
            className="w-full max-w-xs sm:max-w-sm lg:max-w-md "
          />
          <img
            src="/src/assets/photos/backcoursesec.png"
            alt="backcoursesec"
            className="absolute top-0 left-12 sm:left-24 w-60  "
          />
        </div>
        <div id="rightside" className="text-center lg:text-left mb-8 lg:mb-0 ">
          <span className=" text-black disc-green font-extrabold text-2xl sm:text-3xl lg:text-4xl mt-10 sm:mt-20 items-center">
            دوره های آموزشی
          </span>
          <h3 className="my-2 mb-6 sm:mb-10 font-extralight text-gray-600 text-sm sm:text-base lg:text-lg">
            به روز ترین دوره هایی که میتونید پیدا کنید
          </h3>
          <span className="border border-gray-200 rounded-full p-2 sm:p-3 bg-white flex items-center justify-between w-full sm:w-80">
            <input
              type="text"
              className="bg-transparent focus:outline-none px-2 w-full"
              placeholder="چی میخوای یاد بگیری؟..."
            />
            <button className="bg-orange-500 p-2 rounded-full text-white">
              <FaSearch />
            </button>
          </span>
        </div>
        
      </div>
    </div>
  )
}

export default CoursesHero