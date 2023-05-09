import React from "react";
import ReactDOM from "react-dom/client";
import FullPlayer from "./pages/fullPlayer/FullPlayer";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/root/Root";
import Home from "./pages/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      {
        path: "/home",
        element: <Home/>,
      },
      {
        path: "/player",
        element: <FullPlayer/>,
      },
    ]
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  //   <RouterProvider router={router} />
  // </React.StrictMode>

  <RouterProvider router={router} />
);
