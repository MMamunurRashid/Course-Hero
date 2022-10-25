import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOut/Main";
import Courses from "../../Pages/Courses/Courses/Courses";
import Home from "../../Pages/Home/Home";

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
        path: "courses",
        loader: () => fetch("https://course-hero-server.vercel.app/course"),
        element: <Courses></Courses>,
      },
    ],
  },
]);
