import { createBrowserRouter } from "react-router-dom";
import Main from "../../../Layout/Main";
import Books from "../../Pages/Books/Books";
import CourseDetails from "../../Pages/Courses/CourseDetails";
import Courses from "../../Pages/Courses/Courses";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import NotFound from "../../Pages/NotFound/NotFound";
import TeacherDetails from "../../Pages/Teachers/TeacherDetails";
import Teachers from "../../Pages/Teachers/Teachers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "home",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "teachers",
        loader: async () => {
          return fetch("https://edulogy.onrender.com/teacher");
        },
        element: <Teachers></Teachers>,
      },
      {
        path: "/teacher/:teacherId",
        loader: async ({ params }) => {
          return fetch(
            `https://edulogy.onrender.com/teacher/${params.teacherId}`
          );
        },
        element: <TeacherDetails></TeacherDetails>,
      },
      {
        path: "courses",
        loader: async () => {
          return fetch("https://edulogy.onrender.com/course");
        },
        element: <Courses></Courses>,
      },
      {
        path: "/course/:courseId",
        loader: async ({ params }) => {
          return fetch(
            `https://edulogy.onrender.com/course/${params.courseId}`
          );
        },
        element: <CourseDetails></CourseDetails>,
      },
      {
        path: "books",
        element: <Books></Books>
      }
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);

export default router;
