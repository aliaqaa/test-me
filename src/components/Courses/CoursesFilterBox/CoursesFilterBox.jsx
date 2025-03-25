import React, { useEffect } from "react";
import { useGetCoursesFilter } from "../../../hooks/Courses/useGetCoursesFilter";
import Accordion from "../../common/Accordion/Accordion";
import { FaRegTrashCan } from "react-icons/fa6";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

function CoursesFilterBox({ setSearchParams, searchParams }) {
  const {
    GetTechnologies,
    GetCourseTypes,
    GetAllCourseLevels,
    data,
    loading,
    error,
  } = useGetCoursesFilter();

  useEffect(() => {
    GetTechnologies();
    GetCourseTypes();
    GetAllCourseLevels();
  }, []);

  if (loading.technologies || loading.types || loading.levels) {
    return (
      <div className="flex flex-col w-60 shadow-2xl rounded-2xl p-4 bg-white ">
        <div className="flex justify-between items-center mb-4">
          <Skeleton circle={true} height={20} width={20} />
          <Skeleton height={20} width={80} />
        </div>
        <Skeleton height={30} width={120} style={{ marginBottom: '10px' }} />
        <Skeleton height={30} width={120} style={{ marginBottom: '10px' }} />
        <Skeleton height={30} width={120} style={{ marginBottom: '10px' }} />
      </div>
    );
  }

  if (error.technologies || error.types || error.levels) {
    return <div>Error loading data! Please try again.</div>;
  }

  const handleCheckboxChange = (event, category) => {  
    const inputId = event.target.id;  
    const isChecked = event.target.checked;  

    const currentSelection = searchParams.get(category) ? searchParams.get(category).split(',') : [];  

    if (isChecked) {  
      if (!currentSelection.includes(inputId)) {  
        currentSelection.push(inputId);  
      }  
    } else {  
      const index = currentSelection.indexOf(inputId);  
      if (index > -1) {  
        currentSelection.splice(index, 1);  
      }  
    }  

    if (currentSelection.length > 0) {  
      currentSelection.forEach(id => searchParams.append(category, id));  
    } else {  
      searchParams.delete(category);  
    }  

    setSearchParams(searchParams);  
  };    

  return (
    <div className="flex flex-col w-60 shadow-2xl rounded-2xl p-4 bg-white ">
      <span className="flex justify-between items-center mb-4">
        <FaRegTrashCan
          className="text-red-500 cursor-pointer"
          onClick={() => {
            setSearchParams("");
          }}
        />
        <p>فیلتر ها</p>
      </span>
      <Accordion
        title="Levels"
        content={data.levels}
        category="courseLevelId" 
        searchParams={searchParams} 
        onChange={handleCheckboxChange}
      />
      <Accordion
        title="Technologies"
        content={data.technologies}
        category="ListTech" 
        searchParams={searchParams} 
        onChange={handleCheckboxChange}
      />
      <Accordion
        title="Types"
        content={data.types}
        category="CourseTypeId" 
        searchParams={searchParams} 
        onChange={handleCheckboxChange}
      />
    </div>
  );
}

export default CoursesFilterBox;
