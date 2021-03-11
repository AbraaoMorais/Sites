
//function read script in load of page
window.onload = () => {

    const $btnMenuOpen = document.querySelector(".btnMenu_Open");
    const $btnMenuClose = document.querySelector('.btnMenu_Close');
    const $nav_menu = document.querySelector('.section-nav');
    
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
}