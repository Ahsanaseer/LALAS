// Static data to replace Supabase
const staticProducts = [
    {
        id: '1',
        name: 'Elegant Blazer',
        slug: 'elegant-blazer',
        description: 'Classic tailored blazer in premium wool',
        price: 299.99,
        image_url: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400',
        collection_id: '1',
        featured: true,
        in_stock: true,
        created_at: '2025-01-01T00:00:00Z'
    },
    {
        id: '2',
        name: 'Silk Dress',
        slug: 'silk-dress',
        description: 'Flowing silk dress for special occasions',
        price: 399.99,
        image_url: 'https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=400',
        collection_id: '2',
        featured: true,
        in_stock: true,
        created_at: '2025-01-01T00:00:00Z'
    },
    {
        id: '3',
        name: 'Cashmere Sweater',
        slug: 'cashmere-sweater',
        description: 'Luxurious cashmere sweater in neutral tones',
        price: 249.99,
        image_url: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400',
        collection_id: '1',
        featured: true,
        in_stock: false,
        created_at: '2025-01-01T00:00:00Z'
    },
    {
        id: '4',
        name: 'Leather Jacket',
        slug: 'leather-jacket',
        description: 'Premium leather jacket with modern cut',
        price: 599.99,
        image_url: 'https://images.pexels.com/photos/1306248/pexels-photo-1306248.jpeg?auto=compress&cs=tinysrgb&w=400',
        collection_id: '3',
        featured: true,
        in_stock: true,
        created_at: '2025-01-01T00:00:00Z'
    }
];

const staticCollections = [
    {
        id: '1',
        name: 'ESSENTIALS',
        slug: 'essentials',
        description: 'Timeless pieces for everyday elegance',
        image_url: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=600',
        created_at: '2025-01-01T00:00:00Z'
    },
    {
        id: '2',
        name: 'EVENING',
        slug: 'evening',
        description: 'Sophisticated pieces for special occasions',
        image_url: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600',
        created_at: '2025-01-01T00:00:00Z'
    },
    {
        id: '3',
        name: 'MODERN',
        slug: 'modern',
        description: 'Contemporary designs for the modern individual',
        image_url: 'https://images.pexels.com/photos/1306248/pexels-photo-1306248.jpeg?auto=compress&cs=tinysrgb&w=600',
        created_at: '2025-01-01T00:00:00Z'
    }
];

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = mobileMenuBtn.querySelector('.menu-icon');
    const closeIcon = mobileMenuBtn.querySelector('.close-icon');

    mobileMenuBtn.addEventListener('click', function() {
        const isOpen = !mobileMenu.classList.contains('hidden');
        
        if (isOpen) {
            mobileMenu.classList.add('hidden');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        } else {
            mobileMenu.classList.remove('hidden');
            menuIcon.classList.add('hidden');
            closeIcon.classList.remove('hidden');
        }
    });

    // Close mobile menu when clicking on links
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        });
    });

    // Load featured products
    loadFeaturedProducts();
    
    // Load collections
    loadCollections();
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

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
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
});

// Add loading states simulation (optional - for demonstration)
function simulateLoading() {
    const featuredContainer = document.getElementById('featuredProducts');
    const collectionsContainer = document.getElementById('collectionsGrid');
    
    // Show loading state briefly
    if (featuredContainer) {
        featuredContainer.innerHTML = '<div class="loading">Loading...</div>';
    }
    
    if (collectionsContainer) {
        collectionsContainer.innerHTML = '<div class="loading">Loading...</div>';
    }
    
    // Load content after a short delay
    setTimeout(() => {
        loadFeaturedProducts();
        loadCollections();
    }, 500);
}

// Initialize with loading simulation
document.addEventListener('DOMContentLoaded', function() {
    simulateLoading();
});
