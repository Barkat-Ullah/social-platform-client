// import { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
// import useAuth from '../../../hooks/useAuth'
import { Link } from "react-router-dom";
// import { TbLogin2 } from "react-icons/tb";
const MenuDropdown = ({ user, isOpen, setIsOpen, handleSignOut, loggedIn }) => {
  //   const { user } = useAuth()

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        {/* Dropdown btn */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />

          {loggedIn ? (
            <div className="mr-6">
              <img
                height="30"
                width="30"
                className="rounded-full"
                referrerPolicy="no-referrer"
                src={loggedIn?.photoURL}
                alt="User"
              />
              {/*  */}
            </div>
          ) : (
            <div className="block">
              <img
                className="rounded-full"
                referrerPolicy="no-referrer"
                src="https://i.ibb.co/N30gbs2/placeholder.jpg"
                alt="profile"
                height="30"
                width="30"
              />
            </div>
          )}
{/* 
          <div className="block">
            <img
              className="rounded-full"
              referrerPolicy="no-referrer"
              src="https://i.ibb.co/N30gbs2/placeholder.jpg"
              alt="profile"
              height="30"
              width="30"
            />
          </div> */}

        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            {loggedIn ? (
              <h2 className="text-white mt-2 text-center">{loggedIn?.displayName}</h2>
            ) : (
              ""
            )}

            {user ? (
              <button
                onClick={handleSignOut}
                className="px-4 py-3 hover:bg-slate-700 transition font-semibold"
              >
                Logout
              </button>
            ) : (
                <>
                <Link
                  to="/login"
                  className="px-4 py-3 text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  font-semibold"
                >
                  Login 
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-3 text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition font-semibold"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuDropdown;
