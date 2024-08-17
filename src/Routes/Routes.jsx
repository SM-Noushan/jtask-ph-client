import Main from "../Layouts/Main";
import Account from "../Pages/Account/Account";
import Products from "../Pages/Products/Products";
import SignIn from "../Components/Account/SignIn";
import SignUp from "../Components/Account/SignUp";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Products />,
      },
    ],
  },
  {
    path: "/account",
    element: <Account />,
    children: [
      {
        path: "login",
        element: <SignIn />,
      },
      {
        path: "register",
        element: <SignUp />,
      },
    ],
  },
]);
