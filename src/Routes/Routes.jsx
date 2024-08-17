import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Products from "../Pages/Products/Products";

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
]);
