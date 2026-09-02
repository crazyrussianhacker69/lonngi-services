// Side Nav Behavior
function openNav() {
    document.getElementById('sideNavBar').style.width = '70%';
    document.getElementById('overlayFilter').style.width = '100%';
}

function closeNav() {
    document.getElementById('sideNavBar').style.width = '0';
    document.getElementById('overlayFilter').style.width = '0';
}


// Scroll-Reveal Behavior
const revealElements = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, {
        threshold: 0.15
    });
revealElements.forEach(element => {
    observer.observe(element);
});


// Business Images Loop
// Using Swiper API
const swiper = new Swiper('.swiper', {
    loop: true,
    speed: 2000,
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },
});
