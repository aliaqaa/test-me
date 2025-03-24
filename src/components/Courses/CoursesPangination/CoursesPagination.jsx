import React, { useEffect, useState } from "react";
import { useGetCourses } from "../../../hooks/Courses/useGetCourses";
import CoursesSort from "../CoursesSort/CoursesSort";
import CoursesFilterBox from "../CoursesFilterBox/CoursesFilterBox";
import CourseCard from "../../common/CourseCard/CourseCard";
import { useSelector } from "react-redux";

function CoursesPagination() {
  const { getCoursesWithPagination, data, loading, error } = useGetCourses();
  const query = useSelector((state) => state.Filter_Courses);
  const [grid, setGrid] = useState("grid");
  useEffect(() => {
    getCoursesWithPagination(query);
  }, []);
  return (
    <div className="container m-auto justify-center flex">
      <div className="flex flex-col">
        <CoursesSort setGrid={setGrid} />
        <div
          className={`${grid === "grid" ? "grid grid-cols-3 gap-4" : "list"}`}
        >
          {data?.courseFilterDtos?.map((course) => (
            <CourseCard
              title={course.title}
              img={course.tumbImageAddress}
              key={course.courseId}
              cost={course.cost}
              teacherName={course.teacherName}
              currentRegistrants={course.currentRegistrants}
              levelName={course.levelName}
            />
          ))}
        </div>
      </div>
      <CoursesFilterBox />
    </div>
  );
}

export default CoursesPagination;
