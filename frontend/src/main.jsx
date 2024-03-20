import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage.jsx";
import SignUp from "./Pages/SignUp.jsx";
import SignIn from "./Pages/SignIn.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    errorElement: <ErrorPage />,
  },
  {
    element: <SignUp />,
    path: "/signup",
  },
  {
    element: <SignIn />,
    path: "/login",
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
