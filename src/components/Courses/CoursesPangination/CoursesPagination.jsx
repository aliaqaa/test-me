import React, { useEffect, useState } from "react";
import { useGetCourses } from "../../../hooks/Courses/useGetCourses";
import CoursesSort from "../CoursesSort/CoursesSort";
import CoursesFilterBox from "../CoursesFilterBox/CoursesFilterBox";
import CourseCard from "../../common/CourseCard/CourseCard";
import { useSearchParams } from "react-router";

function CoursesPagination() {
  const { getCoursesWithPagination, data, loading, error } = useGetCourses();
  const [searchParams, setSearchParams] = useSearchParams();
  const [grid, setGrid] = useState("grid");

  const currentPage = parseInt(searchParams.get("PageNumber")) || 1;
  const pageSize = parseInt(searchParams.get("RowsOfPage")) || 10;
  const totalPages = data?.totalCount / pageSize;

  useEffect(() => {
    getCoursesWithPagination(searchParams);
  }, [searchParams]);

  const handlePageChange = (newPage) => {
    setSearchParams({
      ...Object.fromEntries(searchParams),
      PageNumber: newPage,
      RowsOfPage: 10,
    });
    window.scrollTo(0,550);  

  };

  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 8) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 4) {
        for (let i = 1; i <= 5; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage > totalPages - 4) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push("...");
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push("...");
        pages.push(totalPages);
      }
    }
    return pages;
  };

  return (
    <div className="container m-auto justify-center flex  items-start gap-10  mb-10">
      <div className="flex flex-col">
        <CoursesSort setGrid={setGrid} />
        <div
          className={`${grid === "grid" ? "grid grid-cols-3 gap-10" : "list"}`}
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

        <div className="flex justify-center items-center gap-4 mt-6">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage <= 1}
            className="px-4 py-2 bg-white shadow-2xl disabled:opacity-50 rounded-full text-3xl cursor-pointer"
          >
            &laquo;
          </button>

          {getPageNumbers().map((page, index) =>
            page === "..." ? (
              <span key={index} className="px-2 py-1">
                {page}
              </span>
            ) : (
              <span
                key={index}
                onClick={() => handlePageChange(page)}
                className={`px-3 py-1 cursor-pointer rounded ${
                  page === currentPage ? "bg-orange-500 text-white" : "bg-white"
                }`}
              >
                {page}
              </span>
            )
          )}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage >= totalPages}
            className="px-4 py-2 bg-white shadow-2xl disabled:opacity-50 rounded-full text-3xl cursor-pointer"
          >
            &raquo;
          </button>
        </div>
        </div>

        <CoursesFilterBox
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
    </div>
  );
}

export default CoursesPagination;
