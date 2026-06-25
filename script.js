// ============================================
// BLOOM & GLOW - Complete Updated JavaScript
// All interactive features using DOM manipulation
// ============================================

// ============================================
// 1. PRODUCT DATA (UPDATED WITH NEW CATEGORIES)
// ============================================
const products = [
  // ROOM DECORATION
  { 
    id: 1, 
    name: 'Wavy LED Full-Length Mirror', 
    category: 'Room Decoration', 
    price: 89.99, 
    rating: 4.9, 
    emoji: '🪞',
    image: 'room decoration/wavy-led-mirror.jpg',
    description: 'Irregular wavy-shaped full-length mirror with warm LED backlight for a soft glow.',
    stock: 18,
    isFeatured: true
  },
  { 
    id: 2, 
    name: 'Tree-Shaped Bookshelf', 
    category: 'Room Decoration', 
    price: 32.99, 
    rating: 4.6, 
    emoji: '🌳',
    image: 'room decoration/tree-bookshelf.jpg',
    description: 'Cute tree-shaped tiered shelf for books and decor, available in large and small sizes.',
    stock: 29
  },
  { 
    id: 3, 
    name: 'Clear Drawer Organizer Set', 
    category: 'Room Decoration', 
    price: 21.99, 
    rating: 4.7, 
    emoji: '🗄️',
    image: 'room decoration/drawer-organizer-set.jpg',
    description: 'Stackable clear drawer divider set, perfect for keeping makeup and stationery tidy.',
    stock: 56
  },
  { 
    id: 4, 
    name: 'Floating Wall Ladder Shelf', 
    category: 'Room Decoration', 
    price: 39.99, 
    rating: 4.8, 
    emoji: '📚',
    image: 'room decoration/lack-wall-shelf.jpg',
    description: 'Minimalist tall wall-mounted shelf with multiple tiers for books and trinkets.',
    stock: 24
  },
  { 
    id: 32, 
    name: '4-Tier Rolling Storage Cart', 
    category: 'Room Decoration', 
    price: 44.99, 
    rating: 4.7, 
    emoji: '🛒',
    image: 'room decoration/rolling-storage-cart.jpg',
    description: 'Mesh rolling storage cart with 4 tiers, available in pink or white, great for craft supplies.',
    stock: 22
  },
  { 
    id: 33, 
    name: 'Bubble Vase with Faux Tulips', 
    category: 'Room Decoration', 
    price: 24.99, 
    rating: 4.9, 
    emoji: '🌷',
    image: 'room decoration/tulip-vase.jpg',
    description: 'Sculptural ceramic bubble vase paired with soft pink faux tulip stems.',
    stock: 33
  },
  { 
    id: 34, 
    name: 'Pink LED Desk Lamp', 
    category: 'Room Decoration', 
    price: 22.50, 
    rating: 4.6, 
    emoji: '💡',
    image: 'room decoration/led-desk-lamp.jpg',
    description: 'Adjustable pink LED desk lamp with soft, eye-friendly lighting for late-night study.',
    stock: 40
  },
  { 
    id: 35, 
    name: 'Pink Votive Candle Set', 
    category: 'Room Decoration', 
    price: 16.99, 
    rating: 4.8, 
    emoji: '🕯️',
    image: 'room decoration/pink-votive-candles.jpg',
    description: 'Set of 5 hand-poured pink votive candles in glass holders, perfect for cozy ambiance.',
    stock: 50
  },
  { 
    id: 36, 
    name: 'Foldable Bed Laptop Tray', 
    category: 'Room Decoration', 
    price: 27.99, 
    rating: 4.7, 
    emoji: '💻',
    image: 'room decoration/bed-laptop-tray.jpg',
    description: 'Foldable lap desk with cup holder and phone slot, perfect for studying or working in bed.',
    stock: 37
  },
  { 
    id: 37, 
    name: 'Cotton Rope Storage Basket', 
    category: 'Room Decoration', 
    price: 23.99, 
    rating: 4.8, 
    emoji: '🧺',
    image: 'room decoration/cotton-rope-basket.jpg',
    description: 'Soft woven cotton rope storage basket with handles, great for blankets or laundry.',
    stock: 29
  },

  // POTTERIE
  { 
    id: 5, 
    name: 'DAS Air-Dry Modelling Clay (500g)', 
    category: 'Potterie', 
    price: 12.99, 
    rating: 4.9, 
    emoji: '🏺',
    image: 'potterie/das-modelling-clay.jpg',
    description: 'Soft, easy-to-shape air-dry modelling clay, 500g block, available in white or terracotta.',
    stock: 65
  },
  { 
    id: 6, 
    name: 'Clay Sculpting Tool Set (16-Piece)', 
    category: 'Potterie', 
    price: 15.99, 
    rating: 4.8, 
    emoji: '🛠️',
    image: 'potterie/clay-tool-set-16pc.jpg',
    description: 'Double-sided wooden and stainless steel clay sculpting tools, great for detail work.',
    stock: 48
  },
  { 
    id: 7, 
    name: 'Clay Sculpting Tool Set (19-Piece)', 
    category: 'Potterie', 
    price: 19.99, 
    rating: 4.7, 
    emoji: '🧰',
    image: 'potterie/clay-tool-set-19pc.jpg',
    description: '19-piece pottery tool kit with sponge, scrapers, ribbon tools, and wire loop tools.',
    stock: 39
  },
  { 
    id: 8, 
    name: 'Clay Sculpting Tool Set (41-Piece)', 
    category: 'Potterie', 
    price: 27.50, 
    rating: 4.8, 
    emoji: '🪵',
    image: 'potterie/clay-tool-set-41pc.jpg',
    description: 'Complete 41-piece pottery and clay sculpting kit with carrying case for beginners to pros.',
    stock: 30
  },

  // PAINTING DIAMOND
  { 
    id: 9, 
    name: 'Moonlit Blossoms Diamond Painting', 
    category: 'Painting Diamond', 
    price: 38.99, 
    rating: 4.9, 
    emoji: '💎',
    image: 'diamond-painting/diamond-painting-1.jpg',
    description: 'Full drill 5D diamond painting kit featuring cherry blossoms under a glowing moon.',
    stock: 38
  },
  { 
    id: 10, 
    name: 'Pagoda & Blossoms Diamond Painting', 
    category: 'Painting Diamond', 
    price: 54.99, 
    rating: 4.8, 
    emoji: '🖼️',
    image: 'diamond-painting/diamond-painting-2.jpg',
    description: 'Elegant diamond painting of a misty pagoda surrounded by pink florals.',
    stock: 12
  },
  { 
    id: 11, 
    name: 'Sweet Treats Diamond Painting', 
    category: 'Painting Diamond', 
    price: 15.50, 
    rating: 4.5, 
    emoji: '🔧',
    image: 'diamond-painting/diamond-painting-3.jpg',
    description: 'Playful diamond painting kit featuring a cozy spread of desserts and treats.',
    stock: 89
  },
  { 
    id: 12, 
    name: 'Seashells & Starfish Diamond Painting', 
    category: 'Painting Diamond', 
    price: 22.00, 
    rating: 4.4, 
    emoji: '🖼️',
    image: 'diamond-painting/diamond-painting-4.jpg',
    description: 'Coastal-themed diamond painting with shimmering shells and starfish on the sand.',
    stock: 43
  },
  { 
    id: 25, 
    name: 'Ocean Wave Diamond Painting', 
    category: 'Painting Diamond', 
    price: 41.50, 
    rating: 4.8, 
    emoji: '🌊',
    image: 'diamond-painting/diamond-painting-5.jpg',
    description: 'Dreamy diamond painting of a rolling wave paired with delicate starfish and shells.',
    stock: 25
  },
  { 
    id: 26, 
    name: 'Tropical Shells & Florals Diamond Painting', 
    category: 'Painting Diamond', 
    price: 36.00, 
    rating: 4.7, 
    emoji: '🐚',
    image: 'diamond-painting/diamond-painting-6.jpg',
    description: 'Vibrant diamond painting of seashells nestled among tropical flowers in turquoise water.',
    stock: 31
  },
  { 
    id: 27, 
    name: 'Rose in Glass Dome Diamond Painting', 
    category: 'Painting Diamond', 
    price: 48.99, 
    rating: 4.9, 
    emoji: '🌹',
    image: 'diamond-painting/diamond-painting-7.jpg',
    description: 'Enchanting diamond painting of a single rose preserved under a glass dome at night.',
    stock: 19
  },

  // PAINTING ESSENTIALS
  { 
    id: 13, 
    name: 'Studio Acrylic Paint Set (48 Colors)', 
    category: 'Painting Essentials', 
    price: 29.99, 
    rating: 4.8, 
    emoji: '🎨',
    image: 'painting essentiels/acrylic-set.jpg',
    description: '48 vibrant studio acrylic paint tubes, high-quality pigments for every project.',
    stock: 62
  },
  { 
    id: 14, 
    name: 'Professional Paintbrush Set (24-Piece)', 
    category: 'Painting Essentials', 
    price: 34.50, 
    rating: 4.9, 
    emoji: '🖌️',
    image: 'painting essentiels/brushes-set.jpg',
    description: '24 professional paintbrushes in assorted sizes with a sleek travel roll-up case.',
    stock: 34
  },
  { 
    id: 15, 
    name: 'Faber-Castell Luxury Art Studio Set', 
    category: 'Painting Essentials', 
    price: 25.00, 
    rating: 4.7, 
    emoji: '🖼️',
    image: 'painting essentiels/faber-castell-box.jpg',
    description: 'Premium wooden Faber-Castell collection box featuring pencils, pastels, and more.',
    stock: 71
  },
  { 
    id: 16, 
    name: 'Fineliner Drawing Pen Set (12-Piece)', 
    category: 'Painting Essentials', 
    price: 18.99, 
    rating: 4.6, 
    emoji: '🖌️',
    image: 'painting essentiels/fineliner.jpg',
    description: '12 fineliner drawing pens in varying tip sizes, from 0.20mm to 3.0mm plus a brush tip.',
    stock: 95
  },
  { 
    id: 28, 
    name: 'Alcohol Marker Set (262 Colors)', 
    category: 'Painting Essentials', 
    price: 59.99, 
    rating: 4.8, 
    emoji: '🖍️',
    image: 'painting essentiels/markers.jpg',
    description: 'Huge 262-color alcohol-based marker set with carrying case, perfect for illustration and anime art.',
    stock: 21
  },
  { 
    id: 29, 
    name: 'Faber-Castell Polychromos Colored Pencil Set (120-Piece)', 
    category: 'Painting Essentials', 
    price: 89.99, 
    rating: 4.9, 
    emoji: '✏️',
    image: 'painting essentiels/pencils-120.jpg',
    description: '120 Faber-Castell Polychromos artist-quality colored pencils in a two-tier wooden drawer set.',
    stock: 14
  },

  // CROCHET
  { 
    id: 17, 
    name: 'Loop By Me Soft Acrylic Yarn', 
    category: 'Crochet', 
    price: 5.99, 
    rating: 4.9, 
    emoji: '🧶',
    image: 'crochet/loop-by-me-yarn.jpg',
    description: 'Soft pastel acrylic yarn skeins, perfect for amigurumi and beginner projects.',
    stock: 80
  },
  { 
    id: 18, 
    name: 'Velvet Chenille Yarn Bundle', 
    category: 'Crochet', 
    price: 32.99, 
    rating: 4.8, 
    emoji: '🧵',
    image: 'crochet/chenille-yarn-bundle.jpg',
    description: 'Plush chenille yarn bundle in 6 dreamy pastel colors, ideal for cozy blankets and plushies.',
    stock: 27
  },
  { 
    id: 30, 
    name: 'Braided T-Shirt Yarn', 
    category: 'Crochet', 
    price: 14.50, 
    rating: 4.7, 
    emoji: '🎀',
    image: 'crochet/tshirt-yarn.jpg',
    description: 'Thick braided t-shirt yarn, great for chunky bags, baskets, and rugs.',
    stock: 36
  },
  { 
    id: 19, 
    name: 'Crochet Hook Set with Case', 
    category: 'Crochet', 
    price: 24.99, 
    rating: 4.8, 
    emoji: '🪡',
    image: 'crochet/crochet-hook-set.jpg',
    description: '10 ergonomic crochet hooks (sizes 2.0mm-10mm) with scissors and a pretty pink travel case.',
    stock: 53
  },

  // BOOKNOTES
  { 
    id: 21, 
    name: 'Floral Fabric Cover Journal', 
    category: 'Booknotes', 
    price: 22.99, 
    rating: 4.8, 
    emoji: '📓',
    image: 'booknotes/floral-fabric-journal.jpg',
    description: 'Soft fabric-bound journal with delicate floral print, lace trim, and a "My Garden" label.',
    stock: 64
  },
  { 
    id: 22, 
    name: '"My Garden" Pouch Journal Set', 
    category: 'Booknotes', 
    price: 26.50, 
    rating: 4.7, 
    emoji: '📔',
    image: 'booknotes/my-garden-pouch-journal.jpg',
    description: 'Fabric journal and matching ribbon-tied pouch, finished with delicate lace edges.',
    stock: 38
  },
  { 
    id: 23, 
    name: 'Pink Diario Lock Journal', 
    category: 'Booknotes', 
    price: 24.99, 
    rating: 4.9, 
    emoji: '🔐',
    image: 'booknotes/pink-diario-lock-journal.jpg',
    description: 'Adorable pink diary with heart-shaped lock, cute stickers, and decorative bows.',
    stock: 47
  },
  { 
    id: 24, 
    name: 'Summer Sketchbook', 
    category: 'Booknotes', 
    price: 18.00, 
    rating: 4.9, 
    emoji: '🎨',
    image: 'booknotes/summer-sketchbook.jpg',
    description: 'Spiral-bound sketchbook with a hand-painted, collaged summer-themed cover.',
    stock: 32
  },
  { 
    id: 31, 
    name: 'Vintage Lace Junk Journal', 
    category: 'Booknotes', 
    price: 29.99, 
    rating: 4.8, 
    emoji: '🎀',
    image: 'booknotes/scrapbook-junk-journal.jpg',
    description: 'Handmade scrapbook-style journal with lace, ribbon, and vintage paper collage details.',
    stock: 18
  }
];

