import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage.jsx";
import SignUp from "./Pages/SignUp.jsx";
import SignIn from "./Pages/SignIn.jsx";
import Home from "./Pages/Home.jsx";
import Allentries from "./Pages/Allentries.jsx";
import Myentries from "./Pages/Myentries.jsx";
import Aboutus from "./Pages/Aboutus.jsx";
import ContactUs from "./Pages/ContactUs.jsx";
import Navbar from "./components/Narbar.jsx";

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
  {
    element: <Home />,
    path: "/home",
  },
  {
    element: <Allentries />,
    path: "/allentries",
  },
  {
    element: <Aboutus />,
    path: "/about",
  },
  {
    element: <ContactUs />,
    path: "/contact",
  },
  {
    element: <Myentries />,
    path: "/myentries",
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
