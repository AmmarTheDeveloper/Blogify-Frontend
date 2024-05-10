import { BASE_URL } from "../../Services/BASE_URL";
import { hide, setBlogId } from "../../redux/slice/deleteBlogModalSlice";
export async function DeleteBlog(blogId, dispatch, notify) {
  try {
    const request = await fetch(`${BASE_URL}/blogs/delete-blog/${blogId}`, {
      method: "delete",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const response = await request.json();
    dispatch(hide());
    dispatch(setBlogId(null));
    if (response.status == "success") {
      notify("Blog deleted successfully!", "success");
    } else {
      throw new Error("Blog not deleted successfully.");
    }
  } catch (error) {
    notify("Blog not deleted successfully. Please try again later.", "error");
  }
}