// ===== CART STATE =====
let cart = [];
let favorites = new Set();

// ===== DOM REFERENCES =====
const productGrid = document.getElementById('productGrid');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const cartCount = document.getElementById('cartCount');
const cartOverlay = document.getElementById('cartOverlay');
const cartItems = document.getElementById('cartItems');
const cartTotalPrice = document.getElementById('cartTotalPrice');
const closeCartBtn = document.getElementById('closeCartBtn');
const closeCart = document.getElementById('closeCart');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const cartToggle = document.getElementById('cartToggle');
const favCount = document.getElementById('favCount');
const favOverlay = document.getElementById('favOverlay');
const favItems = document.getElementById('favItems');
const favToggle = document.getElementById('favToggle');
const closeFav = document.getElementById('closeFav');
const closeFavBtn = document.getElementById('closeFavBtn');
// FIX: reference to the inline "My Favorites" section grid (was previously never rendered into)
const favoritesGrid = document.getElementById('favoritesGrid');

// ============================================
// 2. CATEGORIES DATA (UPDATED)
// ============================================
const categories = [
  { 
    name: 'Room Decoration', 
    icon: 'fa-bed', 
    sub: 'Fairy Lights · Posters · Dreamcatchers · Decor',
    emoji: '🏠',
    color: '#f8e5b4'
  },
  { 
    name: 'Potterie', 
    icon: 'fa-paint-brush', 
    sub: 'Clay Pots · Ceramics · Mugs · Planters',
    emoji: '🏺',
    color: '#fad6b3'
  },
  { 
    name: 'Painting Diamond', 
    icon: 'fa-gem', 
    sub: '5D Kits · Custom Designs · Accessories',
    emoji: '💎',
    color: '#d4b8e0'
  },
  { 
    name: 'Painting Essentials', 
    icon: 'fa-palette', 
    sub: 'Acrylic · Watercolor · Brushes · Canvases',
    emoji: '🎨',
    color: '#b5d8f7'
  },
  { 
    name: 'Crochet', 
    icon: 'fa-hands', 
    sub: 'Yarn · Patterns · Hooks · Finished Pieces',
    emoji: '🧶',
    color: '#c8e6c9'
  },
  { 
    name: 'Booknotes', 
    icon: 'fa-book-open', 
    sub: 'Journals · Sticky Notes · Bookmarks · Planners',
    emoji: '📝',
    color: '#f8b4c8'
  }
];

