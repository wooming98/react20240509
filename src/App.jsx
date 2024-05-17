import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BoardAdd } from "./BoardAdd.jsx";
import { BoardEidt } from "./BoardEidt.jsx";
import { BoardList } from "./BoardList.jsx";

// router 객체
const router = createBrowserRouter([
  {
    path: "/add",
    element: <BoardAdd />,
  },
  {
    path: "/edit",
    element: <BoardEidt />,
  },
  {
    path: "/list",
    element: <BoardList />,
  },
]);

function App(props) {
  return <RouterProvider router={router} />;
}

export default App;
