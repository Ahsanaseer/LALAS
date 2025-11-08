// ===================== REUSABLE COMPONENTS FOR LALAS WEBSITE =====================

// Navigation Component
function updateThemeLogos(theme) {
  if (typeof document === 'undefined') return;
  const themeLogos = document.querySelectorAll('.theme-logo');
  themeLogos.forEach(logo => {
    const lightSrc = logo.getAttribute('data-light');
    const darkSrc = logo.getAttribute('data-dark');
    if (theme === 'light' && lightSrc) {
      logo.src = lightSrc;
    } else if (theme === 'dark' && darkSrc) {
      logo.src = darkSrc;
    }
  });
}

function createNavigation(currentPage = '') {
  const basePath = currentPage === 'index.html' || currentPage === '' ? '' : 'index.html';
  return `
    <!-- Header -->
    <header class="header">
        <div class="header-container">
            <div class="header-flex">
                <div class="header-logo">
                    <a href="${basePath || 'index.html'}">
                        <img src="PICS/lalas logo dm.png" alt="LALAS" class="logo-image theme-logo" id="logoImage" data-light="PICS/lalas logo lm.png" data-dark="PICS/lalas logo dm.png">
                    </a>
                </div>
                
                <div class="header-nav">
                    <nav class="desktop-nav">
                        <a href="/" class="nav-link"><span class="nav-link-text">HOME</span></a>
                        <div class="nav-item nav-item-dropdown">
                            <a href="${basePath || 'index.html'}#categories" class="nav-link nav-link-dropdown" aria-haspopup="true"><span class="nav-link-text">SHOP BY CATEGORY</span></a>
                            <div class="nav-dropdown" role="menu">
                                <a href="${basePath || 'index.html'}#categories" class="nav-dropdown-link" role="menuitem"><span class="nav-dropdown-text">Men</span></a>
                                <a href="${basePath || 'index.html'}#categories" class="nav-dropdown-link" role="menuitem"><span class="nav-dropdown-text">Women</span></a>
                                <a href="${basePath || 'index.html'}#categories" class="nav-dropdown-link" role="menuitem"><span class="nav-dropdown-text">Unisex</span></a>
                                <a href="${basePath || 'index.html'}#categories" class="nav-dropdown-link" role="menuitem"><span class="nav-dropdown-text">Jerseys</span></a>
                                <a href="${basePath || 'index.html'}#categories" class="nav-dropdown-link" role="menuitem"><span class="nav-dropdown-text">Oversized Shirts</span></a>
                                <a href="${basePath || 'index.html'}#categories" class="nav-dropdown-link" role="menuitem"><span class="nav-dropdown-text">Printed Shirts</span></a>
                            </div>
                        </div>
                        <a href="${basePath || 'index.html'}#new" class="nav-link"><span class="nav-link-text">NEW ARRIVALS</span></a>
                        <a href="${basePath || 'index.html'}#featured" class="nav-link"><span class="nav-link-text">FEATURED</span></a>
                    </nav>
                    
                    <button class="theme-toggle-btn" id="themeToggle">
                        <svg class="sun-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="5"></circle>
                            <line x1="12" y1="1" x2="12" y2="3"></line>
                            <line x1="12" y1="21" x2="12" y2="23"></line>
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                            <line x1="1" y1="12" x2="3" y2="12"></line>
                            <line x1="21" y1="12" x2="23" y2="12"></line>
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                        </svg>
                        <svg class="moon-icon hidden" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                    </button>
                    
                    <button class="nav-icon-btn" id="searchBtn">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.35-4.35"></path>
                        </svg>
                    </button>
                    
                    <a href="login.html" class="nav-icon-btn" id="userBtn">
                        <img src="PICS/profile-navbar-icon.svg" alt="User Profile" width="20" height="20">
                    </a>
                    
                    <button class="nav-icon-btn cart-btn" id="cartBtn">
                        <img src="PICS/cart-navbar-icon.svg" alt="Shopping Cart" width="25" height="25">
                    </button>
                    
                    <button class="mobile-menu-btn" id="mobileMenuBtn">
                        <svg class="menu-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                        <svg class="close-icon hidden" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        
        <div class="mobile-menu hidden" id="mobileMenu">
            <nav class="mobile-nav">
                <a href="${basePath || 'index.html'}#home" class="mobile-nav-link">Home</a>
                <div class="mobile-nav-item mobile-nav-dropdown">
                    <button class="mobile-nav-link mobile-nav-toggle" type="button" data-target="mobileCategoryMenu" aria-expanded="false">
                        Shop by Category
                        <span class="mobile-nav-toggle-icon" aria-hidden="true"></span>
                    </button>
                    <div class="mobile-submenu" id="mobileCategoryMenu">
                        <a href="${basePath || 'index.html'}#categories" class="mobile-submenu-link">Men</a>
                        <a href="${basePath || 'index.html'}#categories" class="mobile-submenu-link">Women</a>
                        <a href="${basePath || 'index.html'}#categories" class="mobile-submenu-link">Unisex</a>
                        <a href="${basePath || 'index.html'}#categories" class="mobile-submenu-link">Jerseys</a>
                        <a href="${basePath || 'index.html'}#categories" class="mobile-submenu-link">Oversized Shirts</a>
                        <a href="${basePath || 'index.html'}#categories" class="mobile-submenu-link">Printed Shirts</a>
                    </div>
                </div>
                <a href="${basePath || 'index.html'}#new" class="mobile-nav-link">New Arrivals</a>
                <a href="${basePath || 'index.html'}#featured" class="mobile-nav-link">Featured</a>
                <a href="${basePath || 'index.html'}#best" class="mobile-nav-link">Best Sellers</a>
                <a href="${basePath || 'index.html'}#collections" class="mobile-nav-link">Collections</a>
            </nav>
        </div>
    </header>
  `;
}

