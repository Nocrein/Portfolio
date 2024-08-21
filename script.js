document.addEventListener('DOMContentLoaded', function() {
    // Sticky Navigation - Make the nav sticky on scroll
    const nav = document.querySelector('nav');
    const header = document.querySelector('header');

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > header.offsetHeight) {
            nav.classList.add('sticky');
        } else {
            nav.classList.remove('sticky');
        }
    });

    // Smooth Scroll for Navigation Links
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Responsive Navigation Menu Toggle
    const toggleButton = document.createElement
