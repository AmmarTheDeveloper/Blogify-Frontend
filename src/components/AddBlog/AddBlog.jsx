// import React, { useState, useEffect } from "react";
// import Quill from "../Quill/Quill";
// import { blogCategory } from "./blogCategory";
// import { notify } from "../toast/notify";

// export default function AddBlog() {
//   let [message, setMessage] = useState("");
//   let [status, setStatus] = useState("");
//   let [description, setDescription] = useState("");
//   let [category, setCategory] = useState(null);

//   const setDescriptionValue = (e) => {
//     setDescription(e);
//   };

//   const setMessageAndStatus = (message, status) => {
//     setMessage(message);
//     setStatus(status);
//   };

//   useEffect(() => {
//     let token = localStorage.getItem("token");
//     blogCategory(token, setCategory);
//   }, []);

//   return (
//     <>
//       <div className="flex items-center justify-center w-[100%] mt-[20px]">
//         <form
//           className="mx-auto w-[600px] max-w-[100%] shadow shadow-gray-500/80  p-[20px] rounded"
//           onSubmit={(e) => {
//             e.target.body = description;
//             handleForm(e, setMessageAndStatus, setDescription, notify);
//           }}
//         >
//           <h1 className="text-center text-[25px] font-[500] mb-5">Add Blog</h1>
//           <div className="mb-5">
//             <label
//               htmlFor="blog-title"
//               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//             >
//               Enter blog title :
//             </label>
//             <input
//               type="text"
//               id="blog-title"
//               name="title"
//               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
//               placeholder="Your blog title"
//             />
//           </div>
//           <div className="mb-5">
//             <label
//               htmlFor="blog-category"
//               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//             >
//               Enter category:
//             </label>
//             <select
//               defaultValue={"Choose category"}
//               name="category"
//               id="blog-category"
//               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  outline-none"
//             >
//               <option value="" disabled>
//                 Choose category
//               </option>
//               {category && category.length != 0
//                 ? category.map((opt, index) => (
//                     <option key={index} value={opt.category}>
//                       {opt.category}
//                     </option>
//                   ))
//                 : null}
//             </select>
//           </div>
//           <div className="mb-5">
//             <label htmlFor="description">Enter blog description : </label>
//             <Quill
//               value={description}
//               name="body"
//               setValue={setDescriptionValue}
//             />
//           </div>
//           <div className="mb-5">
//             <label
//               htmlFor="image"
//               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//             >
//               Enter blog image :
//             </label>
//             <div className="flex items-center justify-center w-full">
//               <label
//                 htmlFor="image"
//                 className="flex flex-col items-center justify-center w-full h-50 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
//               >
//                 <div className="flex flex-col items-center justify-center pt-5 pb-6">
//                   <svg
//                     className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 20 16"
//                   >
//                     <path
//                       stroke="currentColor"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
//                     />
//                   </svg>
//                   <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
//                     <span className="font-semibold">Click to upload</span> or
//                     drag and drop
//                   </p>
//                   <p className="text-xs text-gray-500 dark:text-gray-400">
//                     PNG, JPG or JPEG
//                   </p>
//                 </div>
//                 <input
//                   id="image"
//                   type="file"
//                   name="coverImage"
//                   className="hidden"
//                 />
//               </label>
//             </div>
//           </div>
//           <div
//             className={`text-[14px] mb-2 ${
//               status == "success" ? "text-[#14A44D]" : "text-[#DC4C64]"
//             }`}
//           >
//             {message}
//           </div>
//           <button
//             type="submit"
//             className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//           >
//             Add Blog
//           </button>
//         </form>
//       </div>
//     </>
//   );
// }

import { BlogForm } from "../Blog/BlogForm";
import React from "react";
import { handleForm } from "./validateAddBlogForm";

export default function AddBlog() {
  return (
    <>
      <BlogForm
        handleForm={handleForm}
        action={"add"}
        Fields={{
          BlogTitle: "",
          BlogCategory: "Choose category",
          BlogDescription: "",
          BlogImage: "",
        }}
        text={"Add Blog"}
      />
    </>
  );
}
