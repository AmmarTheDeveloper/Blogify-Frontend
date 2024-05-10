import { createSlice } from "@reduxjs/toolkit"

const commentSlice = createSlice( {
    name: "commentSlice",
    initialState: {
        comment: null,
        newComment: false
    },
    reducers: {
        setComment: ( state, action ) => {
            state.comment = action.payload
        },
        setNewComment: ( state ) => {
            state.newComment = !state.newComment
        }
    }
} )

export const { setComment, setNewComment } = commentSlice.actions
export default commentSlice.reducer