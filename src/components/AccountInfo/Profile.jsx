import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import { handleForm } from "./validateUpdateProfile";
import { BASE_URL } from "../../Services/BASE_URL";

export const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userLoggedInState.user);

  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState(null);
  let id = user._id;

  return (
    <>
      <div id="profile">
        <h2 className="md:text-2xl font-bold sm:text-xl">Profile</h2>
        <form
          className="grid mt-5"
          onSubmit={(e) => handleForm(e, setStatus, setMessage, id, dispatch)}
        >
          <div className="items-center text-[#202142]">
            <div className="w-full mb-5 border border-grey-200 rounded px-4 py-2">
              <div className="flex items-center gap-4">
                <div className="shrink-0">
                  <img
                    className="h-14 w-14 object-cover rounded-full"
                    src={`${BASE_URL}/uploads/profile/${user.profileImage}`}
                    alt="Current profile photo"
                  />
                </div>
                <label className="block grow">
                  <span className="sr-only">Choose profile photo</span>
                  <input
                    type="file"
                    name="image"
                    className="block w-full text-sm text-slate-500
        file:mr-4 file:py-2 file:px-4
        file:rounded-full file:border-0
        file:text-sm file:font-semibold
        file:bg-violet-50 file:text-violet-700
        hover:file:bg-violet-100
    "
                  />
                </label>
              </div>
            </div>
            <div className="w-full mb-4">
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
              >
                Your first name
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
                placeholder="first name"
                required
                defaultValue={user.name}
                name="name"
              />
            </div>
            <div className="mb-2 sm:mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
                placeholder="your email"
                required
                defaultValue={user.email}
                disabled
              />
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
