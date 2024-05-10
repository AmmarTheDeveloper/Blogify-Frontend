import { useSelector } from "react-redux";
import React, { useState } from "react";
import { handleForm } from "./validateChangePasswordForm";

export const ChangePassword = () => {
  const user = useSelector((state) => state.userLoggedInState.user);
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState(null);
  let id = user._id;

  return (
    <>
      <div id="change_password">
        <h2 className="md:text-2xl font-bold sm:text-xl">Change Password</h2>
        <form
          className="grid mt-5"
          onSubmit={(e) => handleForm(e, setStatus, setMessage, id)}
        >
          <div className="items-center text-[#202142]">
            <div className="mb-2 sm:mb-6">
              <label
                htmlFor="current_password"
                className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
              >
                Current Password
              </label>
              <input
                name="currentPassword"
                type="password"
                id="current_password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
                placeholder="Current Password"
              />
            </div>
            <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
              <div className="w-full">
                <label
                  htmlFor="new_password"
                  className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                >
                  New Password
                </label>
                <input
                  name="newPassword"
                  type="password"
                  id="new_password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
                  placeholder="New Password"
                />
              </div>

              <div className="w-full">
                <label
                  htmlFor="confirm_password"
                  className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                >
                  Confirm Password
                </label>
                <input
                  name="confirmPassword"
                  type="password"
                  id="confirm_password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
                  placeholder="Confirm Password"
                />
              </div>
            </div>

            {status ? (
              <div
                className={`${
                  status == "success"
                    ? "text-green-800 bg-green-50 dark:bg-gray-800 dark:text-green-400"
                    : "text-red-800 dark:text-red-400 bg-red-50 dark:bg-gray-800"
                } p-4 mb-4 text-sm  rounded-lg  `}
                role="alert"
              >
                {message}
              </div>
            ) : null}

            <div className="flex justify-end">
              <button
                type="submit"
                className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
              >
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
