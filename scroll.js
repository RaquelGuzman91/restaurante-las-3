ScrollReveal({
    reset: false,
    distance: '80px',
    duration: 2000,
    delay: 200
});


ScrollReveal().reveal('.banner-text h3, .banner p , .icon-a' , { origin: 'bottom'});
ScrollReveal().reveal('.slogan , .menu , .our-text h2 p'  , {origin: 'right'});
ScrollReveal().reveal('.promotions h2 , .our-text', {origin: 'left'});
ScrollReveal().reveal('.contact h3, .contact h4, .contact p , .icon-i , .section-link ', {origin: 'top'});
