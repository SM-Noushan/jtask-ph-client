import { Link, useNavigate } from "react-router-dom";
import Search from "../Form/Search";
import useAuth from "../../Hooks/useAuth";
import { Dropdown, Spin } from "antd";
import toast from "react-hot-toast";

const NavBar = () => {
  const { user, loading, logOut } = useAuth();
  const navigate = useNavigate();
  const items = user
    ? [
        {
          label: (
            <p className="capitalize">{user?.displayName || "Anonymous"}</p>
          ),
          key: "0",
        },
        {
          label: <p>{user?.email || "example@mail.com"}</p>,
          key: "1",
        },
        {
          type: "divider",
        },
        {
          label: (
            <button
              onClick={async () => {
                await logOut();
                toast.success("Logout successful");
                navigate("/account/login");
              }}
            >
              Logout
            </button>
          ),
          key: "3",
        },
      ]
    : [];
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
          {loading ? (
            <Spin />
          ) : user ? (
            <>
              {/* <div
                className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">Open user menu</span>
                <img
                  className="size-8 rounded-full object-cover"
                  src={
                    user?.photoURL ||
                    "https://th.bing.com/th/id/OIP.Rg2FmvXuSaiA7GHVqvuY0QHaFj?rs=1&pid=ImgDetMain"
                  }
                  alt=""
                />
              </div> */}
              <Dropdown
                trigger={["click"]}
                menu={{
                  items,
                }}
              >
                <div
                  className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="size-8 rounded-full object-cover"
                    src={
                      user?.photoURL ||
                      "https://th.bing.com/th/id/OIP.Rg2FmvXuSaiA7GHVqvuY0QHaFj?rs=1&pid=ImgDetMain"
                    }
                    alt=""
                  />
                </div>
              </Dropdown>
            </>
          ) : (
            <Link
              to="/account/login"
              className="font-semibold leading-6 text-gray-900"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </Link>
          )}
        </div>
      </nav>
      <div className="flex justify-center sm:hidden pb-6">
        <Search />
      </div>
    </header>
  );
};

export default NavBar;
