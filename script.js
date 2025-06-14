
// Data
const specials = [
    {
        id: 1,
        name: "Autumn Spice Latte",
        price: "₹499",
        image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=400&q=80",
        description: "Rich espresso with cinnamon, nutmeg, and steamed milk",
        badge: "Limited Time",
        rating: 4.8
    },
    {
        id: 2,
        name: "Artisan Croissant",
        price: "₹279",
        image: "https://images.unsplash.com/photo-1555507036-ab794f1ec35b?auto=format&fit=crop&w=400&q=80",
        description: "Buttery, flaky pastry baked fresh daily",
        badge: "Bestseller",
        rating: 4.9
    },
    {
        id: 3,
        name: "Cold Brew Float",
        price: "₹549",
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=400&q=80",
        description: "Cold brew coffee with vanilla ice cream",
        badge: "Chef's Choice",
        rating: 4.7
    },
    {
        id: 4,
        name: "Avocado Toast",
        price: "₹699",
        image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&w=400&q=80",
        description: "Smashed avocado on sourdough with cherry tomatoes",
        badge: "Healthy",
        rating: 4.6
    }
];

const menuItems = {
    'hot-drinks': [
        {
            id: 1,
            name: 'Classic Espresso',
            price: '₹299',
            description: 'Rich and bold espresso shot',
            image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=400&q=80',
            badges: ['Bestseller'],
            rating: 4.8,
            calories: 5
        },
        {
            id: 2,
            name: 'Cappuccino',
            price: '₹399',
            description: 'Espresso with steamed milk and foam',
            image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=400&q=80',
            badges: ['Popular'],
            rating: 4.7,
            calories: 120
        },
        {
            id: 3,
            name: 'Caramel Macchiato',
            price: '₹499',
            description: 'Espresso with vanilla syrup, steamed milk, and caramel',
            image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=400&q=80',
            badges: ['Sweet'],
            rating: 4.9,
            calories: 250
        }
    ],
    'cold-brews': [
        {
            id: 4,
            name: 'Iced Coffee',
            price: '₹279',
            description: 'Smooth cold brew served over ice',
            image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=400&q=80',
            badges: ['Refreshing'],
            rating: 4.6,
            calories: 15
        },
        {
            id: 5,
            name: 'Nitro Cold Brew',
            price: '₹399',
            description: 'Nitrogen-infused cold brew with velvety texture',
            image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=400&q=80',
            badges: ['Specialty', 'Bestseller'],
            rating: 4.8,
            calories: 5
        }
    ],
    'teas': [
        {
            id: 6,
            name: 'Earl Grey',
            price: '₹249',
            description: 'Classic black tea with bergamot',
            image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=400&q=80',
            badges: ['Classic'],
            rating: 4.5,
            calories: 0
        },
        {
            id: 7,
            name: 'Green Tea Latte',
            price: '₹349',
            description: 'Matcha green tea with steamed milk',
            image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=400&q=80',
            badges: ['Healthy', 'Vegan'],
            rating: 4.7,
            calories: 180
        }
    ],
    'snacks': [
        {
            id: 8,
            name: 'Avocado Toast',
            price: '₹699',
            description: 'Smashed avocado on sourdough with cherry tomatoes',
            image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&w=400&q=80',
            badges: ['Healthy', 'Vegan'],
            rating: 4.6,
            calories: 320
        },
        {
            id: 9,
            name: 'Grilled Sandwich',
            price: '₹599',
            description: 'Ham and cheese on artisan bread',
            image: 'https://images.unsplash.com/photo-1553909489-cd47e0ef937f?auto=format&fit=crop&w=400&q=80',
            badges: ['Hearty'],
            rating: 4.4,
            calories: 450
        }
    ],
    'pastries': [
        {
            id: 10,
            name: 'Chocolate Croissant',
            price: '₹299',
            description: 'Buttery croissant filled with dark chocolate',
            image: 'https://images.unsplash.com/photo-1555507036-ab794f1ec35b?auto=format&fit=crop&w=400&q=80',
            badges: ['Sweet', 'Bestseller'],
            rating: 4.9,
            calories: 380
        },
        {
            id: 11,
            name: 'Blueberry Muffin',
            price: '₹229',
            description: 'Fresh baked muffin with wild blueberries',
            image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=400&q=80',
            badges: ['Fresh Baked'],
            rating: 4.5,
            calories: 420
        }
    ]
};