// ============================================
// 3. RENDER CATEGORIES
// ============================================
function renderCategories() {
  const grid = document.getElementById('categoryGrid');
  if (!grid) return;
  
  grid.innerHTML = categories.map(cat => {
    const count = products.filter(p => p.category === cat.name).length;
    return `
      <div class="category-card" data-category="${cat.name}" style="border-bottom: 4px solid ${cat.color};">
        <i class="fas ${cat.icon}"></i>
        <h4>${cat.name}</h4>
        <p>${cat.sub}</p>
        <span class="cat-tag">${count} items</span>
      </div>
    `;
  }).join('');

  // Add click event to filter products by category
  document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', function() {
      const category = this.dataset.category;
      categoryFilter.value = category;
      filterProducts();
      document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
      showToast(`Showing ${category} products 🌸`, 'success');
    });
  });
}

// ============================================
// 4. PRODUCTS - RENDER, SEARCH, FILTER
// ============================================
// FIX: extracted into a reusable function so both the Shop grid and the
// "My Favorites" grid render identical product cards with working buttons.
function buildProductCardHTML(product) {
  return `
    <div class="product-card" data-id="${product.id}" data-category="${product.category}">
      <div class="product-img">${
        product.image
          ? `<img src="${product.image}" alt="${product.name}" loading="lazy">`
          : product.emoji
      }</div>
      <div class="product-name">${product.name}</div>
      <div class="product-category">${product.category}</div>
      <div class="product-price">${product.price.toFixed(2)} Dt</div>
      <div class="product-rating">${'★'.repeat(Math.floor(product.rating))}${product.rating % 1 >= 0.5 ? '½' : ''}</div>
      ${product.stock < 10 ? `<span class="stock-badge">Only ${product.stock} left!</span>` : ''}
      <div class="product-actions">
        <button class="add-btn" data-id="${product.id}">
          <span class="add-btn-text">+ Add to Cart</span>
        </button>
        <button class="fav-btn ${favorites.has(product.id) ? 'active' : ''}" data-id="${product.id}">
          <i class="fas fa-heart"></i>
        </button>
      </div>
    </div>
  `;
}

