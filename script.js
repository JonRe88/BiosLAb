// script.js
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');


hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    if (navLinks.classList.contains('active')) {
        gsap.to(navLinks, {duration: 0.5, opacity: 1, height: "auto", ease: "power2.out"});
    } else {
        gsap.to(navLinks, {duration: 0.5, opacity: 1, height: 0, ease: "power2.in"});
    }
});

