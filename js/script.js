// ============================================
// TRACING WORKSHEET KIDS - INTERACTIVE SCRIPT
// ============================================

// Show/Hide Sections
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Remove active class from all nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    // Show selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }

    // Add active class to clicked nav link
    event.target.classList.add('active');

    // Scroll to top
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Initialize - Show home section on load
document.addEventListener('DOMContentLoaded', function() {
    // Set home as active section
    const homeSection = document.getElementById('home');
    if (homeSection) {
        homeSection.classList.add('active');
    }

    // Set first nav link as active
    const firstNavLink = document.querySelector('.nav-link');
    if (firstNavLink) {
        firstNavLink.classList.add('active');
    }

    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Utility function for tracking clicks
function trackActivity(activity) {
    console.log('Activity:', activity);
    // This can be extended for analytics
}

// Print functionality
function printWorksheet(worksheetName) {
    console.log('Printing:', worksheetName);
    window.print();
}

// Download PDF (placeholder - will be implemented with actual PDF generation)
function downloadPDF(pdfName) {
    console.log('Downloading PDF:', pdfName);
    alert('PDF download will be available soon! File: ' + pdfName);
}

// Add interactivity to worksheet cards
document.addEventListener('DOMContentLoaded', function() {
    const worksheetCards = document.querySelectorAll('.worksheet-card');
    worksheetCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.borderColor = 'var(--primary-color)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.borderColor = 'transparent';
        });
    });
});

// Responsive menu toggle (for future mobile menu implementation)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu) {
        navMenu.classList.toggle('active');
    }
}

// Keyboard navigation support
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        // Close any open modals or menus
        console.log('Escape key pressed');
    }
});

// Export for use in other scripts
window.tracingWorksheetApp = {
    showSection,
    trackActivity,
    printWorksheet,
    downloadPDF,
    toggleMobileMenu
};

console.log('Tracing Worksheet Kids - App Loaded Successfully! 🎨');