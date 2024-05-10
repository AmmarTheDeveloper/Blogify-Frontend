import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "../Loading/Loading";
import ParticularBlogPage from "./ParticularBlogPage";
import { fetchBlog } from "./getParticularBlog";
import { Comment } from "../Comment/Comment";
import PageNotFound from "../PageNotFound/PageNotFound";
export default function ParticularBlog() {
  let { id } = useParams();
  const [blog, setBlog] = useState(null);
  useEffect(() => {
    fetchBlog(id, setBlog);
  }, []);
  return (
    <div className="w-[100%]">
      {blog == null ? (
        <Loading />
      ) : blog._id ? (
        <>
          <ParticularBlogPage blog={blog} />
          <Comment />
        </>
      ) : (
        <PageNotFound />
      )}
    </div>
  );
}
