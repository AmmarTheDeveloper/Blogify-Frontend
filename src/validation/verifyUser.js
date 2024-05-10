import { BASE_URL } from "../Services/BASE_URL";

export const verifyUser = async () => {
    let token = localStorage.getItem( "token" );
    if ( !token || token == 'undefined' ) return false;

    try {
        const request = await fetch( `${ BASE_URL }/users/verifyUser`, {
            method: "post",
            headers: {
                'Authorization': `Bearer ${ token }`
            }
        } )
        const response = await request.json();
        if ( response.status == 'success' ) {
            return response.payload;
        }
        return false;
    } catch ( error ) {
        return false;
    }
}