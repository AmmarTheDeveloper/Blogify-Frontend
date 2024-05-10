import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

export const AccountInfo = () => {
  const location = useLocation();
  const lastPath = location.pathname.split("/").pop();
  return (
    <>
      <div className="container max-w-[1200px] mx-auto mt-[50px] p-[20px]">
        <h1 className="text-[25px] md:text-[30px] font-[600] mb-10">
          Account Settings
        </h1>
        <div className="md:flex">
          <ul className="flex-column space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0 md:w-[250px] max-w-[100%]">
            <li>
              <Link
                to="/accountInfo/profile"
                className={`${
                  lastPath == "profile"
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "hover:bg-gray-300 bg-gray-200 text-[#282828]"
                } inline-flex items-center px-4 py-3  transition  rounded-lg w-full dark:bg-blue-600`}
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                to="/accountInfo/change-password"
                className={`${
                  lastPath == "change-password"
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "hover:bg-gray-300 bg-gray-200 text-[#282828]"
                }
            inline-flex items-center px-4 py-3  transition  rounded-lg w-full dark:bg-blue-600`}
              >
                Change Password
              </Link>
            </li>
          </ul>
          <div className="tab-content w-full">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
