/* eslint-disable react/no-unknown-property */
// import React from 'react';

import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";
// import { ImSpinner9 } from "react-icons/im";

const AdminPrivate = ({ children }) => {
  const { user, loader } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();

  const location = useLocation();

  if (loader || isAdminLoading) {
    return (
      <div className="flex justify-center items-center mt-10 mb-10">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-labelledby="title-04a desc-04a"
          aria-live="polite"
          aria-busy="true"
          className="w-10 h-10 animate animate-spin"
        >
          <title id="title-04a">Icon title</title>
          <desc id="desc-04a">Some desc</desc>
          <circle
            cx="12"
            cy="12"
            r="10"
            className="stroke-slate-200"
            stroke-width="4"
          />
          <path
            d="M12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 9.34784 20.9464 6.8043 19.0711 4.92893C17.1957 3.05357 14.6522 2 12 2"
            className="stroke-[#3BB]"
            stroke-width="4"
          />
        </svg>
      </div>
    );
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminPrivate;
