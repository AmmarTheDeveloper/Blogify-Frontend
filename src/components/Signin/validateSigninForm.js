import { BASE_URL } from "../../Services/BASE_URL";
import { setIsProfileUpdated } from "../../redux/slice/isUserLoggedIn"

export const handleForm = async ( e, setMessageAndStatus, navigate, dispatch ) => {
    e.preventDefault();
    let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    let { email, password } = e.target
    if ( !emailRegex.test( email.value ) ) {
        return setMessageAndStatus( "Invalid email address.", "error" );
    } else if ( password.value.length == 0 ) {
        return setMessageAndStatus( "Passowrd required.", "error" );
    }
    setMessageAndStatus( "Form submitting...", "success" );

    try {
        const request = await fetch( `${ BASE_URL }/users/signin`, {
            method: "post",
            body: JSON.stringify( { email: email.value, password: password.value } ),
            headers: {
                'Content-Type': 'application/json'
            }
        } )

        const response = await request.json();

        setMessageAndStatus( response.message, response.status );

        if ( response.status == 'success' ) {
            let token = response.token;
            localStorage.setItem( "token", token );
            dispatch( setIsProfileUpdated() )
            setTimeout( () => {
                navigate( '/' );
            }, 1000 );
        }
    } catch ( error ) {
        setMessageAndStatus( "Something went wrong.", "error" );
    }
}
