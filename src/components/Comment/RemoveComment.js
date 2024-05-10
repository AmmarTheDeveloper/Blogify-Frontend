import { BASE_URL } from "../../Services/BASE_URL";
import { hide, setCommentId } from "../../redux/slice/removeCommentModalSlice";
import { notify } from "../toast/notify";
export async function RemoveComment ( commentId, dispatch ) {
    try {
        const request = await fetch(
            `${ BASE_URL }/blogs/remove-comment/${ commentId }`,
            {
                method: "delete",
                headers: {
                    authorization: `Bearer ${ localStorage.getItem( "token" ) }`,
                },
            }
        );
        const response = await request.json();
        dispatch( hide() );
        dispatch( setCommentId( null ) );
        if ( response.status == "success" ) {
            notify( "Comment removed successfully!", "success" );
        } else {
            throw new Error( "Comment not removed successfully." );
        }
    } catch ( error ) {
        notify( "Comment not removed successfully. Please try again later.", "error" );
    }
}
