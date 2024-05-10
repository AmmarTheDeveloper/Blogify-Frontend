import { createSlice } from "@reduxjs/toolkit"

export const deleteBlogModalSlice = createSlice( {
    name: 'deleteBlogModal',
    initialState: {
        value: false,
        blogId: null
    },
    reducers: {
        show: ( state ) => {
            state.value = true
        },
        hide: ( state ) => {
            state.value = false
        },
        setBlogId: ( state, action ) => {
            state.blogId = action.payload
        }
    }
} )

export const { show, hide, setBlogId } = deleteBlogModalSlice.actions
export default deleteBlogModalSlice.reducer