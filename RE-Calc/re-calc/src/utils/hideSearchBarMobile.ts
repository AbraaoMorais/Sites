
const hideSearchMobile = () => {
    window.addEventListener ( "load" , function ( )  { 
	    // Define um tempo limite...
	    setTimeout ( function ( ) { 
		    // Oculta o endereço bar!
		    window.scrollTo( 0 ,  1 ) ;
	    },0 ) ;
    })
}

export default hideSearchMobile;