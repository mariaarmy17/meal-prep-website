const waNumber = "6281339245813"; // ganti dengan nomor WhatsApp Anda tanpa tanda + atau 0

// Cart functionality
let cart = [];

// Hamburger menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close menu saat link diklik
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Cart modal functionality
    const cartIcon = document.getElementById('cart-icon');
    const cartModal = document.getElementById('cart-modal');
    const closeCart = document.getElementById('close-cart');
    const checkoutBtn = document.getElementById('checkout-btn');

    cartIcon.addEventListener('click', function() {
        updateCartDisplay();
        cartModal.style.display = 'block';
    });

    closeCart.addEventListener('click', function() {
        cartModal.style.display = 'none';
    });

    checkoutBtn.addEventListener('click', function() {
        if (cart.length === 0) {
            alert('Keranjang kosong. Silakan tambah menu terlebih dahulu.');
            return;
        }
        cartModal.style.display = 'none';
        document.getElementById('order-modal').style.display = 'block';
    });

    // Order form modal
    const orderModal = document.getElementById('order-modal');
    const closeOrder = document.getElementById('close-order');
    const orderForm = document.getElementById('order-form');

    closeOrder.addEventListener('click', function() {
        orderModal.style.display = 'none';
    });

    orderForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const address = document.getElementById('address').value;
        const deliveryDate = document.getElementById('delivery-date').value;
        const notes = document.getElementById('notes').value;

        const orderText = generateOrderText(name, phone, address, deliveryDate, notes);
        const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(orderText)}`;
        window.open(waUrl, '_blank');

        // Reset form and cart
        orderForm.reset();
        cart = [];
        updateCartCount();
        orderModal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === cartModal) {
            cartModal.style.display = 'none';
        }
        if (event.target === orderModal) {
            orderModal.style.display = 'none';
        }
    });
});

// Back to top button
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

function pesan(menuName) {
    const text = encodeURIComponent(`Halo, saya ingin memesan ${menuName}. Mohon bantuannya.`);
    const waUrl = `https://wa.me/${waNumber}?text=${text}`;
    window.open(waUrl, '_blank');
}

function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name, price: parseInt(price.replace(/[^\d]/g, '')), quantity: 1 });
    }
    updateCartCount();
    alert(`${name} ditambahkan ke keranjang!`);
}

function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cart-count').textContent = count;
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Keranjang kosong</p>';
        cartTotal.textContent = 'Rp 0';
        return;
    }

    let itemsHtml = '';
    let total = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        itemsHtml += `
            <div class="cart-item">
                <span>${item.name} (x${item.quantity})</span>
                <span>Rp ${itemTotal.toLocaleString()}</span>
                <button onclick="removeFromCart(${index})">Hapus</button>
            </div>
        `;
    });

    cartItems.innerHTML = itemsHtml;
    cartTotal.textContent = `Rp ${total.toLocaleString()}`;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartCount();
    updateCartDisplay();
}

function generateOrderText(name, phone, address, deliveryDate, notes) {
    let text = `Halo, saya ingin memesan:\n\n`;
    
    cart.forEach(item => {
        text += `- ${item.name} (x${item.quantity}) - Rp ${(item.price * item.quantity).toLocaleString()}\n`;
    });
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    text += `\nTotal: Rp ${total.toLocaleString()}\n\n`;
    text += `Nama: ${name}\n`;
    text += `No. WA: ${phone}\n`;
    text += `Alamat: ${address}\n`;
    text += `Tanggal Pengiriman: ${deliveryDate}\n`;
    if (notes) {
        text += `Catatan: ${notes}\n`;
    }
    
    text += `\nMohon konfirmasi pesanan saya. Terima kasih!`;
    
    return text;
}

