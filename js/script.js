// ============================================
// Mohtawa Website - Vanilla JavaScript
// ============================================

// Smooth scroll behavior for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Handle contact form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            company: document.getElementById('company').value,
            service: document.getElementById('service').value,
            message: document.getElementById('message').value
        };
        
        // Validate form
        if (!formData.name || !formData.email || !formData.message) {
            showFormMessage('Please fill in all required fields.', 'error');
            return;
        }
        
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            showFormMessage('Please enter a valid email address.', 'error');
            return;
        }
        
        // Show success message
        showFormMessage('Thank you for your message! We will get back to you soon.', 'success');
        
        // Reset form
        contactForm.reset();
        
        // In a real application, you would send this data to a server
        console.log('Form data:', formData);
    });
}

// Display form message
function showFormMessage(message, type) {
    const messageElement = document.getElementById('formMessage');
    if (messageElement) {
        messageElement.textContent = message;
        messageElement.style.display = 'block';
        messageElement.style.color = type === 'success' ? '#10b981' : '#ef4444';
        messageElement.style.fontWeight = '500';
        
        // Hide message after 5 seconds
        setTimeout(() => {
            messageElement.style.display = 'none';
        }, 5000);
    }
}

// Add scroll animation for elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all service cards, team cards, and portfolio cards
document.querySelectorAll('.service-card, .team-card, .portfolio-card, .testimonial-card, .about-card, .stat-card').forEach(card => {
    card.style.opacity = '0';
    observer.observe(card);
});

// Add button hover effects
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-2px)';
    });
    
    button.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)';
    });
});

// Add active state to navigation links based on current page
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.style.color = '#6B4C9A';
            link.style.fontWeight = '600';
        }
    });
}

// Call on page load
document.addEventListener('DOMContentLoaded', setActiveNavLink);

// Mobile menu toggle (for future mobile menu implementation)
function initMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks && window.innerWidth < 768) {
        // Mobile menu logic can be added here
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initMobileMenu);

// Handle window resize
window.addEventListener('resize', () => {
    initMobileMenu();
});

// Add keyboard navigation support
document.addEventListener('keydown', function (e) {
    // Escape key to close any open modals (if implemented)
    if (e.key === 'Escape') {
        // Modal close logic can be added here
    }
});

// Prevent form submission on Enter in text inputs
document.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"]').forEach(input => {
    input.addEventListener('keypress', function (e) {
        if (e.key === 'Enter' && this.id !== 'message') {
            e.preventDefault();
        }
    });
});

// Add page load animation
window.addEventListener('load', function () {
    document.body.style.opacity = '1';
});

// Initialize page load animation
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.3s ease-in';

// Log page analytics (placeholder)
console.log('Mohtawa Website Loaded');
console.log('Page:', window.location.pathname);
console.log('Time:', new Date().toLocaleString());
