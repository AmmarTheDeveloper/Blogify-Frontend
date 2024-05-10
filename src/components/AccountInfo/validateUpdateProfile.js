import { notify } from "../toast/notify"
import { setIsProfileUpdated } from "../../redux/slice/isUserLoggedIn"
import { BASE_URL } from "../../Services/BASE_URL";

export const handleForm = async ( e, setStatus, setMessage, id, dispatch ) => {
    e.preventDefault();
    let form = e.target;

    let { name, image } = form;
    let formData = new FormData();

    if ( name.value == "" || name.value.trim().length == 0 ) {
        setStatus( "error" );
        return setMessage( "name is required" );
    } else if ( image.files.length > 0 ) {
        if (
            image.files[ 0 ].type != "image/png" &&
            image.files[ 0 ].type != "image/jpg" &&
            image.files[ 0 ].type != "image/jpeg"
        ) {
            setStatus( "error" );
            return setMessage( "Upload jpg or jpeg or png png" );
        } else {
            let size = Math.floor( image.files[ 0 ].size / 1024 );
            if ( size > 1024 ) {
                setStatus( "error" );
                return setMessage( "Cover image size should be less than 1MB." );
            }
        }
    }

    formData.append( "name", name.value );

    if ( image.files.length > 0 ) {
        formData.append( "profileImage", image.files[ 0 ] );
    }

    try {
        const request = await fetch( `${ BASE_URL }/users/updateProfile/${ id }`, {
            method: "put",
            headers: {
                Authorization: `Bearer ${ localStorage.getItem( "token" ) }`
            },
            body: formData
        } )

        const response = await request.json()
        if ( response.status == 'success' ) {

            dispatch( setIsProfileUpdated() )
            localStorage.setItem( "token", response.token )
            notify( "Profile updated successfully", "success" );
        } else {
            notify( "Something went wrong", "error" );
        }
    } catch ( error ) {
        notify( "Something went wrong", "error" )
    }
};