// Toggle the menu when hamburger is clicked
const hamburger = document.getElementById('hamburger');
const navmenu = document.getElementById('navmenu');

hamburger.addEventListener('click', () => {
    navmenu.classList.toggle('show-menu')
});

//  this is for scroll 
let navbar = document.querySelector('nav')
window.onscroll = function () {
    if(window.scrollY > 0) {
        navbar.style.background = '#eefff9';
    } else {
        navbar.style.background = 'back';
    }
}
// contact button 
function clickMe(){
    window.open("contact.html");
}
// apply button 
function apply(){
    window.open("https://forms.gle/4ByZhSCyTMvjDBA46");

}