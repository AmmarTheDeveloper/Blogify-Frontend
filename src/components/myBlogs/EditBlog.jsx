import React, { useEffect, useState } from "react";
import { BlogForm } from "../Blog/BlogForm";
import { useParams } from "react-router-dom";
import { fetchBlog } from "../ParticularBlog/getParticularBlog";
import { handleForm } from "./validateEditBlogForm";
export default function EditBlog() {
  let { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetchBlog(id, setBlog);
  }, []);

  return (
    <>
      {blog ? (
        <BlogForm
          handleForm={handleForm}
          action={"update"}
          Fields={{
            BlogTitle: blog.title,
            BlogCategory: blog.category,
            BlogDescription: blog.body,
            BlogImage: blog.coverImage,
            BlogId: blog._id,
          }}
          text={"Update Blog"}
        />
      ) : null}
    </>
  );
}