// Footer Component
function createFooter() {
  const basePath = window.location.pathname.includes('login.html') ? 'index.html' : '';
  return `
    <!-- Footer -->
    <footer class="footer">
        <div class="footer-container">
            <div class="footer-grid">
                <div class="footer-brand">
                    <img src="PICS/lalas logo dm.png" alt="LALAS" class="footer-logo theme-logo" data-light="PICS/lalas logo lm.png" data-dark="PICS/lalas logo dm.png">
                    <p class="footer-description">
                        Premium hoodies, shirts, and jerseys for the modern lifestyle. Quality and style in every piece.
                    </p>
                </div>
                
                <div class="footer-column">
                    <h4 class="footer-heading">SHOP</h4>
                    <ul class="footer-links">
                        <li><a href="${basePath}#new" class="footer-link">New Arrivals</a></li>
                        <li><a href="${basePath}#collections" class="footer-link">Collections</a></li>
                        <li><a href="${basePath}#sale" class="footer-link">Sale</a></li>
                    </ul>
                </div>
                
                <div class="footer-column">
                    <h4 class="footer-heading">HELP</h4>
                    <ul class="footer-links">
                        <li><a href="${basePath}#contact" class="footer-link">Contact Us</a></li>
                        <li><a href="${basePath}#shipping" class="footer-link">Shipping</a></li>
                        <li><a href="${basePath}#returns" class="footer-link">Returns</a></li>
                        <li><a href="${basePath}#faq" class="footer-link">FAQ</a></li>
                    </ul>
                </div>
                
                <div class="footer-column">
                    <h4 class="footer-heading">CONNECT</h4>
                    <div class="social-links">
                        <a href="#" class="social-link">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </a>
                        <a href="#" class="social-link">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                        </a>
                        <a href="#" class="social-link">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                            </svg>
                        </a>
                    </div>
                    <p class="newsletter-text">
                        Subscribe to our newsletter for exclusive offers
                    </p>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p class="copyright">© 2025 LALAS. All rights reserved.</p>
            </div>
        </div>
    </footer>
  `;
}

// Back to Top Button Component
function createBackToTopButton() {
  return `
    <!-- Back to Top Button -->
    <button id="back-to-top" class="back-to-top-btn" aria-label="Back to top">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5L6 11" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 5l6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 5v14" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
        </svg>
    </button>
  `;
}

// ===================== COMPONENT INITIALIZATION FUNCTIONS =====================

// Function to determine current page
function getCurrentPage() {
  let currentPath = window.location.pathname;
  let currentPage = '';
  
  if (currentPath === '/' || currentPath === '/index.html' || currentPath.endsWith('/') || currentPath.endsWith('index.html')) {
    currentPage = 'index.html';
  } else if (currentPath.includes('login') || currentPath.includes('login.html')) {
    currentPage = 'login.html';
  } else {
    const pathParts = currentPath.split('/');
    currentPage = pathParts[pathParts.length - 1] || 'index.html';
  }
  
  return currentPage;
}

