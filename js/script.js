// Contact Form Submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            // Form validation (simple example)
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject') ? document.getElementById('subject').value.trim() : 'No Subject';
            const message = document.getElementById('message').value.trim();

            if (name === '' || email === '' || message === '') {
                alert('Please fill in all required fields.');
                return;
            }

            // Simulate form submission (you can replace this with actual email sending code)
            alert(`Thank you, ${name}, a member of our team will be in touch with you soon.`);
            contactForm.reset();
        });
    }
});

// Mobile navigation toggling
var CSbody = document.querySelector("body");
const CSnavbarMenu = document.querySelector("#cs-navigation");
const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");

CShamburgerMenu.addEventListener('click', function() {
    CShamburgerMenu.classList.toggle("cs-active");
    CSnavbarMenu.classList.toggle("cs-active");
    CSbody.classList.toggle("cs-open");
    ariaExpanded();
});

// Update aria-expanded attribute
function ariaExpanded() {
    const csUL = document.querySelector('#cs-expanded');
    const csExpanded = csUL.getAttribute('aria-expanded');
    csUL.setAttribute('aria-expanded', csExpanded === 'false' ? 'true' : 'false');
}

// Mobile nav dropdown functionality
const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
dropDowns.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('cs-active');
    });
});

// Scroll animation for the header
document.addEventListener('scroll', () => { 
    const scroll = document.documentElement.scrollTop;
    document.body.classList.toggle('scroll', scroll >= 100);
});

