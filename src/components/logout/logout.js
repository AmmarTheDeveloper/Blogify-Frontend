import { setUser } from "../../redux/slice/isUserLoggedIn";
export const Logout = ( dispatch, navigate ) => {
    localStorage.removeItem( "token" );
    dispatch( setUser( false ) );
    navigate( '/' );

}

