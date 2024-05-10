import React from "react";
import { GetBlog } from "../GetBlog/GetBlog";
import { DeleteConfirmationModal } from "./deleteBlogModal";

export default function Blog() {
  return (
    <>
      <DeleteConfirmationModal />
      <GetBlog filter={"user"} />
    </>
  );
}