// Attaches add-to-cart and favorite-toggle listeners to all product cards
// currently inside the given container element.
function attachProductCardEvents(container) {
  if (!container) return;

  container.querySelectorAll('.add-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = parseInt(e.currentTarget.dataset.id);
      addToCart(id);
    });
  });

  container.querySelectorAll('.fav-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = parseInt(e.currentTarget.dataset.id);
      toggleFavorite(id);
    });
  });
}

function renderProducts(productsToRender = products) {
  if (!productGrid) return;
  
  if (productsToRender.length === 0) {
    productGrid.innerHTML = `
      <div class="no-products">
        <i class="fas fa-search" style="font-size: 3rem; color: #d4b8e0;"></i>
        <h3>No products found</h3>
        <p>Try adjusting your search or filter</p>
      </div>
    `;
    return;
  }
  
  productGrid.innerHTML = productsToRender.map(buildProductCardHTML).join('');

  // Attach event listeners to new buttons
  attachProductCardEvents(productGrid);
}

function filterProducts() {
  const searchTerm = searchInput.value.toLowerCase().trim();
  const category = categoryFilter.value;
  
  let filtered = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm) || 
                          product.category.toLowerCase().includes(searchTerm);
    const matchesCategory = category === 'all' || product.category === category;
    return matchesSearch && matchesCategory;
  });
  
  renderProducts(filtered);
}

