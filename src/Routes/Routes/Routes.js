import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOut/Main";
import Courses from "../../Pages/Courses/Courses/Courses";
import EachCourse from "../../Pages/Courses/EachCourse/EachCourse";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";

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
        path: "/courses",
        loader: () => fetch("https://course-hero-server.vercel.app/course"),
        element: <Courses></Courses>,
      },
      {
        path: "/course/:id",
        element: <EachCourse></EachCourse>,
        loader: ({ params }) => {
          fetch(`https://course-hero-server.vercel.app/course/${params.id}`);
        },
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
