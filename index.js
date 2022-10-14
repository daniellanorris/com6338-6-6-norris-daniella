//Define variables
var menuContainer = document.querySelector('.menu')
var hamburgerButton = document.querySelector('button.hamburger-btn')
var menu = document.getElementById('main-menu')
var hamburgerMenu = document.querySelector('.hamburger-menu')

// run functions 

function menuClick() {
    if (hamburgerButton.getAttribute('aria-expanded') === 'false') {
        hamburgerMenu.classList.add('show-menu')
        hamburgerButton.setAttribute('aria-expanded', true);

    } else {
        hamburgerMenu.classList.remove('show-menu')
        hamburgerButton.setAttribute('aria-expanded', false);
        hamburgerButton.focus()
    }
}

// call function with .onclick 
hamburgerButton.onclick = menuClick

// create click function for clicking outside menu
document.body.onclick = function(e) {
    console.log('click')
   if(!menuContainer.contains(e.target)) {
        hamburgerButton.setAttribute('aria-expanded', false);
        hamburgerMenu.classList.remove('show-menu')
    } 
}
// create keyup function for the escape key
document.onkeyup = function (e) {
    if (e.key === 'Escape') {
        hamburgerMenu.classList.remove('show-menu')
        hamburgerButton.setAttribute('aria-expanded', false);
        hamburgerButton.focus()

    }

}




