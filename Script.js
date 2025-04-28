document.addEventListener('DOMContentLoaded', function() {
    // Enforce dark mode only - always ensure dark mode is active
    document.documentElement.classList.add('dark');
    document.body.classList.add('dark');
    
    // Enhanced animations for sections with improved timing
    const sections = document.querySelectorAll('section');
    const animateOnScroll = function() {
        sections.forEach((section, index) => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.85) {
                if (!section.classList.contains('animated')) {
                    section.classList.add('animated');
                    
                    // Generate random delay between 100ms and 400ms
                    const delay = 100 + Math.random() * 300;
                    
                    setTimeout(() => {
                        section.style.opacity = '1';
                        section.style.transform = 'translateY(0)';
                        
                        // Add a subtle animation based on section
                        if (index % 4 === 0) {
                            section.classList.add('fade-in');
                        } else if (index % 4 === 1) {
                            section.classList.add('slide-in-left');
                        } else if (index % 4 === 2) {
                            section.classList.add('slide-in-right');
                        } else {
                            section.classList.add('zoom-in');
                        }
                    }, delay);
                }
            }
        });
    };
    
    // Initialize sections for animations with improved styling
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        
        if (index % 4 === 0) {
            section.style.transform = 'translateY(30px)';
        } else if (index % 4 === 1) {
            section.style.transform = 'translateX(-30px)';
        } else if (index % 4 === 2) {
            section.style.transform = 'translateX(30px)';
        } else {
            section.style.transform = 'scale(0.95)';
        }
        
        section.style.transition = 'opacity 0.8s ease, transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    });
    
    // Run animation on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Run once on page load with staggered timing for initial animations
    setTimeout(() => {
        animateOnScroll();
        
        // Animate navbar links with delay
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach((link, index) => {
            setTimeout(() => {
                link.style.opacity = '1';
                link.style.transform = 'translateY(0)';
            }, 200 + (index * 100));
        });
    }, 300);
    
    // Remove dark mode toggle functionality entirely
    const createDarkModeToggle = function() {
        // Do nothing - we're removing the toggle completely
    };
    
    // Enhanced card hover effects with the new color scheme
    const cards = document.querySelectorAll('.card-hover');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            card.style.transform = 'translateY(-8px)';
            card.style.borderColor = 'var(--primary)';
        });
        
        card.addEventListener('mouseleave', function() {
            card.style.transform = '';
            card.style.borderColor = '';
        });
    });
    
    // Add smooth scrolling for anchor links with improved easing
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 85;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });
    
    // Add skill progress bar animations
    const animateSkills = function() {
        const skillBars = document.querySelectorAll('.skill-progress-bar');
        skillBars.forEach(bar => {
            const percentage = bar.getAttribute('data-progress') || '0';
            bar.style.width = percentage + '%';
        });
    };
    
    // Initialize the page hero animation
    setTimeout(() => {
        const heroElement = document.querySelector('.hero-content');
        if (heroElement) {
            heroElement.classList.add('animated');
        }
        
        animateSkills();
    }, 300);
    
    // Add interactive background effect
    const headerSection = document.getElementById('about');
    const interactiveBlob = document.querySelector('.interactive-blob');
    
    if (headerSection && interactiveBlob) {
        headerSection.addEventListener('mousemove', function(e) {
            // Calculate mouse position relative to the header
            const rect = headerSection.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Calculate position as percentage of header dimensions
            const xPercent = x / rect.width;
            const yPercent = y / rect.height;
            
            // Move the blob slightly based on mouse position (subtle effect)
            const xOffset = 50 + (xPercent - 0.5) * 20; // +/- 10% from center
            const yOffset = 50 + (yPercent - 0.5) * 20; // +/- 10% from center
            
            // Apply transform with a slight delay for smooth effect
            interactiveBlob.style.transition = 'transform 0.3s ease-out';
            interactiveBlob.style.transform = `translate(calc(-${xOffset}%), calc(-${yOffset}%))`;
        });
        
        // Reset blob position when mouse leaves the header
        headerSection.addEventListener('mouseleave', function() {
            interactiveBlob.style.transition = 'transform 0.8s ease-out';
            interactiveBlob.style.transform = 'translate(-50%, -50%)';
        });
    }
    
    // Create dynamic particles that appear randomly
    const createRandomParticles = function() {
        const headerSection = document.getElementById('about');
        if (!headerSection) return;
        
        setInterval(() => {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Random position
            const left = Math.random() * 100;
            const top = 80 + Math.random() * 20; // Bottom 20% of the header
            
            // Random size
            const size = 2 + Math.random() * 3; // Slightly smaller particles
            
            // Apply styles
            particle.style.left = `${left}%`;
            particle.style.top = `${top}%`;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.opacity = '0';
            
            // Make particles darker too
            particle.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
            
            // Animation duration and delay
            const duration = 5 + Math.random() * 5;
            particle.style.animation = `particleDrift ${duration}s linear forwards`;
            
            // Add to DOM
            headerSection.appendChild(particle);
            
            // Remove after animation completes
            setTimeout(() => {
                if (particle.parentNode === headerSection) {
                    headerSection.removeChild(particle);
                }
            }, duration * 1000);
        }, 500); // Create new particle every 500ms
    };
    
    // Initialize particle effect
    createRandomParticles();
    
    // Initialize dark hero animation
    initDarkHeroAnimation();

    // Initialize Certificates Pagination
    initCertificatesPagination();
});