// Generate menu
const menus = [
    { name: "Ayam", icon: "🐔", category: "protein", ingredients: ["4 potong ayam", "1 bungkus Desaku Marinasi"], price: "Rp 25.000" },
    { name: "Ikan ", icon: "🐟", category: "protein", image: "images/ikan .jpeg", ingredients: ["3 ekor ikan", "1 bungkus Desaku Marinasi"], price: "Rp 15.000" },
    { name: "Telur Balado", icon: "🥚", category: "protein", image: "images/telur balado.jpeg", ingredients: ["4 butir telur ayam rebus", "3 cabe kriting","3 siung bawang merah","2 siung bawang putih","2 buah tomat","2 lbr daun salam","1 bungkus kecap","2 cabe rawit"], price: "Rp 18.000" },
    { name: "Tempe", icon: "🍄", category: "protein", ingredients: ["1 papan tempe", "1 bungkus Desaku Marinasi"], price: "Rp 10.000" },
    { name: "Tahu", icon: "🧀", category: "protein", ingredients: ["1 bungkus tahu", "1 bungkus Desaku Marinasi"], price: "Rp 10.000" },
    { name: "Capcay", icon: "🥦", category: "vegetable", image: "images/capcay.jpeg", ingredients: ["sawi putih", "1 wortel","4 siung bawang merah", "2 siung bawang putih", "3 bakso", "1 bks lada"], price: "Rp 15.000" },
    { name: "Cah Kangkung", icon: "🥬", category: "vegetable", ingredients: ["3 ikat kangkung", "2 siung bawang putih", "3 cabai", "3 siung bawang merah"], price: "Rp 13.000" },
    { name: "Daun Ubi", icon: "🥥", category: "vegetable", image: "images/Daun%20Ubi+Bunga%20Pepaya.jpeg", ingredients: ["1 ikat daun ubi", "1 bks bunga pepaya", "4 siung bawang merah", "2 siung bawang putih", "3 buah cabai", "1 bks terasi", "Catatan: langsung direbus"], price: "Rp 14.500" },
    { name: "Paria + Telur", icon: "🥒", category: "vegetable", image: "images/Buncis%20Telur.jpeg", ingredients: ["3 buah paria", "1 butir telur", "2 buah cabai merah", "2 siung bawang putih", "3 siung bawang merah", "1 sachet kunyit bubuk"], price: "Rp 15.000" },
    { name: "Buncis + Bunga Pepaya", icon: "🥬", category: "vegetable", ingredients: ["Buncis", "Bunga papaya", "3 siung bawang merah", "2 siung bawang putih", "3 buah cabai merah"], price: "Rp 17.000" },
    { name: "Bakwan Jagung", icon: "🌽", category: "vegetable", image: "images/Bakwan%20Jagung.jpeg", ingredients: ["2 buah jagung", "1 buah wortel", "tepung sajiku", "2 siung bawang putih"], price: "Rp 15.000" },
    { name: "Ubi Rebus", icon: "🥔", category: "tuber", image: "images/UBI%20Rebus.jpeg", ingredients: ["6 buah Ubi ungu"], price: "Rp 12.000"}
];

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('menu-container');
    
    const categories = {
        protein: 'Paket Protein',
        vegetable: 'Paket Sayuran',
        tuber: 'Paket Ubi'
    };
    
    Object.keys(categories).forEach(cat => {
        const section = document.createElement('div');
        section.className = 'menu-category';
        section.innerHTML = `<h3>${categories[cat]}</h3><div class="category-grid"></div>`;
        
        const grid = section.querySelector('.category-grid');
        
        const filteredMenus = menus.filter(menu => menu.category === cat);
        filteredMenus.forEach(menu => {
            const card = document.createElement('div');
            card.className = 'card';
            
            const ingredientsList = menu.ingredients.map(ing => `<li>${ing}</li>`).join('');
            const imageHtml = menu.image ? `<img src="${menu.image}" alt="${menu.name}">` : '';
            
            card.innerHTML = `
                ${imageHtml}
                <h3>${menu.icon} ${menu.name}</h3>
                <p>Bahan:</p>
                <ul>${ingredientsList}</ul>
                <span>${menu.price}</span>
                <button onclick="addToCart('${menu.name}', '${menu.price}')">Tambah ke Keranjang</button>
            `;
            
            grid.appendChild(card);
        });
        
        container.appendChild(section);
    });
});