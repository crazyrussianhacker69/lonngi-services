const sidePanel = document.getElementById('sidePanel');
document.getElementById('hamburgerBtn').onclick = () => {
    sidePanel.classList.toggle('hidden');
    console.log('it worked');
};

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
