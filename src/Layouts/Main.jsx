import { Outlet } from "react-router-dom";
import NavBar from "../Components/Shared/NavBar";
import FooTer from "../Components/Shared/FooTer";

const Main = () => {
  return (
    <div className="bg-gray-50 min-h-dvh font-poppins">
      <NavBar />
      <Outlet />
      <FooTer />
    </div>
  );
};

export default Main;
