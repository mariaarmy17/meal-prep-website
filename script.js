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
    { name: "Ayam Kecap", icon: "🐔",ingredients: ["4 potong ayam", "Kecap manis 2 bks", "3 siung bawang putih", "5 siung bawang merah", "1 ruas kecil jahe", "2 lembar daun salam", "Ladaku bubuk merica"], price: "Rp 25.000" },
    { name: "Ayam Rica", icon: "🐔",ingredients: ["4 ptg ayam", "2 lembar daun salam", "1 batang serai", "1 buah jeruk nipis", "3 lbr daun sup", "5 siung bawang merah", "3 siung bawang putih","1 ruas kunyit","2 kemiri","1 ruas jahe"], price: "Rp 27.000" },
    { name: "Ayam Asam Manis", icon: "🐔",ingredients: ["4 potong ayam", "Kecap manis 2 bks", "3 siung bawang putih", "5 siung bawang merah", "1 ruas jahe", "1 cup Saus sambal", "1 buah jeruk nipis", "2 lembar daun salam", "2 bks lada bubuk"], price: "Rp 25.500" },
    { name: "Ayam Goreng Bawang Putih", icon: "🐔",ingredients: ["4 Ayam", "3 siung bawang putih", "Ladaku merica", "Kecap asin", "tepung maizena"], price: "Rp 28.500" },
    { name: "Ikan Balado Tomat", icon: "🐟",ingredients: ["2 ekor ikan", "1 buah jeruk nipis", "5 buah cabai merah keriting","4 siung bawang merah", "2 siung bawang putih", "2 buah tomat", "1 ruas jahe","2 lembar daun jeruk", "1 batang serai"], price: "Rp 22.000" },
    { name: "Ikan Kuah kuning", icon: "🐟",ingredients: ["Ikan 2 ekor", "1 buah jeruk nipis", "4 siung bawang merah", "2 siung bawang putih","2 ruas kunyit", "1 ruas jahe", "Ladaku merica", "1 buah tomat", "kemangi", "1 batang serai"], price: "Rp 22.500" },
    { name: "Telur Balado", icon: "🥚",ingredients: ["4 butir telur ayam", "3 buah cabai merah keriting", "3 siung bawang merah", "2 siung bawang putih", "2 buah tomat", "2 lembar daun salam","1 bks kecap","9 cabai rawit"], price: "Rp 18.000" },
    { name: "Capcay", icon: "🥦", image: "images/capcay.jpeg", ingredients: ["sawi putih", "1 wortel","4 siung bawang merah", "2 siung bawang putih", "5 bakso", "1 bks lada"], price: "Rp 15.000" },
    { name: "Cah Kangkung", icon: "🥬",ingredients: ["1 ikat kangkung", "2 siung bawang putih", "3 cabai", "3 siung bawang merah"], price: "Rp 13.000" },
    { name: "Daun Ubi ", icon: "🥥", image: "images/Daun%20Ubi.jpeg", ingredients: ["1 ikat daun ubi", "1 bks bunga pepaya", "4 siung bawang merah", "2 siung bawang putih", "3 buah cabai", "1 bks terasi"], price: "Rp 14.500" },
    { name: "Tempe Orek", icon: "🍄",ingredients: ["1 papan tempe", "5 siung bawang merah", "2 siung bawang putih", "3 cabai keriting merah","2 bungkus kecap","2 buah tomat"], price: "Rp 15.000" },
    { name: "Paria + Telur", icon: "🥒", image: "images/Buncis%20Telur.jpeg", ingredients: ["3 buah paria", "1 butir telur", "2 buah cabai merah", "2 siung bawang putih", "3 siung bawang merah", "1 sachet kunyit bubuk"], price: "Rp 15.000" },
    { name: "Buncis + Bunga Pepaya", icon: "🥬", image: "images/Buncis+Bunga%20Pepaya.jpeg", ingredients: ["Buncis", "Bunga papaya", "3 siung bawang merah", "2 siung bawang putih", "3 buah cabai merah"], price: "Rp 17.000" },
    { name: "Bakwan Jagung", icon: "🌽", image: "images/Bakwan%20Jagung.jpeg", ingredients: ["2 buah jagung", "1 buah wortel", "tepung sajiku", "2 siung bawang putih"], price: "Rp 15.000" },
    { name: "Ubi Rebus", icon: "🥔", image: "images/UBI%20Rebus.jpeg", ingredients: ["6 buah Ubi ungu"], price: "Rp 12.000"}
];

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('menu-container');
    menus.forEach(menu => {
        const card = document.createElement('div');
        card.className = 'card';
        
        const ingredientsList = menu.ingredients.map(ing => `<li>${ing}</li>`).join('');
        
        card.innerHTML = `
            <img src="${menu.image}" alt="${menu.name}">
            <h3>${menu.icon} ${menu.name}</h3>
            <p>Bahan:</p>
            <ul>${ingredientsList}</ul>
            <span>${menu.price}</span>
            <button onclick="pesan('${menu.name}')">Pesan via WA</button>
        `;

        container.appendChild(card);
    });
});