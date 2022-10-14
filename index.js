/* Define variables */
var menuContainer = document.querySelector('menu')
var hamburgerButton = document.querySelector('hamburger-btn')
var menu = document.getElementById('main-menu')
var hamburgerMenu = document.querySelector('hamburger-menu')

/* run functions */

function menuClick(e) {
    e.preventDefault();
    if(clicked == true ) {
        if(hamburgerButton.getAttribute('aria-expanded', false)) {
                hamburgerMenu.classList.addAttribute('show-menu')
                hamburgerButton.setAttribute('aria-expanded', true);
                menu.focus()
            }
    }  {
            function closeHamburgerMenu(){
                hamburgerMenu.classList.removeAttribute('show-menu')
                hamburgerButton.setAttribute('aria-expanded', false);
                hamburgerButton.focus()
            }
    /*call functions with .onclick */
    hamburgerButton.onclick = menuClick(e)
    var clicked = hamburgerButton.onclick

    document.body.onclick = function(e) {
        if (
            hamburgerMenu.contains(e.target) ||
            e.target === hamburgerButton
        ) {
            return
        }
        closeHamburgerMenu()
    }
    
    document.onkeyup = function(e) {
        if (
            e.key === 'Tab' &&
            hamburgerMenu.classList.contains('show-menu') &&
            !hamburgerMenu.contains(document.activeElement)
        ) {
            hamburgerButton.focus()
        }
        if(e.key === 'Escape')
            closeHamburgerMenu()
        }
    
    }
    
    
}

