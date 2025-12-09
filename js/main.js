// --- AOS and Smooth Scroll Initialization ---

// 1. Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000, // Duration of animation (milliseconds)
    once: true,     // Only animate once
    mirror: false,  // Don't mirror scroll when scrolling up
});

// 2. Custom Smooth Scroll Implementation for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


// 3. Mobile Menu Toggle Functionality
const mobileMenu = document.getElementById('mobile-menu');
const openButton = document.getElementById('mobile-menu-button');
const closeButton = document.getElementById('close-menu-button');

// Function to open the menu
function openMobileMenu() {
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevents scrolling behind the overlay
}

// Function to close the menu (and restore scrolling)
window.closeMobileMenu = function() {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = ''; // Restores body scrolling
}

// Event Listeners
if (openButton) {
    openButton.addEventListener('click', openMobileMenu);
}
if (closeButton) {
    closeButton.addEventListener('click', closeMobileMenu);
}

// Optional: Close menu if user clicks on a link within the menu
// (This is also handled by the onclick attribute on the anchor tags in index.html)
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});