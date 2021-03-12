//function read script in load of page
window.addEventListener('load', ()=>{

  
    const headerColor = document.getElementById('header-section');
    const menuColor = document.getElementById('navMenu');

    //function does in scroll 
    window.addEventListener('scroll',() =>{
        // is scrolling? trade the color from header   
        if(window.scrollY > 0){
            headerColor.classList.add('headerMenu_tradeColor');

        }else{
            headerColor.classList.remove('headerMenu_tradeColor');
        }

        // is scrolling? trade the color from nav-menu   
        if(window.scrollY > 550){
            navMenu.classList.add('navMenu_tradeColor');
            navMenu.classList.remove('navMenu_returnColor');

        }else{
            navMenu.classList.remove('navMenu_tradeColor');
            navMenu.classList.add('navMenu_returnColor');
        }
    });
});       
