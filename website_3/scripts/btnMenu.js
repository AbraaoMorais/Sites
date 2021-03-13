
//function read script in load of page
window.addEventListener('load', () => {

    const $btnMenuOpen = document.querySelector(".btnMenu_Open");
    const $btnMenuClose = document.querySelector('.btnMenu_Close');
    const $nav_menu = document.querySelector('.section-nav');
    
    const $subMenu_servIcon = document.getElementById('arrowIcon_Serviços');
    const $subMenu_difIcon = document.getElementById('arrowIcon_Dif');
    const $openSubMenuServ = document.getElementById('btnSubMenu_Serviços');
    const $openSubMenuDif = document.getElementById('btnSubMenu_Dif');
    const $subMenuServ = document.getElementById('subMenu_Serviços');
    const $subMenuDif = document.getElementById('subMenu_Dif');

    // function open menu ------
    $btnMenuOpen.addEventListener ('click', () => {
        $nav_menu.classList.add('open_Menu');
        $btnMenuOpen.classList.add('btnMenu_Open_none');    
    })
    
    // function close menu ------
    $btnMenuClose.addEventListener('click', () => {
        $nav_menu.classList.remove('open_Menu');
        $btnMenuOpen.classList.remove('btnMenu_Open_none'); 
    })
    //funcion Open Sub menu serviços -----
    $openSubMenuServ.addEventListener('click',()=>{
        $subMenuServ.classList.toggle('subMenu_Open');
        //anim the icon of submenu
        $subMenu_servIcon.classList.toggle('subMenu_arrowIcon_On');
        
    })
    //funcion Open Sub menu Diferenciais -----
    $openSubMenuDif.addEventListener('click',()=>{
        $subMenuDif.classList.toggle('subMenu_Open');
        //anim the icon of submenu
        $subMenu_difIcon.classList.toggle('subMenu_arrowIcon_On');
        
    })
});