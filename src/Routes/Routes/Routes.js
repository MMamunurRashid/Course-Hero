import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOut/Main";
import Blog from "../../Pages/Blog/Blog";
import CheckOut from "../../Pages/Courses/CheckOut/CheckOut";
import Courses from "../../Pages/Courses/Courses/Courses";
import EachCourse from "../../Pages/Courses/EachCourse/EachCourse";
import FAQ from "../../Pages/FAQ/FAQ";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import NotFound from "../../Pages/NotFound/NotFound";
import Register from "../../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Download from "../../Pages/Courses/ReactToPdf/Download";
export const routes = createBrowserRouter([
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
        path: "/courses",
        loader: () => fetch("https://course-hero-server.vercel.app/course"),
        element: <Courses></Courses>,
      },
      {
        path: "/course/:id",
        element: <EachCourse></EachCourse>,
        loader: ({ params }) =>
          fetch(`https://course-hero-server.vercel.app/course/${params.id}`),
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <CheckOut></CheckOut>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://course-hero-server.vercel.app/course/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },
      {
        path: "/react-to-pdf/:id",
        element: <Download></Download>,
        loader: ({ params }) =>
          fetch(`https://course-hero-server.vercel.app/course/${params.id}`),
      },
      { path: "*", element: <NotFound></NotFound> },
    ],
  },
]);