const cartItems = [
    {
        id: 1,
        name: 'Cappuccino',
        price: 399,
        quantity: 2,
        image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=100&q=80'
    },
    {
        id: 2,
        name: 'Chocolate Croissant',
        price: 299,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1555507036-ab794f1ec35b?auto=format&fit=crop&w=100&q=80'
    }
];

// State
let currentSpecialIndex = 0;
let currentOrderType = 'pickup';

// Navigation
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.page-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show target section
    document.getElementById(sectionId).classList.add('active');
    
    // Update navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector(`[href="#${sectionId}"]`).classList.add('active');
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Specials Carousel
function loadSpecials() {
    const track = document.getElementById('specialsTrack');
    const dots = document.getElementById('specialsDots');
    
    track.innerHTML = specials.map(special => `
        <div class="special-card">
            <img src="${special.image}" alt="${special.name}" class="special-image">
            <div class="special-content">
                <div class="special-badges">
                    <span class="badge">${special.badge}</span>
                </div>
                <div class="special-header">
                    <h3 class="special-name">${special.name}</h3>
                    <span class="special-price">${special.price}</span>
                </div>
                <p class="special-description">${special.description}</p>
                <div class="special-footer">
                    <div class="special-rating">
                        <span>⭐ ${special.rating}</span>
                        <span>Available today</span>
                    </div>
                    <button class="btn btn-primary" onclick="addToCart(${special.id})">Add to Cart</button>
                </div>
            </div>
        </div>
    `).join('');
    
    dots.innerHTML = specials.map((_, index) => `
        <span class="dot ${index === 0 ? 'active' : ''}" onclick="goToSpecial(${index})"></span>
    `).join('');
    
    updateSpecialsView();
}

function nextSpecial() {
    currentSpecialIndex = (currentSpecialIndex + 1) % specials.length;
    updateSpecialsView();
}

function prevSpecial() {
    currentSpecialIndex = (currentSpecialIndex - 1 + specials.length) % specials.length;
    updateSpecialsView();
}

function goToSpecial(index) {
    currentSpecialIndex = index;
    updateSpecialsView();
}

function updateSpecialsView() {
    const track = document.getElementById('specialsTrack');
    const dots = document.querySelectorAll('#specialsDots .dot');
    
    track.style.transform = `translateX(-${currentSpecialIndex * 100}%)`;
    
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSpecialIndex);
    });
}

