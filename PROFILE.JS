// Add event listeners to navigation links
document.querySelectorAll('nav a').forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetSection = document.querySelector(`.${link.getAttribute('href').slice(1)}`);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Add animation to profile sections
document.querySelectorAll('.profile-section, .skills-section, .experience-section, .education-section').forEach((section) => {
    section.addEventListener('mouseover', () => {
        section.classList.add('animated');
    });
    section.addEventListener('mouseout', () => {
        section.classList.remove('animated');
    });
});