// Initialize the certificates pagination
function initCertificatesPagination() {
    // Remove the fake certificates and only include the ones you actually have
    const certificates = [
        { title: "Building AI Powered Chatbots Without Programming", issuer: "IBM", year: "2024" },
        { title: "Introduction to Packet Tracer", issuer: "Cisco", year: "2024" },
        { title: "Introduction to Containers w/ Docker, Kubernetes & OpenShift", issuer: "IBM", year: "2023" },
        { title: "Get Started with Python", issuer: "Google", year: "2023" },
        { title: "Python for Data Science, AI & Development", issuer: "IBM", year: "2023" },
        { title: "HTML and CSS in Depth", issuer: "Meta", year: "2023" },
        { title: "Programming in Python", issuer: "Meta", year: "2023" },
        { title: "Programming with JavaScript", issuer: "Meta", year: "2023" },
        { title: "React Basics", issuer: "Meta", year: "2023" },
        { title: "Introduction to Front-End Development", issuer: "Meta", year: "2023" },
        { title: "Work Smarter with Microsoft Excel", issuer: "Microsoft", year: "2023" },
        { title: "Artificial Intelligence Fundamentals", issuer: "IBM", year: "2023" },
        { title: "Introduction to Cybersecurity", issuer: "Cisco", year: "2023" },
        { title: "JavaScript Essentials 1", issuer: "Cisco", year: "2023" },
        { title: "Python 101 for Data Science", issuer: "IBM", year: "2023" },
        { title: "Web Development Fundamentals", issuer: "IBM", year: "2023" },
        { title: "Certyfikat Umiejętności Jutra", issuer: "Google", year: "2023" }
        // Removed fake certificates: Google Associate Android Developer, Azure Fundamentals AZ-900, TOEIC
    ];
    
    const certificatesContainer = document.getElementById('certificates-container');
    const prevButton = document.getElementById('prev-cert');
    const nextButton = document.getElementById('next-cert');
    const paginationContainer = document.getElementById('cert-pagination');
    
    if (!certificatesContainer || !prevButton || !nextButton || !paginationContainer) return;
    
    const itemsPerPage = 4;
    const totalPages = Math.ceil(certificates.length / itemsPerPage);
    let currentPage = 0;
    
    // Create pages of certificates - larger format with more spacing
    const pages = [];
    for (let i = 0; i < totalPages; i++) {
        const start = i * itemsPerPage;
        const pageItems = certificates.slice(start, start + itemsPerPage);
        
        const pageElement = document.createElement('div');
        pageElement.className = `certificate-page ${i === 0 ? 'active' : i < 0 ? 'prev' : 'next'}`;
        pageElement.dataset.page = i;
        
        pageItems.forEach(cert => {
            const certElement = document.createElement('div');
            certElement.className = 'rounded-xl project-card';
            
            // Updated layout with date in top right corner
            certElement.innerHTML = `
                <div class="flex justify-between items-center w-full mb-1">
                    <h3 class="font-medium text-gray-800 dark:text-white truncate">${cert.title}</h3>
                    <p class="text-gray-600 dark:text-gray-400">${cert.year}</p>
                </div>
                <p class="cert-issuer text-gray-600 dark:text-gray-400">${cert.issuer}</p>
            `;
            pageElement.appendChild(certElement);
        });
        
        pages.push(pageElement);
        certificatesContainer.appendChild(pageElement);
    }
    
    // Create pagination info
    const pageInfo = document.createElement('div');
    pageInfo.className = 'text-center';
    pageInfo.innerHTML = `<span id="current-page">1</span>/${totalPages}`;
    paginationContainer.appendChild(pageInfo);
    
    // Update button states
    updateButtons();
    
    // Add button event listeners
    prevButton.addEventListener('click', () => {
        if (currentPage > 0) {
            goToPage(currentPage - 1);
        }
    });
    
    nextButton.addEventListener('click', () => {
        if (currentPage < totalPages - 1) {
            goToPage(currentPage + 1);
        }
    });
    
    // Function to navigate to a specific page
    function goToPage(pageIndex) {
        if (pageIndex < 0 || pageIndex >= totalPages) return;
        
        // Update page classes
        pages.forEach((page, index) => {
            if (index === pageIndex) {
                page.className = 'certificate-page active';
            } else if (index < pageIndex) {
                page.className = 'certificate-page prev';
            } else {
                page.className = 'certificate-page next';
            }
        });
        
        // Update current page indicator
        document.getElementById('current-page').textContent = pageIndex + 1;
        
        currentPage = pageIndex;
        updateButtons();
    }
    
    // Update button states based on current page
    function updateButtons() {
        prevButton.disabled = currentPage === 0;
        nextButton.disabled = currentPage === totalPages - 1;
        
        prevButton.classList.toggle('opacity-50', currentPage === 0);
        nextButton.classList.toggle('opacity-50', currentPage === totalPages - 1);
    }
}

