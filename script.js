const waNumber = "6281339245813"; // ganti dengan nomor WhatsApp Anda tanpa tanda + atau 0

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

// Generate menu
const menus = [
    { name: "Ayam", icon: "🐔", category: "protein", ingredients: ["1 ayam", "1 bungkus Desaku Marinasi"], price: "Rp 20.000" },
    { name: "Ikan ", icon: "🐟", category: "protein", ingredients: ["2 ekor ikan", "1 bungkus Desaku Marinasi"], price: "Rp 15.000" },
    { name: "Telur ", icon: "🥚", category: "protein", ingredients: ["4 butir telur ayam rebus", "1 bungkus Desaku Marinasi"], price: "Rp 18.000" },
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
                <button onclick="pesan('${menu.name}')">Pesan via WA</button>
            `;
            
            grid.appendChild(card);
        });
        
        container.appendChild(section);
    });
});