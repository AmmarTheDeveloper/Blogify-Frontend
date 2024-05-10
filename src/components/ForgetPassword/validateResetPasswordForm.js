import { BASE_URL } from "../../Services/BASE_URL"
import { setEmail, setOTPSent, setOTPVerified } from "../../redux/slice/forgetPasswordSlice"
import { notify } from "../toast/notify"
export const validateResetPasswordForm = async ( e, setMessageAndStatus, dispatch, navigate ) => {
    try {
        e.preventDefault()
        let form = e.target
        let { newPassword, confirmPassword } = form
        if ( newPassword.value == '' || confirmPassword.value == '' )
            return setMessageAndStatus( "New password and Confirm password are required", "error" )
        if ( newPassword.value !== confirmPassword.value )
            return setMessageAndStatus( "New password and Confirm password are not equal", "error" )

        const request = await fetch( `${ BASE_URL }/users/reset-password`, {
            method: "post",
            credentials: "include",
            body: JSON.stringify( { password: newPassword.value } ),
            headers: {
                'Content-Type': "application/json"
            }
        } )

        const response = await request.json()
        if ( response.status == 'success' ) {
            dispatch( setEmail( "" ) )
            dispatch( setOTPSent( false ) )
            dispatch( setOTPVerified( false ) )
            notify( "Password updated successfully!", "success" )
            navigate( '/signin' )
            return
        }
        notify( "Password not updated", "error" )
    } catch ( error ) {
        console.log( error )
        notify( "Something went wrong Please try again.", "error" )
    }
}


