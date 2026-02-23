document.addEventListener('DOMContentLoaded', function() {
    // Initialize the lightGallery plugin for each subgallery
    /*
    lightGallery(document.getElementById('youtubegallery1'), {
        plugins: [lgShare], // Enable the share plugin
        share: true, // Ensure share is enabled
        download: true, // Keep download enabled
    });

    */

    lightGallery(document.getElementById('youtubegallery'), {
        plugins: [lgVideo],
        selector: 'a',
        videojs: true,
    });
    
    lightGallery(document.getElementById('lightgallery1'), {
        plugins: [lgShare], // Enable the share plugin
        share: true, // Ensure share is enabled
        download: true, // Keep download enabled
    });

    lightGallery(document.getElementById('lightgallery2'), {
        plugins: [lgShare],
        share: true,
        download: true,
    });

    lightGallery(document.getElementById('lightgallery3'), {
        plugins: [lgShare],
        share: true,
        download: true,
    });

    lightGallery(document.getElementById('lightgallery4'), {
        plugins: [lgShare],
        share: true,
        download: true,
    });

    // Hamburger menu toggle
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');
    const menuItems = document.querySelectorAll('#menu a');

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('show');
    });

    // Close hamburger menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
            menu.classList.remove('show');
        }
    });

    // Close hamburger menu when clicking a menu item
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            if (menu.classList.contains('show')) {
                menu.classList.remove('show');
            }
        });
    });

    // Smooth scrolling to sections
    menuItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
});

