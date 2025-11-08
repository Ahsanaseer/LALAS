// Static data for hoodies, shirts, and jerseys store
const staticProducts = [
    {
        id: '1',
        name: 'Premium Hoodie',
        slug: 'premium-hoodie',
        description: 'Comfortable premium hoodie with modern design',
        price: 79.99,
        image_url: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'hoodies',
        collection_id: '1',
        featured: true,
        new_arrival: true,
        best_seller: false,
        in_stock: true,
        created_at: '2025-01-15T00:00:00Z'
    },
    {
        id: '2',
        name: 'Classic T-Shirt',
        slug: 'classic-tshirt',
        description: 'Essential cotton t-shirt for everyday wear',
        price: 29.99,
        image_url: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'shirts',
        collection_id: '2',
        featured: true,
        new_arrival: false,
        best_seller: true,
        in_stock: true,
        created_at: '2025-01-10T00:00:00Z'
    },
    {
        id: '3',
        name: 'Athletic Jersey',
        slug: 'athletic-jersey',
        description: 'Performance jersey with moisture-wicking fabric',
        price: 59.99,
        image_url: 'https://images.pexels.com/photos/4226118/pexels-photo-4226118.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'jerseys',
        collection_id: '3',
        featured: true,
        new_arrival: true,
        best_seller: true,
        in_stock: true,
        created_at: '2025-01-14T00:00:00Z'
    },
    {
        id: '4',
        name: 'Oversized Hoodie',
        slug: 'oversized-hoodie',
        description: 'Relaxed fit oversized hoodie for maximum comfort',
        price: 89.99,
        image_url: 'https://images.pexels.com/photos/7679721/pexels-photo-7679721.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'hoodies',
        collection_id: '1',
        featured: false,
        new_arrival: false,
        best_seller: true,
        in_stock: true,
        created_at: '2025-01-05T00:00:00Z'
    },
    {
        id: '5',
        name: 'Polo Shirt',
        slug: 'polo-shirt',
        description: 'Classic polo shirt perfect for casual occasions',
        price: 49.99,
        image_url: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'shirts',
        collection_id: '2',
        featured: false,
        new_arrival: true,
        best_seller: false,
        in_stock: true,
        created_at: '2025-01-12T00:00:00Z'
    },
    {
        id: '6',
        name: 'Basketball Jersey',
        slug: 'basketball-jersey',
        description: 'Authentic style basketball jersey',
        price: 69.99,
        image_url: 'https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'jerseys',
        collection_id: '3',
        featured: true,
        new_arrival: false,
        best_seller: true,
        in_stock: false,
        created_at: '2025-01-08T00:00:00Z'
    },
    {
        id: '7',
        name: 'Zip-Up Hoodie',
        slug: 'zip-up-hoodie',
        description: 'Versatile zip-up hoodie with front pockets',
        price: 84.99,
        image_url: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'hoodies',
        collection_id: '1',
        featured: false,
        new_arrival: true,
        best_seller: false,
        in_stock: true,
        created_at: '2025-01-13T00:00:00Z'
    },
    {
        id: '8',
        name: 'Long Sleeve Shirt',
        slug: 'long-sleeve-shirt',
        description: 'Comfortable long sleeve shirt for all seasons',
        price: 39.99,
        image_url: 'https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'shirts',
        collection_id: '2',
        featured: false,
        new_arrival: false,
        best_seller: true,
        in_stock: true,
        created_at: '2025-01-06T00:00:00Z'
    }
];

