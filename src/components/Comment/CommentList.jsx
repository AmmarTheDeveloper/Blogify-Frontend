import React, { useEffect } from "react";
import CommentFormat from "./CommentFormat";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setComment } from "../../redux/slice/commentSlice";
import { Loading } from "../Loading/Loading";
import { BASE_URL } from "../../Services/BASE_URL";
export function CommentList() {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.commentState.comment);
  const commentId = useSelector((state) => state.removeCommentModal.commentId);
  const isNewComment = useSelector((state) => state.commentState.newComment);
  let { id } = useParams();

  async function fetchComment() {
    try {
      const req = await fetch(`${BASE_URL}/blogs/comment/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      const resp = await req.json();
      if (resp.status == "success") {
        dispatch(setComment(resp.comments));
      } else {
        dispatch(setComment([]));
      }
    } catch (err) {
      dispatch(setComment([]));
    }
  }

  useEffect(() => {
    fetchComment();
  }, [isNewComment, commentId]);

  return (
    <>
      {comments == null ? (
        <Loading />
      ) : comments.length == 0 ? (
        <div className="p-[20px] w-full max-w-[500px] border border-grey rounded mx-auto text-center">
          <p className="text-[20px] text-center text-slate-800 font-[600]">
            No one commented on this post.
          </p>
        </div>
      ) : (
        comments
          .slice()
          .reverse()
          .map((comment, index) => (
            <CommentFormat
              key={index}
              user={{
                commentId: comment._id,
                _id: comment.createdBy._id,
                name: comment.createdBy.name,
                profileImage: comment.createdBy.profileImage,
                timestamp: comment.createdAt,
                comment: comment.comment,
              }}
              index={index}
            />
          ))
      )}
    </>
  );
}