// Navigation Initialization
function initializeNavigation() {
  // Theme functionality
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    const sunIcon = themeToggle.querySelector('.sun-icon');
    const moonIcon = themeToggle.querySelector('.moon-icon');
    const body = document.body;
    
    // Get saved theme or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    
    // Apply saved theme
    applyTheme(savedTheme);
    
    // Theme toggle functionality
    themeToggle.addEventListener('click', function() {
      const currentTheme = body.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      applyTheme(newTheme);
      localStorage.setItem('theme', newTheme);
    });
    
    function applyTheme(theme) {
      body.setAttribute('data-theme', theme);

      updateThemeLogos(theme);

      if (sunIcon && moonIcon) {
        if (theme === 'light') {
          sunIcon.classList.add('hidden');
          moonIcon.classList.remove('hidden');
        } else {
          sunIcon.classList.remove('hidden');
          moonIcon.classList.add('hidden');
        }
      }
    }
  }

  // Header scroll functionality
  const header = document.querySelector('.header');
  if (header) {
    function handleScroll() {
      if (window.scrollY > 0) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
    
    // Check initial scroll position
    handleScroll();
    
    // Listen to scroll events
    window.addEventListener('scroll', handleScroll);
  }

  // Mobile menu functionality
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  
  if (mobileMenuBtn && mobileMenu) {
    const menuIcon = mobileMenuBtn.querySelector('.menu-icon');
    const closeIcon = mobileMenuBtn.querySelector('.close-icon');
    const mobileDropdownToggles = mobileMenu.querySelectorAll('.mobile-nav-toggle');

    mobileMenuBtn.setAttribute('aria-expanded', 'false');

    function collapseMobileDropdowns() {
      mobileDropdownToggles.forEach(toggle => {
        toggle.setAttribute('aria-expanded', 'false');
        const targetId = toggle.getAttribute('data-target');
        if (!targetId) return;
        const submenu = mobileMenu.querySelector(`#${targetId}`);
        if (submenu) {
          submenu.classList.remove('open');
        }
      });
    }

    function closeMobileMenu() {
      mobileMenu.classList.add('hidden');
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
      collapseMobileDropdowns();
    }

    function openMobileMenu() {
      mobileMenu.classList.remove('hidden');
      menuIcon.classList.add('hidden');
      closeIcon.classList.remove('hidden');
      mobileMenuBtn.setAttribute('aria-expanded', 'true');
    }

    mobileMenuBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      const isOpen = !mobileMenu.classList.contains('hidden');

      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    mobileDropdownToggles.forEach(toggle => {
      toggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();

        const targetId = toggle.getAttribute('data-target');
        if (!targetId) return;

        const submenu = mobileMenu.querySelector(`#${targetId}`);
        if (!submenu) return;

        const isOpen = submenu.classList.contains('open');
        collapseMobileDropdowns();

        if (!isOpen) {
          toggle.setAttribute('aria-expanded', 'true');
          submenu.classList.add('open');
        }
      });
    });

    const mobileNavLinks = mobileMenu.querySelectorAll('a.mobile-nav-link, .mobile-submenu-link');
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', function() {
        closeMobileMenu();
      });
    });

    document.addEventListener('click', function(e) {
      if (!e.target.closest('.mobile-menu') && !e.target.closest('.mobile-menu-btn') && !mobileMenu.classList.contains('hidden')) {
        closeMobileMenu();
      }
    });
  }
}

// Footer Initialization
function initializeFooter() {
  // Footer doesn't need special initialization, but placeholder for future functionality
}

// Back to Top Button Initialization
function initializeBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  
  if (!backToTopBtn) return;

  // Show/hide button based on scroll position
  function toggleBackToTop() {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  }

  // Check initial scroll position
  toggleBackToTop();

  // Listen to scroll events
  window.addEventListener('scroll', toggleBackToTop);

  // Smooth scroll to top when clicked
  backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// ===================== LOAD COMPONENTS FUNCTION =====================

// Function to load components into page
function loadComponents(currentPage = '') {
  // Load navigation
  const navContainer = document.querySelector('#nav-container');
  if (navContainer) {
    const page = currentPage || getCurrentPage();
    navContainer.innerHTML = createNavigation(page);
    initializeNavigation();
  }

  // Load footer
  const footerContainer = document.querySelector('#footer-container');
  if (footerContainer) {
    footerContainer.innerHTML = createFooter();
    initializeFooter();
    const currentTheme = document.body?.getAttribute('data-theme') || localStorage.getItem('theme') || 'dark';
    updateThemeLogos(currentTheme);
  }

  // Load back to top button
  const backToTopContainer = document.querySelector('#back-to-top-container');
  if (backToTopContainer) {
    backToTopContainer.innerHTML = createBackToTopButton();
    initializeBackToTop();
  }
}

// ===================== AUTO-INITIALIZATION =====================

// Load components when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    loadComponents();
  });
} else {
  // DOM is already loaded
  loadComponents();
}