const staticCategories = [
    {
        id: '1',
        name: 'HOODIES',
        slug: 'hoodies',
        image_url: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id: '2',
        name: 'SHIRTS',
        slug: 'shirts',
        image_url: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id: '3',
        name: 'JERSEYS',
        slug: 'jerseys',
        image_url: 'https://images.pexels.com/photos/4226118/pexels-photo-4226118.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
];

const staticCollections = [
    {
        id: '1',
        name: 'HOODIES',
        slug: 'hoodies',
        description: 'Comfortable and stylish hoodies for every occasion',
        image_url: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600',
        created_at: '2025-01-01T00:00:00Z'
    },
    {
        id: '2',
        name: 'SHIRTS',
        slug: 'shirts',
        description: 'Classic and modern shirts for everyday style',
        image_url: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=600',
        created_at: '2025-01-01T00:00:00Z'
    },
    {
        id: '3',
        name: 'JERSEYS',
        slug: 'jerseys',
        description: 'Performance jerseys for sports and active lifestyle',
        image_url: 'https://images.pexels.com/photos/4226118/pexels-photo-4226118.jpeg?auto=compress&cs=tinysrgb&w=600',
        created_at: '2025-01-01T00:00:00Z'
    }
];

const staticFaq = [
    {
        question: 'What sizes do you offer?',
        answer: 'Our hoodies, shirts, and jerseys follow a unisex size chart ranging from XS to XXL. For the best fit, check the measurements on each product page before placing your order.'
    },
    {
        question: 'How long does shipping take?',
        answer: 'Orders are processed within 1-2 business days. Standard domestic shipping takes 3-5 business days, while international orders may take 7-14 business days depending on customs.'
    },
    {
        question: 'Can I return or exchange an item?',
        answer: 'Absolutely. We accept returns and exchanges within 30 days of delivery as long as the item is unworn, unwashed, and in its original packaging. Start a request through the Returns portal in your order confirmation email.'
    },
    {
        question: 'Do you offer tracking information?',
        answer: 'Yes, you will receive a tracking link via email as soon as your order ships. You can also log in to your account to view live shipment updates at any time.'
    },
    {
        question: 'How should I care for my LALAS apparel?',
        answer: 'Turn garments inside out, wash on a cold gentle cycle, and hang dry to preserve prints and fabrics. Avoid bleach and high heat to keep your apparel looking fresh.'
    },
    {
        question: 'What payment methods do you accept?',
        answer: 'We currently accept major credit and debit cards, Apple Pay, Google Pay, and PayPal. All transactions are securely processed with end-to-end encryption.'
    },
    {
        question: 'Can I change or cancel my order after placing it?',
        answer: 'We can modify or cancel orders within 60 minutes of purchase. Reach out via live chat or email with your order number and our team will handle the request if the package has not shipped.'
    },
    {
        question: 'Do you restock sold-out items?',
        answer: 'Yes, core pieces are restocked regularly. Limited edition drops may not return, so subscribe to product notifications on the item page to be alerted first.'
    },
    {
        question: 'Are there any duties or taxes on international orders?',
        answer: 'International customers are responsible for import duties and local taxes. These fees are determined by your country’s customs office and are not included in our pricing.'
    },
    {
        question: 'How can I contact customer support?',
        answer: 'Our support team is available Monday to Saturday, 9 AM – 7 PM PST. Use the contact form, email support@lalas.co, or message us on Instagram for quick assistance.'
    }
];

// Main initialization
document.addEventListener('DOMContentLoaded', function() {
    // Note: Theme and header scroll are initialized by components.js
    // Initialize smooth scrolling
    initSmoothScrolling();
    
    // Initialize newsletter form
    initNewsletter();
    
    // Initialize with loading simulation
    simulateLoading();
});

function loadFeaturedProducts() {
    const container = document.getElementById('featuredProducts');
    
    if (!container) return;

    const featuredProducts = staticProducts.filter(product => product.featured);
    
    if (featuredProducts.length === 0) {
        container.innerHTML = `
            <div class="no-content">
                <p>No products available yet.</p>
                <p class="text-sm">Check back soon for our latest collection.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = featuredProducts.map(product => `
        <div class="product-card">
            <div class="product-image-container">
                <img src="${product.image_url}" alt="${product.name}" class="product-image">
                ${!product.in_stock ? `
                    <div class="product-out-of-stock">
                        <span class="product-out-of-stock-text">OUT OF STOCK</span>
                    </div>
                ` : ''}
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">$${product.price.toFixed(2)}</p>
            </div>
        </div>
    `).join('');
}

function loadCategories() {
    const container = document.getElementById('categoriesGrid');
    
    if (!container) return;

    if (staticCategories.length === 0) {
        container.innerHTML = `
            <div class="no-content">
                <p>Categories are coming soon.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = staticCategories.map(category => `
        <div class="category-card">
            <div class="category-image-container">
                <img src="${category.image_url}" alt="${category.name}" class="category-image">
                <div class="category-overlay"></div>
                <div class="category-info">
                    <h3 class="category-name">${category.name}</h3>
                </div>
            </div>
        </div>
    `).join('');
}

function loadNewArrivals() {
    const container = document.getElementById('newArrivalsProducts');
    
    if (!container) return;

    const newArrivals = staticProducts.filter(product => product.new_arrival).slice(0, 4);
    
    if (newArrivals.length === 0) {
        container.innerHTML = `
            <div class="no-content">
                <p>No new arrivals yet.</p>
                <p class="text-sm">Check back soon for our latest products.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = newArrivals.map(product => `
        <div class="product-card">
            <div class="product-image-container">
                <img src="${product.image_url}" alt="${product.name}" class="product-image">
                ${!product.in_stock ? `
                    <div class="product-out-of-stock">
                        <span class="product-out-of-stock-text">OUT OF STOCK</span>
                    </div>
                ` : ''}
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">$${product.price.toFixed(2)}</p>
            </div>
        </div>
    `).join('');
}

function loadBestSellers() {
    const container = document.getElementById('bestSellersProducts');
    
    if (!container) return;

    const bestSellers = staticProducts.filter(product => product.best_seller).slice(0, 4);
    
    if (bestSellers.length === 0) {
        container.innerHTML = `
            <div class="no-content">
                <p>No best sellers yet.</p>
                <p class="text-sm">Check back soon.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = bestSellers.map(product => `
        <div class="product-card">
            <div class="product-image-container">
                <img src="${product.image_url}" alt="${product.name}" class="product-image">
                ${!product.in_stock ? `
                    <div class="product-out-of-stock">
                        <span class="product-out-of-stock-text">OUT OF STOCK</span>
                    </div>
                ` : ''}
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">$${product.price.toFixed(2)}</p>
            </div>
        </div>
    `).join('');
}

function loadCollections() {
    const container = document.getElementById('collectionsGrid');
    
    if (!container) return;

    if (staticCollections.length === 0) {
        container.innerHTML = `
            <div class="no-content">
                <p>Our collections are coming soon.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = staticCollections.map(collection => `
        <div class="collection-card">
            <div class="collection-image-container">
                <img src="${collection.image_url}" alt="${collection.name}" class="collection-image">
                <div class="collection-overlay"></div>
                <div class="collection-info">
                    <h3 class="collection-name">${collection.name}</h3>
                    <p class="collection-description">${collection.description}</p>
                </div>
            </div>
        </div>
    `).join('');
}

function initNewsletter() {
    const newsletterForm = document.getElementById('newsletterForm');
    
    if (!newsletterForm) return;
    
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const emailInput = this.querySelector('.input');
        const email = emailInput.value;
        
        if (email) {
            // Here you would typically send the email to your backend
            alert('Thank you for subscribing! We\'ll keep you updated with our latest offers.');
            emailInput.value = '';
        }
    });
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Add loading states simulation (optional - for demonstration)
function simulateLoading() {
    const categoriesContainer = document.getElementById('categoriesGrid');
    const featuredContainer = document.getElementById('featuredProducts');
    const newArrivalsContainer = document.getElementById('newArrivalsProducts');
    const bestSellersContainer = document.getElementById('bestSellersProducts');
    const collectionsContainer = document.getElementById('collectionsGrid');
    
    // Show loading state briefly
    if (categoriesContainer) {
        categoriesContainer.innerHTML = '<div class="loading">Loading...</div>';
    }
    if (featuredContainer) {
        featuredContainer.innerHTML = '<div class="loading">Loading...</div>';
    }
    if (newArrivalsContainer) {
        newArrivalsContainer.innerHTML = '<div class="loading">Loading...</div>';
    }
    if (bestSellersContainer) {
        bestSellersContainer.innerHTML = '<div class="loading">Loading...</div>';
    }
    if (collectionsContainer) {
        collectionsContainer.innerHTML = '<div class="loading">Loading...</div>';
    }
    const faqContainer = document.getElementById('faqList');
    if (faqContainer) {
        faqContainer.innerHTML = '<div class="loading">Loading...</div>';
    }
    
    // Load content after a short delay
    setTimeout(() => {
        loadCategories();
        loadFeaturedProducts();
        loadNewArrivals();
        loadBestSellers();
        loadCollections();
        loadFaqItems();
    }, 500);
}

function loadFaqItems() {
    const container = document.getElementById('faqList');

    if (!container) return;

    if (!staticFaq.length) {
        container.innerHTML = `
            <div class="no-content">
                <p>We are curating the most asked questions.</p>
                <p class="text-sm">Check back soon for quick answers.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = staticFaq.map(item => `
        <div class="faq-item">
            <button class="faq-question" type="button" aria-expanded="false">
                <span class="faq-question-text">${item.question}</span>
                <span class="faq-icon" aria-hidden="true">
                    <svg class="faq-icon-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 5l3 3 3-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </span>
            </button>
            <div class="faq-answer" hidden>
                <p>${item.answer}</p>
            </div>
        </div>
    `).join('');

    initFaqAccordion();
}

function initFaqAccordion() {
    const items = document.querySelectorAll('.faq-item');

    if (!items.length) return;

    const openFaqItem = (faqItem) => {
        const button = faqItem.querySelector('.faq-question');
        const answer = faqItem.querySelector('.faq-answer');

        if (!button || !answer) return;

        faqItem.classList.add('open');
        button.setAttribute('aria-expanded', 'true');
        answer.removeAttribute('hidden');

        answer.style.maxHeight = '0px';
        // Force reflow so the browser acknowledges the starting height
        void answer.offsetHeight;

        const targetHeight = answer.scrollHeight;

        requestAnimationFrame(() => {
            answer.style.maxHeight = `${targetHeight}px`;
        });

        const handleTransitionEnd = (event) => {
            if (event.propertyName !== 'max-height') return;
            answer.style.maxHeight = 'none';
            answer.removeEventListener('transitionend', handleTransitionEnd);
        };

        answer.addEventListener('transitionend', handleTransitionEnd);
    };

    const closeFaqItem = (faqItem, { immediate = false } = {}) => {
        const button = faqItem.querySelector('.faq-question');
        const answer = faqItem.querySelector('.faq-answer');

        if (!button || !answer) return;

        if (!faqItem.classList.contains('open') && !immediate) {
            return;
        }

        faqItem.classList.remove('open');
        button.setAttribute('aria-expanded', 'false');

        if (immediate) {
            answer.setAttribute('hidden', '');
            answer.style.maxHeight = '';
            return;
        }

        // If the panel was set to 'none', capture the current height before collapsing
        if (answer.style.maxHeight === 'none' || answer.style.maxHeight === '') {
            answer.style.maxHeight = `${answer.scrollHeight}px`;
            // Force reflow to apply the captured height
            void answer.offsetHeight;
        }

        requestAnimationFrame(() => {
            answer.style.maxHeight = '0px';
        });

        const handleTransitionEnd = (event) => {
            if (event.propertyName !== 'max-height') return;
            answer.setAttribute('hidden', '');
            answer.style.maxHeight = '';
            answer.removeEventListener('transitionend', handleTransitionEnd);
        };

        answer.addEventListener('transitionend', handleTransitionEnd);
    };

    items.forEach(item => {
        const button = item.querySelector('.faq-question');

        if (!button) return;

        button.addEventListener('click', () => {
            const isOpen = item.classList.contains('open');

            if (isOpen) {
                closeFaqItem(item);
                return;
            }

            items.forEach(otherItem => {
                if (otherItem === item) return;
                closeFaqItem(otherItem);
            });

            openFaqItem(item);
        });
    });
}