function populateCategoryFilter() {
  const categories = [...new Set(products.map(p => p.category))];
  const filter = document.getElementById('categoryFilter');
  
  // Clear existing options except 'all'
  filter.innerHTML = '<option value="all">All categories</option>';
  
  categories.forEach(cat => {
    const option = document.createElement('option');
    option.value = cat;
    option.textContent = cat;
    filter.appendChild(option);
  });
}

// ============================================
// 5. SHOPPING CART
// ============================================
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  // Check stock
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    if (existing.quantity >= product.stock) {
      showToast('Sorry, no more stock available! 😅', 'error');
      return;
    }
    existing.quantity += 1;
  } else {
    if (product.stock === 0) {
      showToast('This product is out of stock! 😅', 'error');
      return;
    }
    cart.push({ ...product, quantity: 1 });
  }
  
  updateCartUI();
  showToast(`✨ Added ${product.name} to cart!`, 'success');
}

function removeFromCart(productId) {
  const product = cart.find(item => item.id === productId);
  cart = cart.filter(item => item.id !== productId);
  updateCartUI();
  if (product) {
    showToast(`Removed ${product.name} from cart`, 'error');
  }
}

function updateCartUI() {
  // Update counter
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalItems;
  
  // Update cart panel
  renderCartItems();
}

