document.addEventListener('DOMContentLoaded', function() {
    let menuIcon = document.getElementById('menu-icon');
    let navbar = document.querySelector('.navbar');
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };

    window.onscroll = () => {
        let isSectionActive = false;
    
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');
    
            if (top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });
    
                isSectionActive = true;
            }
        });
    
        if (!isSectionActive) {
            navLinks.forEach(links => {
                links.classList.remove('active');
            });
        }
    
        let header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 100);
    
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    };
    
    
});

ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', 
    { 
        origin: 'top' 
});

ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', 
    { 
        origin: 'bottom' 
});

ScrollReveal().reveal('.home-content h1, .about-img', 
    { 
        origin: 'left' 
});

ScrollReveal().reveal('.home-content p, .about-content', 
    { 
        origin: 'right' 
});

const typed = new Typed('.multiple-text', {
    strings: [
        'Тренер', 
        'Досвідчений гравець', 
        'Кандидат в майстри спорту',
    ],
    typedSpeed: 50,
    backSpeed: 300,
    backDelay: 2000,
    startDelay: 500,
    loop: true,
});