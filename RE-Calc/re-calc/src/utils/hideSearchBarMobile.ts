
const hideSearchMobile = () => {
    window.addEventListener ( "load" , function ( )  { 
	    // Define um tempo limite...
	    setTimeout ( function ( ) { 
		    // Oculta o endereço bar!
            console.log('rodo!')
		    window.scrollTo(
                {
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                  }
            ) ;
	    },500 ) ;
    })
}

export default hideSearchMobile;