import { notify } from "../toast/notify"
import { setOTPVerified } from "../../redux/slice/forgetPasswordSlice"
import { BASE_URL } from "../../Services/BASE_URL";

export const verifyOTP = async ( e, otp, setMessageAndStatus, email, dispatch ) => {
    try {
        e.preventDefault();
        if ( otp.length != 6 ) return setMessageAndStatus( "Please enter otp.", "error" )

        setMessageAndStatus( "", "" )

        let request = await fetch( `${ BASE_URL }/users/verify-otp`, {
            method: "post",
            body: JSON.stringify( { otp: otp, email: email } ),
            credentials: "include",
            headers: {
                'Content-Type': "application/json"
            }
        } )

        const response = await request.json()

        if ( response.status == "success" ) {
            notify( "OTP is verified create new password.", "success" )
            dispatch( setOTPVerified( true ) )
            localStorage.removeItem( "forgetPasswordOTPexpiryTime" );
            localStorage.removeItem( "isForgetPasswordOTPSent" );
            localStorage.removeItem( "forgetPasswordEmail" );
            return
        }
        return notify( "OTP is not valid", "error" )
    } catch ( error ) {
        notify( "Something went wrong please try again.", "error" )
    }
}