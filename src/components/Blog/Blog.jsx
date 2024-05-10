import React from "react";
import { GetBlog } from "../GetBlog/GetBlog";

export default function Blog() {
  return (
    <>
      <GetBlog filter={"all"} />
    </>
  );
}
