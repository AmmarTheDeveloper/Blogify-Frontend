import { BASE_URL } from "../../Services/BASE_URL";

export const handleForm = async ( e, setMessageAndStatus, navigate ) => {
  e.preventDefault();
  let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  let { name, email, password, ConfirmPassword } = e.target;
  if ( name.value.length == 0 ) {
    return setMessageAndStatus( "Name is required", "error" );
  } else if ( !emailRegex.test( email.value ) ) {
    return setMessageAndStatus( "Invalid email address.", "error" );
  } else if ( password.value.length == 0 ) {
    return setMessageAndStatus( "Passowrd required.", "error" );
  } else if ( password.value !== ConfirmPassword.value ) {
    return setMessageAndStatus( "Confirm Password not matched.", "error" );
  }

  setMessageAndStatus( "Form submitting...", "success" );

  try {
    const request = await fetch( `${ BASE_URL }/users/signup`, {
      method: "post",
      body: JSON.stringify( {
        name: name.value,
        email: email.value,
        password: password.value,
      } ),
      headers: {
        "Content-Type": "application/json",
      },
    } );

    const response = await request.json();
    setMessageAndStatus( response.message, response.status );

    if ( response.status == "success" ) {
      setTimeout( () => {
        navigate( "/signin" );
      }, 1000 );
    }
  } catch ( error ) {
    console.log( error )
    setMessageAndStatus( "Something went wrong.", "error" );
  }
};