// Function to initialize the dark hero animation
function initDarkHeroAnimation() {
    const matrixColumns = document.querySelectorAll('.matrix-column');
    
    // Fill matrix columns with random characters
    matrixColumns.forEach(column => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789<>/\\|[]{}!@#$%^&*()_+-=';
        const columnHeight = Math.floor(Math.random() * 15) + 10; // 10-25 characters per column
        
        let columnContent = '';
        for (let i = 0; i < columnHeight; i++) {
            columnContent += characters.charAt(Math.floor(Math.random() * characters.length)) + '<br>';
        }
        
        column.innerHTML = columnContent;
    });
    
    // Make code lines react to mouse movement
    const heroSection = document.getElementById('about');
    const codeLines = document.querySelectorAll('.code-line');
    
    if (heroSection) {
        heroSection.addEventListener('mousemove', function(e) {
            const rect = heroSection.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position within the element
            const y = e.clientY - rect.top;  // y position within the element
            
            // Calculate position as percentage
            const xPercent = x / rect.width;
            const yPercent = y / rect.height;
            
            // Subtle movement of code lines based on mouse position
            codeLines.forEach((line, index) => {
                const offsetX = (xPercent - 0.5) * 10; // -5px to 5px
                const offsetY = (yPercent - 0.5) * 5;  // -2.5px to 2.5px
                const baseRotation = parseFloat(line.style.getPropertyValue('--rotate') || '0deg');
                
                line.style.transform = `translateX(${offsetX}px) translateY(${offsetY}px) rotate(${baseRotation}deg)`;
            });
        });
    }
}
