import React from "react";
import { BASE_URL } from "../../Services/BASE_URL";

export default function ParticularBlogPage({ blog }) {
  return (
    <>
      <main className="p-[20px] max-w-[1000px] mx-[auto]">
        <div className="flex items-center gap-[20px]">
          <img
            src={`${BASE_URL}/uploads/profile/${blog.createdBy.profileImage}`}
            alt="Cover Image not found."
            className="rounded-full h-[70px] w-[70px]"
          />
          <div>
            <p className="font-[600] text-[20px]">{blog.createdBy.name}</p>
            <p>{new Date(blog.createdBy.createdAt).toLocaleString()}</p>
          </div>
        </div>
        <article className="mt-[20px]">
          <img
            src={`${BASE_URL}/${blog.coverImage}`}
            className="w-[100%] my-[20px]"
            alt=""
          />
          <h1 className="font-bold text-[35px]">{blog.title}</h1>
          <div
            className="mt-[20px] max-w-[100%] overflow-x-auto"
            dangerouslySetInnerHTML={{ __html: blog.body }}
          ></div>
        </article>
      </main>
    </>
  );
}
