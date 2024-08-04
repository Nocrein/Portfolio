// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Get all grid items
    const gridItems = document.querySelectorAll('.grid-item');
    
    // Add click event listener to each grid item
    gridItems.forEach(item => {
        item.addEventListener('click', function() {
            // Toggle active class for each grid item
            gridItems.forEach(grid => grid.classList.remove('active'));
            this.classList.add('active');
        });
    });
});



// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Get the navigation menu and toggle button
    const navMenu = document.querySelector('nav');
    const toggleButton = document.createElement('button');
    
    toggleButton.textContent = 'Menu';
    toggleButton.classList.add('menu-toggle');
    navMenu.parentNode.insertBefore(toggleButton, navMenu);
    
    // Add click event listener to the toggle button
    toggleButton.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
});


// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('nav a');
    
    // Add click event listener to each link
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Prevent default link behavior
            event.preventDefault();
            
            // Get the target section's id from the href attribute
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            // Scroll to the target section smoothly
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
