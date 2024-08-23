document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;

    // Hamburger menu toggle
    hamburger.addEventListener('click', function(event) {
        event.stopPropagation();
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking outside
    body.addEventListener('click', function(event) {
        if (navLinks.classList.contains('active') && 
            !navLinks.contains(event.target) && 
            !hamburger.contains(event.target)) {
            navLinks.classList.remove('active');
        }
    });

    // Prevent menu from closing when clicking inside it
    navLinks.addEventListener('click', function(event) {
        event.stopPropagation();
    });

    // Smooth scrolling for menu items
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 60,
                    behavior: 'smooth'
                });
                // Close menu after clicking a link (for mobile)
                navLinks.classList.remove('active');
            }
        });
    });

    // Gallery dropdown toggle for mobile
    const galleryDropdown = document.querySelector('.gallery-dropdown > a');
    if (galleryDropdown) {
        galleryDropdown.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                this.parentElement.classList.toggle('active');
            }
        });
    }

    // Initialize Magnific Popup for Gallery 1
    $('#gallery1 .image-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title') || '';
            }
        }
    });

    // Initialize Magnific Popup for Gallery 2
    $('#gallery2 .image-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title') || '';
            }
        }
    });

    // You can add more gallery initializations here as needed
    // Example for Gallery 3:
    
    $('#gallery3 .image-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title') || '';
            }
        }
    });
    
});
