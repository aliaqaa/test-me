import React from "react";
import fallbackimg from "/src/assets/photos/Teach-Your-Kids-Code-Front-Page-Image-1.jpg";
import { PiStudentFill } from "react-icons/pi";
import { FaUser } from "react-icons/fa";
import { FaLayerGroup } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";

function CourseCard({
  img,
  title,
  cost,
  teacherName,
  currentRegistrants,
  levelName,
}) {
  return (
    <div className="  flex flex-col border rounded shadow-lg p-4 bg-white w-full cursor-pointer ">
      <img
        src={img || fallbackimg}
        alt={title}
        className="object-cover h-40 w-full rounded-md -translate-y-10"
        onError={(e)=>{e.target.src = fallbackimg}}
      />
      <h2 className="text-2xl font-bold flex justify-end my-1">{title}</h2>
      <span className="flex justify-between">
        <p className="text-2xl text-gray-700 flex items-center gap-2">
          <PiStudentFill />
          {currentRegistrants}
        </p>
        <p className="text-2xl text-gray-700 flex items-center gap-2">
          {teacherName}
          <FaUser />
        </p>
      </span>
      <p className="text-2xl text-gray-700 flex items-center gap-2">
        <FaLayerGroup />
        {levelName}
      </p>
      <hr className="my-2" />
      <span className="flex justify-between text-sky-500 text-2xl my-4">
        <h1 className="flex items-center gap-2">
          <p>تومان</p>
          {cost}
        </h1>
        <MdAddShoppingCart />
      </span>
    </div>
  );
}

export default CourseCard;
