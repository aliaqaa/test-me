import React, { useEffect } from 'react';  
import { useDispatch, useSelector } from 'react-redux';
import { useGetCoursesFilter } from '../../../hooks/Courses/useGetCoursesFilter';  
import Accordion from '../../common/Accordion/Accordion';
import { setLevelId, setTypeId, setListTech } from '../../../redux/slice/FilterCourses';

function CoursesFilterBox() {  
  const dispatch = useDispatch();
  const filterState = useSelector((state) => state.Filter_Courses);

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
    return <div>Loading...</div>;  
  }  

  if (error.technologies || error.types || error.levels) {  
    return <div>Error loading data! Please try again.</div>;  
  }


  return (  
    <div>  
      <Accordion 
        title="Levels" 
        content={data.levels} 
        selected={filterState.courseLevelId}
        onChange={(id) => dispatch(setLevelId(id))}
      />
      <Accordion 
        title="Technologies" 
        content={data.technologies} 
        selected={filterState.ListTech}
        onChange={(id) => dispatch(setListTech(id))}
      />
      <Accordion 
        title="Types" 
        content={data.types} 
        selected={filterState.CourseTypeId}
        onChange={(id) => dispatch(setTypeId(id))}
      />
    </div>  
  );  
}  

export default CoursesFilterBox;
