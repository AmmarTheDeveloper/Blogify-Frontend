import { createSlice } from "@reduxjs/toolkit"

export const userLoggedInSlice = createSlice( {
    name: 'userLoggedIn',
    initialState: {
        isAuthenticated: false,
        isLoading: true,
        user: false,
        isProfileUpdated: false
    },
    reducers: {
        setUser: ( state, action ) => {
            state.isAuthenticated = true
            state.isLoading = false
            state.user = action.payload
        },
        setIsProfileUpdated: ( state ) => {
            state.isProfileUpdated = !state.isProfileUpdated
        }
    }
} )

export const { setUser, setIsProfileUpdated } = userLoggedInSlice.actions
export default userLoggedInSlice.reducer

