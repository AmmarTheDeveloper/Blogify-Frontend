import { BASE_URL } from "../../Services/BASE_URL";

export async function fetchBlog ( id, setBlog ) {
    try {
        const request = await fetch( `${ BASE_URL }/blogs/getblog/${ id }`, {
            headers: {
                authorization: `Bearer ${ localStorage.getItem( "token" ) }`,
            },
        } );
        const response = await request.json();
        if ( response.status == "success" ) {
            setBlog( response.data );
        } else {
            setBlog( {} );
        }
    } catch ( error ) {
        setBlog( {} )
    }
}