import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function Quill({ value, setValue }) {
  return (
    <>
      <ReactQuill theme="snow" value={value} onChange={(e) => setValue(e)} />
    </>
  );
}
