import { StrictMode } from "react";
import { router } from "./Routes/Routes.jsx";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import StateProvider from "./Providers/StateProvider.jsx";
import AuthProvider from "./Providers/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StateProvider>
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster
          toastOptions={{
            duration: 3500,
          }}
        />
      </AuthProvider>
    </StateProvider>
  </StrictMode>
);
