import { BASE_URL } from "../../Services/BASE_URL";
import { notify } from "../toast/notify"
export const sendOTP = async ( email ) => {
    try {

        const request = await fetch( `${ BASE_URL }/users/forget-password`, {
            method: "post",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify( { email } )
        } )


        const response = await request.json()
        if ( response.status == 'success' ) {

            notify( response.message, "success" );
            return true

        }

        notify( response.message, "error" );
        return false

    } catch ( error ) {
        console.log( error )
        throw error;
    }

}