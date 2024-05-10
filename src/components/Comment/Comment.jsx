import React from "react";
import { CommentForm } from "./CommentForm";
import { CommentList } from "./CommentList";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RemoveCommentModal } from "./RemoveCommentModal";

export function Comment() {
  const user = useSelector((state) => state.userLoggedInState.user);
  const comments = useSelector((state) => state.commentState.comment);
  let commentLength = comments ? comments.length : 0;
  return (
    <>
      <RemoveCommentModal />
      <section className="bg-white dark:bg-gray-900 py-8 lg:py-16 antialiased">
        <div className="border-t border-grey-200 max-w-[1000px] mx-auto px-[20px]">
          <div className="flex justify-between items-center mt-4 mb-6">
            <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
              Discussion ({commentLength})
            </h2>
          </div>
          {user ? (
            <CommentForm />
          ) : (
            <div className="pb-5">
              <h2 className="text-xl mb-2">Want to post a comment</h2>
              <Link
                to="/signin"
                className="inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
              >
                Signin
              </Link>
            </div>
          )}
          <CommentList />
        </div>
      </section>
    </>
  );
}
