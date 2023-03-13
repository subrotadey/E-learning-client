import { createBrowserRouter } from "react-router-dom";
import Main from "../../../Layout/Main";
import AboutUs from "../../Pages/AboutUs/AboutUs";
import Books from "../../Pages/Books/Books";
import Contact from "../../Pages/Contact/Contact";
import CourseDetails from "../../Pages/Courses/CourseDetails";
import Courses from "../../Pages/Courses/Courses";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import NotFound from "../../Pages/NotFound/NotFound";
import SignUp from "../../Pages/SignUp/SignUp";
import TeacherDetails from "../../Pages/Teachers/TeacherDetails";
import Teachers from "../../Pages/Teachers/Teachers";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/teachers",
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
        path: "/courses",
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
        path: "/books",
        element: <Books></Books>,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <PrivateRoute>
      <Dashboard></Dashboard>
    </PrivateRoute>
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);

export default router;
