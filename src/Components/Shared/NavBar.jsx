import { Link } from "react-router-dom";
import Search from "../Form/Search";

const NavBar = () => {
  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        {/* Website Logo */}
        <div className="flex sm:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Website Logo</span>
            <img
              className="size-8 w-auto"
              src="./logo-transparent-bg.png"
              alt="website-logo"
            />
          </Link>
        </div>
        {/* Search Bar */}
        <div className="hidden sm:flex max-w-md">
          <Search />
        </div>

        <div className="flex flex-1 items-center justify-end">
          <Link
            to="'/login"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <div className="flex justify-center sm:hidden pb-6">
        <Search />
      </div>
    </header>
  );
};

export default NavBar;
