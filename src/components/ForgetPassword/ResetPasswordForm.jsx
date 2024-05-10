import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { validateResetPasswordForm } from "./validateResetPasswordForm";
import { useNavigate } from "react-router-dom";

export const ResetPasswordForm = () => {
  const navigate = useNavigate();
  let [message, setMessage] = useState("");
  let [status, setStatus] = useState("");
  const dispatch = useDispatch();
  const setMessageAndStatus = (message, status) => {
    setMessage(message);
    setStatus(status);
  };

  return (
    <>
      <div className="flex items-center justify-center w-[100%]">
        <form
          onSubmit={(e) =>
            validateResetPasswordForm(
              e,
              setMessageAndStatus,
              dispatch,
              navigate
            )
          }
          className="max-w-sm mx-auto w-[400px] max-w-[100%] shadow shadow-gray-500/80  p-[20px] rounded"
        >
          <h1 className="text-center text-[25px] font-[500] mb-5">
            Create new password
          </h1>
          <div className="mb-5">
            <label
              htmlFor="newPassword"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Enter new password :
            </label>
            <input
              name="newPassword"
              type="password"
              id="newPassword"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="New password"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="confirmPassword"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Enter confirm password :
            </label>
            <input
              name="confirmPassword"
              type="password"
              id="confirmPassword"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Confirm Password"
            />
          </div>
          <div
            className={`text-[14px] mb-2 ${
              status == "success" ? "text-[#14A44D]" : "text-[#DC4C64]"
            }`}
          >
            {message}
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
