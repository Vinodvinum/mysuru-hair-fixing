// ============================================
// MYSURU HAIR FIXING - SHARED SCRIPTS
// ============================================

// Active page navigation
document.addEventListener('DOMContentLoaded', function() {
    updateActiveNav();
    setupMobileMenu();
    setupFAQ();
    setupPricingButtons();
    setupSmoothScroll();
});

// Update active navigation based on current page
function updateActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Mobile menu toggle
function setupMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Close menu on link click
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }
}

// FAQ Accordion functionality
function setupFAQ() {
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const isActive = faqItem.classList.contains('active');

            // Close all other FAQs
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });

            // Toggle current FAQ
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });
}

// Pricing button functionality
function setupPricingButtons() {
    document.querySelectorAll('.pricing-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const card = this.closest('.pricing-card');
            const cardTitle = card.querySelector('h3').textContent;
            alert(`Thank you for your interest in ${cardTitle}! Contact us on WhatsApp or call for details.`);
        });
    });
}

// Smooth scroll for anchor links
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
}

// Scroll animation for elements
function animateOnScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    });

    document.querySelectorAll('.service-card, .testimonial-card, .transform-card, .why-card, .pricing-card').forEach(el => {
        observer.observe(el);
    });
}

// Call animation on scroll when page loads
window.addEventListener('load', animateOnScroll);

// CTA Button behavior
document.querySelectorAll('.cta-button').forEach(btn => {
    btn.addEventListener('click', function() {
        const message = this.textContent.includes('Consultation') 
            ? 'Hi Mysuru Hair Fixing, I want to book free consultation!' 
            : 'Hi Mysuru Hair Fixing, I want to book an appointment!';
        window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, '_blank');
    });
});

console.log('✅ Shared scripts loaded successfully!');
