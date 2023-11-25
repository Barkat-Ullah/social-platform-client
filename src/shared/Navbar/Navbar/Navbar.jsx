import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { NavLink } from "react-router-dom";
import {
  RiNotification3Line,
  RiLoginCircleLine,
  RiHome4Line,
  RiUserSearchLine,
} from "react-icons/ri";
import MenuDropdown from "../MenuComponents/MenuDropdown";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const [loggedIn, setLoggedIn] = useState("");

  useEffect(() => {
    if (user) {
      setLoggedIn(user);
    } else {
      setLoggedIn(null);
    }
  }, [user]);

  const handleSignOut = () => {
    logOut().then().catch();
  };
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-white underline underline-offset-2" : ""
          }
        >
          <div className="flex items-center ">
            Home <RiHome4Line className="ml-1"></RiHome4Line>
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/members"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-white underline underline-offset-2" : ""
          }
        >
          <div className="flex items-center">
            Members <RiUserSearchLine className="ml-1"></RiUserSearchLine>
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/icon"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-white underline underline-offset-2" : ""
          }
        >
          <div className="flex items-center ">
            Notify <RiNotification3Line className="ml-1"></RiNotification3Line>{" "}
            <span className="badge ml-2 mb-2">+99</span>
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/login"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-white underline underline-offset-2" : ""
          }
        >
          <div className="flex items-center">
            Join <RiLoginCircleLine className="ml-1"></RiLoginCircleLine>
          </div>
        </NavLink>
      </li>

      {/* {user?.email ? (
        <>
          <li className="">
            <NavLink
              to="/membership"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-slate-800 " : ""
              }
            ></NavLink>
          </li>
        </>
      ) : (
        ""
      )} */}
    </>
  );

  return (
    <div className="relative">
      <nav className="navbar fixed z-10 bg-opacity-40 max-w-6xl bg-black text-white ">
        <div className="navbar-start ">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-warning lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <div className="sm:ml-2 flex justify-center items-center gap-3">
            <img
              className="w-10 h-10 sm:pl-16 md:w-28 md:h-12 rounded-full"
              src="https://www.numerade.com/static/numerade-n.5ceba4f2f354.svg"
              alt=""
            />
            <span className="text-sm md:text-2xl font-bold text-pink">
              NUMERADE
            </span>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="flex space-x-8 text-white">{links}</ul>
        </div>
        <div className="navbar-end">
          <MenuDropdown
            user={user}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            handleSignOut={handleSignOut}
            loggedIn={loggedIn}
          ></MenuDropdown>

          {/* {loggedIn && (
            <div className=" mr-6 ">
              <img className="w-12 rounded-full " src={loggedIn?.photoURL} />
              <h2 className="text-pink">{loggedIn?.displayName}</h2>
            </div>
          )}

            
          {user ? (
            <button
              onClick={handleSignOut}
              className="btn bg-gradient-to-r from-sky-400 to-blue-500 hover:from-blue-500 hover:to-sky-500 transition delay-150, duration-700, ease-in-out text-white"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="btn bg-gradient-to-r from-sky-400 to-blue-500 hover:from-blue-500 hover:to-sky-500 transition delay-150, duration-700, ease-in-out text-white"
            >
              Login
            </Link>
          )} */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
