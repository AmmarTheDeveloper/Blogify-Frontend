import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Loading } from "../Loading/Loading";
import GetBlogCard from "./GetBlogCard";
import { useSelector } from "react-redux";
import { NoBlogAvailable } from "../Blog/NoBlogAvailable";
import { BASE_URL } from "../../Services/BASE_URL";

export function GetBlog({ filter }) {
  const blogId = useSelector((state) => state.deleteBlogModal.blogId);
  const [blogs, setBlogs] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchData() {
      try {
        let token = localStorage.getItem("token");
        if (filter == "all") {
          const request = await fetch(`${BASE_URL}/blogs/getblog`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const response = await request.json();
          if (response.status == "success") {
            setBlogs(response.data);
          } else {
            setBlogs([]);
          }
        } else if (filter == "user") {
          const request = await fetch(`${BASE_URL}/blogs/u`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const response = await request.json();
          if (response.status == "success") {
            setBlogs(response.data);
          } else {
            setBlogs([]);
          }
        } else {
          navigate("/");
        }
      } catch (error) {
        setBlogs([]);
      }
    }
    fetchData();
  }, [blogId]);

  return (
    <>
      <div className="w-[100%]">
        <h1 className="text-center text-slate-800 mt-[30px] mb-[50px] text-[30px] font-[600]">
          All Blogs
        </h1>
        {blogs == null ? (
          <Loading />
        ) : blogs.length == 0 ? (
          <NoBlogAvailable />
        ) : (
          <div className="flex justify-center gap-[40px] flex-wrap px-[20px]">
            {blogs.map((blog, index) => (
              <GetBlogCard
                blog={blog}
                key={index}
                Editable={filter == "user" ? true : false}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
