import { BASE_URL } from "../../Services/BASE_URL";

export const handleForm = async ( e, setMessageAndStatus, setDescription, notify ) => {
  e.preventDefault();

  let { title, category, body, coverImage } = e.target;

  if ( title.value.length == 0 ) {
    return setMessageAndStatus( "Blog title is required", "error" );
  } else if ( category.value == "" || category.value.length == "" || category.value.toLowerCase() == 'choose category' ) {
    return setMessageAndStatus( "Blog category is required", "error" );
  } else if ( body.length == 0 ) {
    return setMessageAndStatus( "Blog description is required", "error" );
  } else {
    if ( coverImage.files.length == 0 ) {
      return setMessageAndStatus( "Blog cover image is required", "error" );
    } else if (
      coverImage.files[ 0 ].type != "image/png" &&
      coverImage.files[ 0 ].type != "image/jpg" &&
      coverImage.files[ 0 ].type != "image/jpeg"
    ) {
      return setMessageAndStatus( "Upload jpg or jpeg or png png", "error" );
    } else {
      let size = Math.floor( coverImage.files[ 0 ].size / 1024 );
      if ( size > 1024 ) {
        return setMessageAndStatus( "Cover image size should be less than 1MB." );
      }
    }

  }

  setMessageAndStatus( "Form submitting...", "success" );

  try {
    let formData = new FormData();
    formData.append( "title", title.value );
    formData.append( "category", category.value );
    formData.append( "body", body );
    formData.append( "coverImage", coverImage.files[ 0 ] );

    const request = await fetch( `${ BASE_URL }/blogs/addblog`, {
      method: "post",
      body: formData,
      headers: {
        Authorization: `Bearer ${ localStorage.getItem( "token" ) }`,
      },
    } );

    const response = await request.json();

    if ( response.status == "success" ) {
      e.target.reset();
      setDescription( "" );
      setMessageAndStatus( "", "success" );
      notify( response.message, response.status );
    }
    console.log( response.status )
  } catch ( error ) {
    notify( "Blog not added! Please try again.", "error" )
    setMessageAndStatus( "Something went wrong.", "error" );
  }

};
