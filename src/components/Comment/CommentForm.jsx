import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { notify } from "../toast/notify";
import { useDispatch } from "react-redux";
import { setNewComment } from "../../redux/slice/commentSlice";
import { BASE_URL } from "../../Services/BASE_URL";

export function CommentForm() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState(null);
  const handleForm = async (e) => {
    e.preventDefault();
    let form = e.target;
    let { comment } = form;
    if (comment.value.trim().length == 0) {
      setStatus("error");
      setMessage("comment field is required");
      return;
    }
    setStatus("success");
    setMessage("Posting comment...");

    try {
      const req = await fetch(`${BASE_URL}/blogs/post-comment`, {
        method: "post",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ blogId: id, comment: comment.value }),
      });

      form.reset();

      const res = await req.json();

      if (res.status == "success") {
        setStatus("success");
        setMessage("Commented successfully!");
        setTimeout(() => {
          setStatus("");
          setMessage("");
        }, 2000);
        dispatch(setNewComment());
        notify("Comment posted successfully", "success");
      } else {
        setStatus("error");
        setMessage("Something went wrong! Please try again.");
        setTimeout(() => {
          setStatus("");
          setMessage("");
        }, 2000);
        notify("Something went wrong! Please try again.", "error");
      }
    } catch (error) {
      notify("Something went wrong! Please try again.", "error");
    }
  };

  return (
    <>
      <form className="mb-6" onSubmit={handleForm}>
        <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <label htmlFor="comment" className="sr-only">
            Your comment
          </label>
          <textarea
            name="comment"
            id="comment"
            rows={6}
            className="resize-none px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
            placeholder="Write a comment..."
          ></textarea>
        </div>
        {status ? (
          <div
            className={`${
              status == "success"
                ? "text-green-800 bg-green-50 dark:bg-gray-800 dark:text-green-400"
                : "text-yellow-800 bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300"
            } p-4 mb-4 text-sm rounded-lg`}
            role="alert"
          >
            <span className="font-medium">{message}</span>
          </div>
        ) : null}
        <button
          type="submit"
          className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
        >
          Post comment
        </button>
      </form>
    </>
  );
}
