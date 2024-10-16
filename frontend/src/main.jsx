import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

import Homepage from "./pages/homepage/Homepage.jsx";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import SignIn from "./pages/sign-in/SignIn.jsx";
import SignUp from "./pages/sign-up/SignUp.jsx";
import ProfileTemp from "./pages/profile-version2/ProfileTemp.jsx";

const ErrorPage = () => {
  return <div>404 Not Found</div>;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        errorElement: <ErrorPage />,
      },
      {
        path: "signin",
        element: <SignIn />,
        errorElement: <ErrorPage />,
      },
      {
        path: "signup",
        element: <SignUp />,
        errorElement: <ErrorPage />,
      },
      {
        path: "profile",
        element: <ProfileTemp />,
        errorElement: <ErrorPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>
);
