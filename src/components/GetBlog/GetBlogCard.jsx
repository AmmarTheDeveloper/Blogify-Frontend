import React from "react";
import { Link } from "react-router-dom";
// import TimeAgo from "react-timeago";
import { useDispatch } from "react-redux";
import { show, setBlogId } from "../../redux/slice/deleteBlogModalSlice";
import { BASE_URL } from "../../Services/BASE_URL";

export default function GetBlogCard({ blog, Editable }) {
  const dispatch = useDispatch();
  return (
    <>
      <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-[400px] max-w-[100%] flex flex-col p-[15px]">
        <img
          className="rounded-[8px] mx-auto h-[200px]"
          src={`${BASE_URL}/uploads/coverImage/${blog.coverImage}`}
          alt="image not found"
        />
        <div className="p-5 grow">
          <div className="p-y2 px-3 rounded-full w-[fit-content] text-[14px] bg-blue-200 mb-2">
            {blog.category}
          </div>
          <h5 className="mb-2 text-[25px] font-[600] tracking-tight text-gray-900 dark:text-white ">
            {blog.title}
          </h5>
          <p
            className="mb-3 font-normal text-[grey] dark:text-gray-400 max-h-[70px] overflow-hidden truncate"
            dangerouslySetInnerHTML={{ __html: blog.body }}
          ></p>
          <Link
            to={"/blog/" + blog._id}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-[10px]"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
          {Editable ? (
            <>
              <Link
                to={"/blog/u/update/" + blog._id}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-[10px]"
              >
                Edit
              </Link>
              <button
                onClick={() => {
                  dispatch(show());
                  dispatch(setBlogId(blog._id));
                }}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              >
                Delete
              </button>
            </>
          ) : null}
        </div>
        <div className="flex gap-[10px] items-center px-[10px] py-[5px]">
          <img
            src={`${BASE_URL}/uploads/profile/${blog.createdBy.profileImage}`}
            alt="image not found"
            className="rounded-full h-[47px] w-[47px]"
          />
          <div>
            <span className="name text-[16px] font-[500]">
              {blog.createdBy.name}
            </span>
            <div className="date text-[14px] text-[grey]">
              {/* <TimeAgo
                date={new Date(blog.createdBy.createdAt)}
                formatter={(value, unit, suffix) => {
                  if (unit.length > 1) {
                    return value + unit[0] + " " + suffix;
                  } else {
                    return (
                      value + " " + unit + (value > 1 ? "s" : "") + " " + suffix
                    );
                  }
                }}
              /> */}
              {new Date(blog.createdBy.createdAt).toDateString()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
