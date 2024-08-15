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

    // Grid Item Click Event
    const gridItems = document.querySelectorAll('.grid-item');
    
    gridItems.forEach(item => {
        item.addEventListener('click', function() {
            gridItems.forEach(grid => grid.classList.remove('active'));
            this.classList.add('active');
        });
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
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Menu';
    toggleButton.classList.add('menu-toggle');
    nav.parentNode.insertBefore(toggleButton, nav);

    toggleButton.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
});
