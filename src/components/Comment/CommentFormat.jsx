import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { show, setCommentId } from "../../redux/slice/removeCommentModalSlice";
import { BASE_URL } from "../../Services/BASE_URL";

export default function CommentFormat({ user, index }) {
  const loggedInUser = useSelector((state) => state.userLoggedInState.user);

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dispatch = useDispatch();
  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const showRemoveCommentModal = (id) => {
    dispatch(show());
    dispatch(setCommentId(id));
  };

  return (
    <>
      <article
        className={`${
          index > 0 ? "border-t border-grey-200" : ""
        } p-6 text-base bg-white rounded-lg dark:bg-gray-900`}
      >
        <footer className="relative flex justify-between items-center mb-2">
          <div className="flex items-center">
            <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
              <img
                className="mr-2 w-8 h-8 rounded-full"
                src={`${BASE_URL}/uploads/profile/${user.profileImage}`}
                alt={user.name}
              />
              {user.name}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {new Date(user.timestamp).toLocaleString()}
            </p>
          </div>
          {loggedInUser?._id == user._id ? (
            <>
              <button
                onClick={toggleDropdown}
                className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                type="button"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 3"
                >
                  <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                </svg>
                <span className="sr-only">Comment settings</span>
              </button>
              {/* Dropdown menu */}
              <div
                className={`${
                  isDropdownVisible ? null : "hidden"
                } absolute top-10 right-0 z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600`}
              >
                <ul
                  className="py-1 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownMenuIconHorizontalButton"
                >
                  <li>
                    <button
                      type="button"
                      className="w-full block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Edit
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => showRemoveCommentModal(user.commentId)}
                      type="button"
                      className="w-full block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Remove
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="w-full block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Report
                    </button>
                  </li>
                </ul>
              </div>
            </>
          ) : null}
        </footer>
        <p className="text-gray-500 dark:text-gray-400">{user.comment}</p>
        {/* <div className="flex items-center mt-4 space-x-4">
    <button
      type="button"
      className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
    >
      <svg
        className="mr-1.5 w-3.5 h-3.5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 18"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
        />
      </svg>
      Reply
    </button>
  </div> */}
      </article>
    </>
  );
}
