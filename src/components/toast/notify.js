import { toast, Bounce } from "react-toastify"
export const notify = ( msg, status ) => {
    if ( status == "success" ) {
        toast.success( msg, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        } );
    } else if ( status == "error" ) {
        toast.error( msg, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        } );
    }
};