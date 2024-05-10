import { Link } from "react-router-dom";

export const NoBlogAvailable = () => {
  return (
    <>
      <div className="p-[20px] w-full max-w-[500px] border border-grey rounded mx-auto text-center">
        <p className="text-[20px] text-center text-slate-800 font-[600]">
          No Blog Available
        </p>
        <p className="text-[14px] mt-1 text-center text-slate-500 font-[500]">
          Getting started with creating a blog
        </p>
        <Link
          to="/blog/add"
          className="inline-block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg mt-2 text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Add blog
        </Link>
      </div>
    </>
  );
};
