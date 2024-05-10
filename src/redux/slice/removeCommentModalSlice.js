import { createSlice } from "@reduxjs/toolkit"

export const removeCommentModalSlice = createSlice( {
    name: 'removeCommentModalSlice',
    initialState: {
        value: false,
        commentId: null
    },
    reducers: {
        show: ( state ) => {
            state.value = true
        },
        hide: ( state ) => {
            state.value = false
        },
        setCommentId: ( state, action ) => {
            state.commentId = action.payload
        }
    }
} )

export const { show, hide, setCommentId } = removeCommentModalSlice.actions
export default removeCommentModalSlice.reducer