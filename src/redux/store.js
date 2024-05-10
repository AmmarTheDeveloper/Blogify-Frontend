import { configureStore } from "@reduxjs/toolkit"
import deleteBlogModalSlice from "./slice/deleteBlogModalSlice"
import userLoggedInSlice from "./slice/isUserLoggedIn"
import commentSlice from "./slice/commentSlice"
import removeCommentModalSlice from "./slice/removeCommentModalSlice"
import forgetPasswordSlice from "./slice/forgetPasswordSlice"
export default configureStore( {
    reducer: {
        deleteBlogModal: deleteBlogModalSlice,
        userLoggedInState: userLoggedInSlice,
        commentState: commentSlice,
        removeCommentModal: removeCommentModalSlice,
        forgetPasswordState: forgetPasswordSlice
    }
} )