function renderCartItems() {
  if (!cartItems) return;
  
  if (cart.length === 0) {
    cartItems.innerHTML = `
      <div class="empty-cart">
        <i class="fas fa-shopping-bag" style="font-size: 3rem; color: #d4b8e0;"></i>
        <p style="color: #9a8a97; text-align: center; padding: 20px 0;">Your cart is empty 🌸</p>
        <p style="color: #b5a5b0; font-size: 0.9rem; text-align: center;">Start adding some goodies!</p>
      </div>
    `;
    cartTotalPrice.textContent = '0.00';
    return;
  }
  
  cartItems.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-info">
        <div class="cart-item-name">${item.emoji} ${item.name}</div>
        <div class="qty-controls" style="margin-top: 8px;">
          <button class="qty-btn" data-id="${item.id}" data-change="-1">−</button>
          <span class="qty-value">${item.quantity}</span>
          <button class="qty-btn" data-id="${item.id}" data-change="1">+</button>
        </div>
      </div>
      <div style="display: flex; align-items: center; gap: 12px;">
        <span class="cart-item-price">${(item.price * item.quantity).toFixed(2)} Dt</span>
        <button class="cart-item-remove" data-id="${item.id}">✕</button>
      </div>
    </div>
  `).join('');
  
  // Attach quantity change events
  document.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = parseInt(e.target.dataset.id);
      const change = parseInt(e.target.dataset.change);
      updateQuantity(id, change);
    });
  });
  
  // Attach remove events
  document.querySelectorAll('.cart-item-remove').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = parseInt(e.target.dataset.id);
      removeFromCart(id);
    });
  });
  
  // Update total
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  cartTotalPrice.textContent = total.toFixed(2);
}

function updateQuantity(productId, change) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  
  const newQuantity = item.quantity + change;
  if (newQuantity <= 0) {
    removeFromCart(productId);
    return;
  }
  
  const product = products.find(p => p.id === productId);
  if (newQuantity > product.stock) {
    showToast('Not enough stock available! 😅', 'error');
    return;
  }
  
  item.quantity = newQuantity;
  updateCartUI();
}

// ============================================
// 6. FAVORITES
// ============================================
function toggleFavorite(productId) {
  if (favorites.has(productId)) {
    favorites.delete(productId);
    showToast('Removed from favorites 💔', 'error');
  } else {
    favorites.add(productId);
    showToast('Added to favorites ❤️', 'success');
  }

  // FIX: instantly flip the heart icon's "active" state on every matching
  // button on the page (shop grid, favorites grid, etc.) instead of doing a
  // full filterProducts() re-render. This is what makes the click feel
  // immediate and also keeps multiple instances of the same product in sync.
  document.querySelectorAll(`.fav-btn[data-id="${productId}"]`).forEach(btn => {
    btn.classList.toggle('active', favorites.has(productId));
  });

  updateFavUI();
}

function updateFavUI() {
  // FIX: counter always reflects the exact current size of the favorites set,
  // so it shows 0 when empty and increments/decrements automatically.
  if (favCount) {
    favCount.textContent = favorites.size;
  }
  renderFavoriteItems();
  renderFavoritesGrid();
}

function renderFavoriteItems() {
  if (!favItems) return;

  const favProducts = products.filter(p => favorites.has(p.id));

  if (favProducts.length === 0) {
    favItems.innerHTML = `
      <div class="empty-cart">
        <i class="fas fa-heart" style="font-size: 3rem; color: #d4b8e0;"></i>
        <p style="color: #9a8a97; text-align: center; padding: 20px 0;">No favorites yet 🌸</p>
        <p style="color: #b5a5b0; font-size: 0.9rem; text-align: center;">Tap the heart on a product to save it here!</p>
      </div>
    `;
    return;
  }

  favItems.innerHTML = favProducts.map(item => `
    <div class="cart-item">
      <div class="cart-item-info">
        <div class="cart-item-name">${item.emoji} ${item.name}</div>
        <span class="cart-item-price" style="display: block; margin-top: 6px;">${item.price.toFixed(2)} Dt</span>
      </div>
      <div style="display: flex; align-items: center; gap: 12px;">
        <button class="add-btn fav-add-btn" data-id="${item.id}">
          <span class="add-btn-text">+ Add to Cart</span>
        </button>
        <button class="cart-item-remove" data-id="${item.id}" title="Remove from favorites">✕</button>
      </div>
    </div>
  `).join('');

  // Add to cart from favorites panel
  favItems.querySelectorAll('.fav-add-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const id = parseInt(this.dataset.id);
      addToCart(id);
    });
  });

  // Remove from favorites panel
  favItems.querySelectorAll('.cart-item-remove').forEach(btn => {
    btn.addEventListener('click', function() {
      const id = parseInt(this.dataset.id);
      toggleFavorite(id);
    });
  });
}

// FIX: NEW — renders the inline "My Favorites" section on the page itself
// (id="favoritesGrid" in index.html), reusing the same product card markup
// and button wiring as the Shop grid so hearts/add-to-cart work identically.
function renderFavoritesGrid() {
  if (!favoritesGrid) return;

  const favProducts = products.filter(p => favorites.has(p.id));

  if (favProducts.length === 0) {
    favoritesGrid.innerHTML = `
      <div class="no-products">
        <i class="fas fa-heart" style="font-size: 3rem; color: #d4b8e0;"></i>
        <h3>No favorites yet</h3>
        <p>Tap the heart icon on any product to save it here 🌸</p>
      </div>
    `;
    return;
  }

  favoritesGrid.innerHTML = favProducts.map(buildProductCardHTML).join('');
  attachProductCardEvents(favoritesGrid);
}

// ============================================
// 7. TOAST NOTIFICATIONS
// ============================================
function showToast(message, type = 'success') {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  const icon = type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle';
  toast.innerHTML = `<i class="fas ${icon}"></i> ${message}`;
  
  container.appendChild(toast);
  
  // Auto remove after 3 seconds
  setTimeout(() => {
    toast.classList.add('fade-out');
    setTimeout(() => {
      if (toast.parentNode) {
        toast.remove();
      }
    }, 300);
  }, 3000);
}

// ============================================
// 8. GLOW CORNER (Wellness & Inspiration)
// ============================================
const glowData = [
  { title: 'Study Tips', icon: 'fa-lightbulb', desc: 'Pomodoro, active recall, and spaced repetition for better focus.' },
  { title: 'Self-Care Tips', icon: 'fa-heart', desc: 'Prioritize rest, hydration, and daily moments of joy.' },
  { title: 'Reading Recs', icon: 'fa-book', desc: 'Cozy fantasy, self-discovery memoirs, and empowering fiction.' },
  { title: 'Productivity', icon: 'fa-clock', desc: 'Plan your week, set micro-goals, and celebrate small wins.' }
];

function renderGlowCorner() {
  const grid = document.getElementById('glowGrid');
  if (!grid) return;
  
  grid.innerHTML = glowData.map(item => `
    <div class="glow-card">
      <i class="fas ${item.icon}"></i>
      <h4>${item.title}</h4>
      <p>${item.desc}</p>
    </div>
  `).join('');
}

// ============================================
// 9. GIRL OF THE MONTH
// ============================================
function renderGirlOfMonth() {
  const card = document.getElementById('girlCard');
  if (!card) return;
  
  card.innerHTML = `
    <div class="girl-avatar">👩‍🎨</div>
    <div class="girl-info">
      <h3>Maya Chen</h3>
      <div class="role">✨ Artist & Creative Entrepreneur</div>
      <p>Maya started her handmade jewelry brand at 19, combining cultural heritage with modern design. She now mentors young creatives worldwide.</p>
      <div class="quote">"Creativity is the courage to let your inner world shine."</div>
    </div>
  `;
}

// ============================================
// 10. CONTACT FORM VALIDATION
// ============================================
const contactForm = document.getElementById('contactForm');
const formFeedback = document.getElementById('formFeedback');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const message = document.getElementById('contactMsg').value.trim();
    
    if (!name || !email || !message) {
      formFeedback.textContent = '❌ Please fill in all fields.';
      formFeedback.style.color = '#e06080';
      return;
    }
    
    if (!email.includes('@') || !email.includes('.')) {
      formFeedback.textContent = '❌ Please enter a valid email address.';
      formFeedback.style.color = '#e06080';
      return;
    }
    
    formFeedback.textContent = '✅ Thank you! We\'ll get back to you soon. 💌';
    formFeedback.style.color = '#4a7a5a';
    showToast('Message sent successfully! 💌', 'success');
    this.reset();
  });
}

// ============================================
// 11. NEWSLETTER
// ============================================
const newsletterBtn = document.getElementById('newsletterBtn');
const newsletterEmail = document.getElementById('newsletterEmail');

if (newsletterBtn) {
  newsletterBtn.addEventListener('click', function() {
    const email = newsletterEmail.value.trim();
    if (!email || !email.includes('@')) {
      showToast('Please enter a valid email address.', 'error');
      return;
    }
    showToast('✅ You\'re subscribed to the Bloom & Glow newsletter!', 'success');
    newsletterEmail.value = '';
  });
}

// ============================================
// 12. NAVBAR - HAMBURGER MENU
// ============================================
if (hamburger) {
  hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('open');
  });
}

// Close mobile menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// ============================================
// 13. CART OVERLAY
// ============================================
// Open cart from nav icon
if (cartToggle) {
  cartToggle.addEventListener('click', function(e) {
    e.preventDefault();
    cartOverlay.classList.add('open');
    renderCartItems();
  });
}

// Close cart
if (closeCartBtn) {
  closeCartBtn.addEventListener('click', function() {
    cartOverlay.classList.remove('open');
  });
}

if (closeCart) {
  closeCart.addEventListener('click', function() {
    cartOverlay.classList.remove('open');
  });
}

// Close cart on overlay click
if (cartOverlay) {
  cartOverlay.addEventListener('click', function(e) {
    if (e.target === this) {
      this.classList.remove('open');
    }
  });
}

// ============================================
// 13b. FAVORITES OVERLAY
// ============================================
// Open favorites from nav icon
if (favToggle) {
  favToggle.addEventListener('click', function(e) {
    e.preventDefault();
    favOverlay.classList.add('open');
    renderFavoriteItems();
  });
}

// Close favorites
if (closeFavBtn) {
  closeFavBtn.addEventListener('click', function() {
    favOverlay.classList.remove('open');
  });
}

if (closeFav) {
  closeFav.addEventListener('click', function() {
    favOverlay.classList.remove('open');
  });
}

// Close favorites on overlay click
if (favOverlay) {
  favOverlay.addEventListener('click', function(e) {
    if (e.target === this) {
      this.classList.remove('open');
    }
  });
}

// ============================================
// 14. HERO BUTTONS
// ============================================
document.getElementById('shopNowBtn')?.addEventListener('click', function() {
  document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('exploreCatBtn')?.addEventListener('click', function() {
  document.getElementById('categories').scrollIntoView({ behavior: 'smooth' });
});

// ============================================
// 15. CHECKOUT BUTTON
// ============================================
document.getElementById('checkoutBtn')?.addEventListener('click', function() {
  if (cart.length === 0) {
    showToast('Your cart is empty! 🌸', 'error');
    return;
  }
  
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  showToast(`🛍️ Order placed! Total: ${total.toFixed(2)} Dt`, 'success');
  
  // Clear cart after "purchase"
  cart = [];
  updateCartUI();
  cartOverlay.classList.remove('open');
});

// ============================================
// 16. KEYBOARD SHORTCUT: ESC to close cart
// ============================================
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && cartOverlay.classList.contains('open')) {
    cartOverlay.classList.remove('open');
  }
  if (e.key === 'Escape' && favOverlay && favOverlay.classList.contains('open')) {
    favOverlay.classList.remove('open');
  }
});

// ============================================
// 17. INITIALIZATION
// ============================================
function init() {
  // FIX: load favorites from localStorage FIRST, before rendering any product
  // cards. Previously this loaded after renderProducts(), so on page refresh
  // every heart icon would render as "not favorited" even if it was saved.
  const savedFavorites = localStorage.getItem('bloomGlowFavorites');
  if (savedFavorites) {
    favorites = new Set(JSON.parse(savedFavorites));
  }

  renderCategories();
  renderProducts();
  populateCategoryFilter();
  renderGlowCorner();
  renderGirlOfMonth();
  updateCartUI();
  updateFavUI();
  
  // Load cart from localStorage
  const savedCart = localStorage.getItem('bloomGlowCart');
  if (savedCart) {
    cart = JSON.parse(savedCart);
    updateCartUI();
  }
  
  // Search and filter events
  searchInput.addEventListener('input', filterProducts);
  categoryFilter.addEventListener('change', filterProducts);
  
  // Save favorites to localStorage when changed
  const originalToggle = toggleFavorite;
  toggleFavorite = function(productId) {
    originalToggle(productId);
    localStorage.setItem('bloomGlowFavorites', JSON.stringify([...favorites]));
  };
  
  // Save cart to localStorage when changed
  const originalAdd = addToCart;
  addToCart = function(productId) {
    originalAdd(productId);
    localStorage.setItem('bloomGlowCart', JSON.stringify(cart));
  };
  
  const originalRemove = removeFromCart;
  removeFromCart = function(productId) {
    originalRemove(productId);
    localStorage.setItem('bloomGlowCart', JSON.stringify(cart));
  };
  
  const originalUpdate = updateQuantity;
  updateQuantity = function(productId, change) {
    originalUpdate(productId, change);
    localStorage.setItem('bloomGlowCart', JSON.stringify(cart));
  };
}

// Run when DOM is ready
document.addEventListener('DOMContentLoaded', init);

console.log('🌸 Bloom & Glow — live!');
console.log(`📦 ${products.length} products available`);
console.log(`📂 ${categories.length} categories`);