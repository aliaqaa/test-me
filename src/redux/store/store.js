import { configureStore } from "@reduxjs/toolkit";
import filterCoursesReducer from "../slice/FilterCourses";

const store = configureStore({
  reducer: {
    Filter_Courses: filterCoursesReducer,
  },
});

export default store;
