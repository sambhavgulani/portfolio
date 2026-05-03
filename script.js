const toggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

toggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth scroll
function scrollToWork() {
    document.getElementById('short').scrollIntoView({ behavior: 'smooth' });
}

// Disable right click globally (extra protection)
document.addEventListener('contextmenu', event => event.preventDefault());
