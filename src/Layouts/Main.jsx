import { Outlet } from "react-router-dom";
import NavBar from "../Components/Shared/NavBar";
import FooTer from "../Components/Shared/FooTer";
import useMyState from "../Hooks/useMyState";

const Main = () => {
  const { filter, setFilter } = useMyState();
  return (
    <div className="relative bg-gray-50 min-h-dvh font-poppins">
      <div
        onClick={() => setFilter(false)}
        className={`${
          filter ? "absolute" : "hidden"
        } bg-gray-950/25 min-h-dvh h-full w-full z-10`}
      />
      <NavBar />
      <Outlet />
      <FooTer />
    </div>
  );
};

export default Main;
