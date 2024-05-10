
import { notify } from "../toast/notify"
import { sendOTP } from "./sendOTP"
import { setEmail, setOTPSent } from "../../redux/slice/forgetPasswordSlice"

export const handleForm = async ( e, setMessageAndStatus, dispatch ) => {
    e.preventDefault();
    let form = e.target;


    let { email } = form;

    if ( email.value == "" || email.value.trim().length == 0 ) {
        return setMessageAndStatus( "email is required", "error" );
    }

    dispatch( setEmail( email.value ) )
    localStorage.setItem( "forgetPasswordEmail", email.value )

    setMessageAndStatus( "", "" );

    try {
        let isOTPSend = await sendOTP( email.value )
        dispatch( setOTPSent( isOTPSend ) )
        localStorage.setItem( "isForgetPasswordOTPSent", true )
    } catch ( error ) {
        notify( "Something went wrong", "error" )
    }
};