// Menu
function showMenuCategory(category) {
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Load menu items
    const menuContent = document.getElementById('menuContent');
    const items = menuItems[category] || [];
    
    menuContent.innerHTML = `
        <div class="menu-grid">
            ${items.map(item => `
                <div class="menu-card">
                    <img src="${item.image}" alt="${item.name}" class="menu-image">
                    <div class="menu-card-content">
                        <div class="special-badges">
                            ${item.badges.map(badge => `<span class="badge">${badge}</span>`).join('')}
                        </div>
                        <div class="menu-card-header">
                            <h3 class="menu-item-name">${item.name}</h3>
                            <span class="menu-item-price">${item.price}</span>
                        </div>
                        <p class="menu-item-description">${item.description}</p>
                        <div class="menu-card-footer">
                            <span class="menu-item-calories">${item.calories} cal</span>
                            <button class="btn btn-primary" onclick="addToCart(${item.id})">Add to Cart</button>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// Order
function setOrderType(type) {
    currentOrderType = type;
    
    // Update tab buttons
    document.querySelectorAll('.order-tab').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Update content based on order type
    const content = document.getElementById('orderTypeContent');
    
    if (type === 'pickup') {
        content.innerHTML = `
            <div class="form-group">
                <label>Pickup Time</label>
                <select class="form-control">
                    <option>ASAP (15-20 min)</option>
                    <option>30 minutes</option>
                    <option>1 hour</option>
                    <option>2 hours</option>
                </select>
            </div>
            <div class="pickup-location">
                <strong>📍 Pickup Location</strong>
                <p>123 Coffee Street, Brew City, BC 12345</p>
            </div>
        `;
    } else {
        content.innerHTML = `
            <div class="form-group">
                <label>Delivery Address</label>
                <input type="text" class="form-control" placeholder="Enter your full address">
            </div>
            <div class="form-group">
                <label>Delivery Time</label>
                <select class="form-control">
                    <option>ASAP (30-45 min)</option>
                    <option>1 hour</option>
                    <option>2 hours</option>
                    <option>3 hours</option>
                </select>
            </div>
            <div class="pickup-location">
                <strong>🚚 Delivery Fee: ₹50</strong>
                <p>Free delivery on orders over ₹500</p>
            </div>
        `;
    }
}

function loadCartItems() {
    const cartContainer = document.getElementById('cartItems');
    
    cartContainer.innerHTML = cartItems.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">₹${item.price.toFixed(2)} each</div>
            </div>
            <div class="cart-item-quantity">
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                <span>${item.quantity}</span>
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                <button class="quantity-btn" onclick="removeItem(${item.id})" style="margin-left: 10px; color: red;">×</button>
            </div>
        </div>
    `).join('');
    
    updateOrderTotal();
}

function updateQuantity(itemId, change) {
    const item = cartItems.find(item => item.id === itemId);
    if (item) {
        item.quantity = Math.max(0, item.quantity + change);
        if (item.quantity === 0) {
            removeItem(itemId);
        } else {
            loadCartItems();
        }
    }
}

function removeItem(itemId) {
    const index = cartItems.findIndex(item => item.id === itemId);
    if (index > -1) {
        cartItems.splice(index, 1);
        loadCartItems();
    }
}

function updateOrderTotal() {
    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.08;
    const tip = 0; // Could be made dynamic
    const deliveryFee = (currentOrderType === 'delivery' && subtotal < 500) ? 50 : 0;
    const total = subtotal + tax + tip + deliveryFee;
    
    document.getElementById('subtotal').textContent = `₹${subtotal.toFixed(2)}`;
    document.getElementById('tax').textContent = `₹${tax.toFixed(2)}`;
    document.getElementById('tip').textContent = `₹${tip.toFixed(2)}`;
    document.getElementById('finalTotal').textContent = `₹${total.toFixed(2)}`;
}

function addToCart(itemId) {
    // Find item in specials or menu items
    let item = specials.find(s => s.id === itemId);
    if (!item) {
        // Search in all menu categories
        for (const category of Object.values(menuItems)) {
            item = category.find(i => i.id === itemId);
            if (item) break;
        }
    }
    
    if (item) {
        const existingItem = cartItems.find(cartItem => cartItem.id === itemId);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cartItems.push({
                id: item.id,
                name: item.name,
                price: parseInt(item.price.replace('₹', '')),
                quantity: 1,
                image: item.image
            });
        }
        loadCartItems();
        alert(`${item.name} added to cart!`);
    }
}

function placeOrder() {
    if (cartItems.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    const total = document.getElementById('finalTotal').textContent;
    alert(`Order placed successfully! Total: ${total}\n\nThank you for choosing Brew & Bite!`);
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadSpecials();
    showMenuCategory('hot-drinks');
    loadCartItems();
    
    // Set up navigation click handlers
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('href').substring(1);
            showSection(sectionId);
        });
    });
    
    // Auto-rotate specials every 5 seconds
    setInterval(nextSpecial, 5000);
});

// Smooth scrolling for anchor links
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
