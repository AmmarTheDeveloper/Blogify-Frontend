import { BASE_URL } from "../../Services/BASE_URL";
import { notify } from "../toast/notify"

export const handleForm = async ( e, setStatus, setMessage, id ) => {
    e.preventDefault();
    let form = e.target;

    let { currentPassword, newPassword, confirmPassword } = form;

    if ( !currentPassword.value || !newPassword.value || !confirmPassword.value ) {
        setStatus( "error" );
        return setMessage( "Please fill all fields." );
    } else if ( newPassword.value != confirmPassword.value ) {
        setStatus( "error" );
        return setMessage( "New password and confirm password not matched" );
    }

    try {
        const request = await fetch( `${ BASE_URL }/users/change-password/${ id }`, {
            method: "put",
            headers: {
                Authorization: `Bearer ${ localStorage.getItem( "token" ) }`,
                'content-type': 'application/json'
            },
            body: JSON.stringify( {
                currentPassword: currentPassword.value,
                newPassword: newPassword.value,
                confirmPassword: confirmPassword.value
            } )
        } )

        setStatus( "" )
        setMessage( "" )

        const response = await request.json()

        if ( response.status == 'success' ) {

            form.reset();
            notify( "Password changed successfully", "success" );

        } else {
            notify( response.message, "error" );
        }
    } catch ( error ) {
        console.log( error )
        notify( "Something went wrong", "error" );
    }
};