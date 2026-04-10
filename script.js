const waNumber = "6281339245813"; // ganti dengan nomor WhatsApp Anda tanpa tanda + atau 0

function pesan(menuName) {
    const text = encodeURIComponent(`Halo, saya ingin memesan ${menuName}. Mohon bantuannya.`);
    const waUrl = `https://wa.me/${waNumber}?text=${text}`;
    window.open(waUrl, '_blank');
}

// Generate menu
const menus = [
    { name: "Ayam Kecap", icon: "🐔", ingredients: ["4 potong ayam", "Kecap manis 2 bks", "3 siung bawang putih", "5 siung bawang merah", "1 ruas kecil jahe", "2 lembar daun salam", "Ladaku bubuk merica"], price: "Rp 25.000" },
    { name: "Ayam Rica", icon: "🐔", ingredients: ["2 ptg ayam", "3 lembar daun jeruk", "2 lembar daun salam", "1 ruas jahe", "½ batang serai", "1 sdt air jeruk nipis"], price: "Rp 20.000" },
    { name: "Ayam Asam Manis", icon: "🐔", ingredients: ["4 potong ayam", "Kecap manis 2 bks", "3 siung bawang putih", "5 siung bawang merah", "1 buah bawang Bombay", "1 ruas kecil jahe", "Saus tomat", "Saus sambal", "1 buah jeruk nipis", "2 lembar daun salam", "Ladaku bubuk merica"], price: "Rp 28.000" },
    { name: "Ayam Goreng Bawang Putih", icon: "🐔", ingredients: ["4 Ayam", "3 siung bawang putih", "Ladaku merica", "Kecap asin 1 bks", "½ saus tiram (opsional)", "1 bks kaldu bubuk"], price: "Rp 22.000" },
    { name: "Sup Ayam", icon: "🐔", ingredients: ["4 Ayam", "2 siung bawang putih", "Lada 1 bks", "Pala (opsional)", "Daun bawang", "Batang seledri", "Kaldu bubuk", "Wortel 2", "Kentang 2"], price: "Rp 18.000" },
    { name: "Ikan Balado Tomat", icon: "🐟", ingredients: ["Dua ekor (6 ekor 20 ribu)", "1 buah jeruk nipis", "8 buah cabai merah keriting", "4 buah cabai rawit merah (opsional)", "6 siung bawang merah", "3 siung bawang putih", "2 buah tomat", "1 ruas jari jahe", "1/2 sendok teh terasi (opsional)", "2 lembar daun salam", "2 lembar daun jeruk", "1 batang serai"], price: "Rp 30.000" },
    { name: "Ikan Kuah Asam", icon: "🐟", ingredients: ["Ikan 2 ekor", "1 buah jeruk nipis", "5 siung bawang merah", "3 siung bawang putih", "1 buah cabai merah keriting", "2 cm kunyit", "1 cm jahe", "Ladaku merica 1 bks", "2 lembar daun salam", "3 lembar daun jeruk", "2 batang serai", "2 buah tomat", "5 buah belimbing wuluh", "1 ikat kemangi", "Cabai rawit utuh (opsional)"], price: "Rp 26.000" },
    { name: "Telur Balado", icon: "🥚", ingredients: ["6 butir telur ayam (rebus, kupas)", "10 buah cabai merah keriting", "4 siung bawang merah", "2 siung bawang putih", "1 buah tomat", "2 lembar daun salam", "1 ruas jari lengkuas", "Kaldu bubuk secukupnya (opsional)"], price: "Rp 15.000" },
    { name: "Capcay", icon: "🥦", ingredients: ["¼ kol (iris)", "1 wortel", "2-3 lembar sawi", "2 siung bawang putih", "1 butir telur (opsional)", "5 bakso / sosis", "1 sdm kecap manis", "½ sdt garam", "½ sdt merica (lada)", "Saus tiram"], price: "Rp 16.000" },
    { name: "Cah Kangkung", icon: "🥬", ingredients: ["1 ikat kangkong", "2 siung bawang putih", "1-2 cabai", "1 sdm kecap manis", "½ sdt garam", "½ sdt kaldu bubuk (opsional)", "Sedikit merica (opsional)"], price: "Rp 12.000" },
    { name: "Rumpu Rampe", icon: "🥬", ingredients: ["Daun papaya muda", "Bunga papaya", "Daun singkong", "Kacang Panjang", "Tauge (opsional)", "5 bawang merah", "3 bawang putih", "5 cabai", "Terasi"], price: "Rp 14.000" },
    { name: "Daun Ubi Tumis", icon: "🥬", ingredients: ["1 ikat daun ubi", "3 siung bawang putih", "4 siung bawang merah", "2 buah cabai merah/rawit", "1 bks terasi"], price: "Rp 13.000" },
    { name: "Daun Ubi Santan", icon: "🥥", ingredients: ["1 ikat daun ubi", "3 siung bawang putih", "5 siung bawang merah", "2 biji kemiri", "1 ruas jahe", "Kunyit bubuk", "Ketumbar bubuk 1 bks", "Lada bubuk 1 bks", "Sereh", "Daun jeruk", "Daun salam"], price: "Rp 17.000" },
    { name: "Tempe Orek", icon: "🍄", ingredients: ["1 papan tempe", "8 siung bawang merah", "5 siung bawang putih", "5 cabe keriting merah", "50 gr gula merah", "1 sdm air asam jawa", "2 lembar daun salam", "1 ruas lengkuas"], price: "Rp 10.000" },
    { name: "Paria + Telur", icon: "🥒", ingredients: ["1 buah paria", "1 butir telur", "1 buah cabe merah", "3 siung bawang putih", "3 siung bawang merah", "Lada"], price: "Rp 11.000" },
    { name: "Buncis + Bunga Pepaya", icon: "🥬", ingredients: ["100 gr buncis", "700 gr bunga papaya", "3 siung bawang merah", "2 siung bawang putih", "3 buah cabe merah", "1 sachet saus tiram"], price: "Rp 19.000" },
    { name: "Bakwan Jagung", icon: "🌽", ingredients: ["Jagung pipo 100-120 gr", "Wortel 40 gr", "Daun bawang 1 batang", "1 butir telur", "1 siung bawang putih", "2 siung bawang merah", "3 sdm tepung serbaguna"], price: "Rp 8.000" },
    { name: "Ubi Rebus", icon: "🥔", ingredients: ["Ubi (sesuai kebutuhan)"], price: "Rp 5.000" }
];

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('menu-container');
    menus.forEach(menu => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${menu.icon} ${menu.name}</h3>
            <p>Bahan:</p>
            <ul>${menu.ingredients.map(ing => `<li>${ing}</li>`).join('')}</ul>
            <span>${menu.price}</span>
            <button onclick="pesan('${menu.name}')">Pesan via WA</button>
        `;
        container.appendChild(card);
    });
});