import { Outlet } from "react-router-dom";
import NavBar from "../Components/Shared/NavBar";

const Main = () => {
  return (
    <div className="bg-gray-50 min-h-dvh">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Main;
