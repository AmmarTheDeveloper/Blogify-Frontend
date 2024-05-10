import { createSlice } from "@reduxjs/toolkit"

export const forgetPasswordSlice = createSlice( {
    name: 'forgetPasswordSlice',
    initialState: {
        email: "",
        isOTPSent: false,
        isOTPVerified: false
    },
    reducers: {
        setEmail: ( state, action ) => {
            state.email = action.payload
        },
        setOTPSent: ( state, action ) => {
            state.isOTPSent = action.payload
        },
        setOTPVerified: ( state, action ) => {
            state.isOTPVerified = action.payload
        }
    }
} )

export const { setEmail, setOTPSent, setOTPVerified } = forgetPasswordSlice.actions
export default forgetPasswordSlice.reducer