import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../../Layout/DashboardLayout";
import Main from "../../../Layout/Main";
import AboutUs from "../../Pages/AboutUs/AboutUs";
import Books from "../../Pages/Books/Books";
import Contact from "../../Pages/Contact/Contact";
import CourseDetails from "../../Pages/Courses/CourseDetails";
import Courses from "../../Pages/Courses/Courses";
import AddCourse from "../../Pages/Dashboard/AddCourse/AddCourse";
import AddTeacher from "../../Pages/Dashboard/AddTeacher/AddTeacher";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import UpdateCourse from "../../Pages/Dashboard/ManageCourses/UpdateCourse";
import ManageTeachers from "../../Pages/Dashboard/ManageTeachers/ManageTeachers";
import MyBooking from "../../Pages/Dashboard/MyBooking/MyBooking";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import NotFound from "../../Pages/NotFound/NotFound";
import SignUp from "../../Pages/SignUp/SignUp";
import TeacherDetails from "../../Pages/Teachers/TeacherDetails";
import Teachers from "../../Pages/Teachers/Teachers";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ManageCourses from "../../Pages/Dashboard/ManageCourses/ManageCourses";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import BookDetail from "../../Pages/Books/BookDetail";
import ForgetPassword from "../../Pages/Login/ForgetPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <DisplayError></DisplayError>,
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
          return fetch("https://e-learning-server-hazel.vercel.app/teachers");
        },
        element: <Teachers></Teachers>,
      },
      {
        path: "/teachers/:teacherId",
        loader: async ({ params }) => {
          return fetch(
            `https://e-learning-server-hazel.vercel.app/teachers/${params.teacherId}`
          );
        },
        element: <TeacherDetails></TeacherDetails>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
      },
      {
        path: "/forgetpassword",
        element: <ForgetPassword></ForgetPassword>,
      },

      // loader: async () => {
      //   return fetch("https://e-learning-server-hazel.vercel.app/courses");
      // },
      // {
      //   path: "/",
      //   loader: async () => {
      //     return fetch("https://e-learning-server-hazel.vercel.app/courses");
      //   },
      //   element: <Home></Home>,
      // },
      // {
      //   path: "/",
      //   loader: async () => {
      //     return fetch("https://e-learning-server-hazel.vercel.app/courses");
      //   },
      //   element: <HomeCourses></HomeCourses>,
      // },
      {
        path: "/course/:courseId",
        loader: async ({ params }) => {
          return fetch(
            `https://e-learning-server-hazel.vercel.app/courses/${params.courseId}`
          );
        },
        element: (
          <PrivateRoute>
            <CourseDetails></CourseDetails>,
          </PrivateRoute>
        ),
      },
      {
        path: "/books",
        loader: async () => {
          return fetch("https://e-learning-server-hazel.vercel.app/books");
        },
        element: <Books></Books>,
      },
      {
        path: "/books/:bookId",
        loader: async ({ params }) => {
          return fetch(
            `https://e-learning-server-hazel.vercel.app/books/${params.bookId}`
          );
        },
        element: <BookDetail></BookDetail>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: "/dashboard",
        element: <MyBooking></MyBooking>,
      },
      {
        path: "/dashboard/allusers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/addcourse",
        element: (
          <AdminRoute>
            <AddCourse></AddCourse>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/managecourses",
        loader: async () => {
          return fetch("https://e-learning-server-hazel.vercel.app/courses");
        },
        element: (
          <AdminRoute>
            <ManageCourses></ManageCourses>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/updateCourse/:id",
        element: (
          <AdminRoute>
            <UpdateCourse></UpdateCourse>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/addteacher",
        element: (
          <AdminRoute>
            <AddTeacher></AddTeacher>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manageteachers",
        element: (
          <AdminRoute>
            <ManageTeachers></ManageTeachers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        element: (
          // <AdminRoute>
            <Payment></Payment>
          // </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://e-learning-server-hazel.vercel.app/bookings/${params.id}`
          ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);

export default router;
