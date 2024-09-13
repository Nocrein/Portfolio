document.addEventListener('DOMContentLoaded', function() {
    // Sticky Navigation
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
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinksContainer = document.querySelector('.nav-links');
    menuToggle.addEventListener('click', function() {
        navLinksContainer.classList.toggle('active');
    });

    // Intersection Observer for Scroll Animations
    const sections = document.querySelectorAll('.section');
    const options = {
        threshold: 0.3,
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Form Submission with Success/Error Message
    const form = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const isSuccess = Math.random() > 0.5; // Simulate success/failure
        if (isSuccess) {
            formMessage.textContent = 'Thank you! Your message has been sent successfully.';
            formMessage.style.color = '#2ecc71'; // Success green
        } else {
            formMessage.textContent = 'Oops! Something went wrong. Please try again.';
            formMessage.style.color = '#e74c3c'; // Error red
        }
        form.reset();
    });

    // Scroll back to top
    const backToTop = document.getElementById('back-to-top');
    backToTop.addEventListener('click', function(event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Welcome Section Fade-Out
    const welcomeSection = document.querySelector('.welcome-section');
    setTimeout(() => {
        welcomeSection.style.opacity = '0';
        setTimeout(() => {
            welcomeSection.style.display = 'none';
        }, 1500); // Match the duration of the fade-out transition
    }, 5000); // Display the welcome section for 5 seconds
});
