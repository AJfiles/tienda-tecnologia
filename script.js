// Base de datos de productos
const products = [
    // --- CONTROLES ---
    { id: 'EasySMXM15', name: 'EasySMX M15', category: 'Controles', price: 160000, folder: 'Controles/EasySMXM15/', images: ['EasySmxM15_1.jpg', 'EasySmxM15_2.jpg', 'EasySmxM15_3.jpg', 'EasySmxM15_4.jpg', 'EasySmxM15_5.jpg', 'EasySmxM15_6.jpg'] },
    { id: 'GameSirX3Pro', name: 'GameSir X3 Pro', category: 'Controles', price: 290000, folder: 'Controles/GameSirX3Pro/', images: ['GameSirX3Pro_1.png', 'GameSirX3Pro_2.png', 'GameSirX3Pro_3.png', 'GameSirX3Pro_4.png', 'GameSirX3Pro_5.png', 'GameSirX3Pro_6.png.jpg'] },
    { id: 'GameSirX5Lite', name: 'GameSir X5 Lite', category: 'Controles', price: 140000, folder: 'Controles/GameSirX5Lite/', images: ['GameSirX5Lite_1.png', 'GameSirX5Lite_2.png', 'GameSirX5Lite_3.png', 'GameSirX5Lite_4.png', 'GameSirX5Lite_5.png'] },

    // --- COOLERS ---
    { id: 'CoolerWC', name: 'Cooler WC', category: 'COOLERS', price: 60000, folder: 'COOLERS/CoolerWC/', images: ['CoolerWC_1_Delante.png', 'CoolerWC_2_CargaInhalambrica.png', 'CoolerWC_3_AtrasSolo.png', 'CoolerWC_4_Todo.png'] },
    { id: 'CT20', name: 'CT20', category: 'COOLERS', price: 80000, folder: 'COOLERS/CT20/', images: ['CT20_1_delante.png', 'CT20_2_Con_Agarraderas.png', 'CT20_3_DelanteSolo.png', 'CT20_4_AtrasSolo.png', 'CT20_5_CableDeCarga.png', 'CT20_6_Agarraderas.png', 'CT20_7_PlacaMagnetica.png', 'CT20_8_Todo.png'] },
    { id: 'CX07', name: 'CX07', category: 'COOLERS', price: 75000, folder: 'COOLERS/CX07/', images: ['Cx07_1_Delante.jpg', 'Cx07_2_Con_agarraderas.png', 'Cx07_3_Delante_Solo.png', 'Cx07_4_atras_solo.png', 'Cx07_5_Destapado.png', 'Cx07_6_Cable_De_Carga.png', 'Cx07_7_Agarraderas.png', 'Cx07_8_Placa_Magnetica.png', 'Cx07_9_Todo.png'] },
    { id: 'CX15', name: 'CX15', category: 'COOLERS', price: 95000, folder: 'COOLERS/CX15/', images: ['CX15_1_Delante.png', 'CX15_2_ConAgarraderas.png', 'CX15_3_DelanteSolo.png', 'CX15_4_AtrasSolo.png', 'CX15_5_CableDeCarga.png', 'CX15_6_Agarraderas.png', 'CX15_7_PlacaMagnetica.png', 'CX15_8_Todo.png'] },
    { id: 'FS01', name: 'FS01', category: 'COOLERS', price: 70000, folder: 'COOLERS/FS01/', images: ['FS01_1_Delante.png', 'FS01_2_DelanteSolo.png', 'FS01_3_AtrasSolo.png', 'FS01_4_CableDeCarga.png', 'FS01_5_Todo.png'] },
    { id: 'K22', name: 'K22', category: 'COOLERS', price: 90000, folder: 'COOLERS/K22/', images: ['K22_1_Delante.png', 'K22_2_Delantesolo.png', 'K22_3_AtrasSolo.png', 'K22_4_Funciones.png', 'K22_5_PlacaMagnetica.png', 'K22_6_CableDeCarga.png', 'K22_7_Todo.png'] },
    { id: 'K36', name: 'K36', category: 'COOLERS', price: 85000, folder: 'COOLERS/K36/', images: ['K36_1_Delante.jpg', 'K36_2_con_Agarraderas.jpg', 'K36_3_Delante_solo.png', 'K36_4_Atrás_solo.png', 'K36_5_Cable_de_carga.png', 'K36_6_Agarraderas.png', 'K36_7_Placa_Magnética.png', 'K36_8_Todo.jpg'] },
    { id: 'K51', name: 'K51', category: 'COOLERS', price: 90000, folder: 'COOLERS/K51/', images: ['K51_1_delante.png', 'K51_2_ConAgarraderas.png', 'K51_3_DelanteSolo.png', 'K51_4_AtrasSolo.png', 'K51_5_CableDeCarga.png', 'K51_6_Agarraderas.png', 'K51_7_PlacaMagnetica.png', 'K51_8_Todo.png'] },
    { id: 'RADS', name: 'RADS', category: 'COOLERS', price: 70000, folder: 'COOLERS/RADS/', images: ['RADS_1_Delante.png', 'RADS_2_ConAgarraderas.png', 'RADS_3_DelanteSolo.png', 'RADS_4_AtrasSolo.png', 'RADS_5_Agarraderas.png', 'RADS_6_CableDeCarga.png', 'RADS_7_PlacaMagnetica.png', 'RADS_8_Todo.png'] },
    { id: 'RD', name: 'RD', category: 'COOLERS', price: 65000, folder: 'COOLERS/RD/', images: ['RD_1_Delante.png', 'RD_2_DelanteSolo.png', 'RD_3_AtrasSolo.png', 'RD_4_CableDeCarga.png', 'RD_5_PlacaMagnetica.png', 'RD_6_Todo.png'] },
    { id: 'S25', name: 'S25', category: 'COOLERS', price: 70000, folder: 'COOLERS/S25/', images: ['S25_1_delante.png', 'S25_2_DelanteSolo.png', 'S25_3_AtrasSolo.png', 'S25_4_PlacaMagnetica.png', 'S25_5_CableDeCarga.png', 'S25_6_Todo.png'] },
    { id: 'S6X', name: 'S6X', category: 'COOLERS', price: 65000, folder: 'COOLERS/S6X/', images: ['S6X_1_Delante.png', 'S6X_2_DelanteSolo.png', 'S6X_3_AtrasSolo.png', 'S6X_4_PlacaMagnetica.png', 'S6X_5_CableDeCarga.png', 'S6X_6_Todo.png'] },
    { id: 'SL70', name: 'SL70', category: 'COOLERS', price: 75000, folder: 'COOLERS/SL70/', images: ['SL70_1_Delante.png', 'SL70_2_Con_Agarraderas.png', 'SL70_3_Delante_Solo.png', 'SL70_4_Atras_Solo.png', 'SL70_5_CableDeCarga.png', 'SL70_6_Agarraderas.png', 'SL70_7_PlacaMagnetica.png', 'SL70_8_Todo.png'] },
    { id: 'SR02PRO', name: 'SR02 PRO', category: 'COOLERS', price: 80000, folder: 'COOLERS/SR02PRO/', images: ['SR02PRO_1_DELANTE.png', 'SR02PRO_2_CON_AGARRADERAS.png', 'SR02PRO_3_Delante_Solo.png', 'SR02PRO_4_Atras_Solo.png', 'SR02PRO_5_Cable_De_Carga.png', 'SR02PRO_6_Agarraderas.png', 'SR02PRO_7_PlacaMagnetica.png', 'SR02PRO_8_Todo.png'] },
    { id: 'TH18', name: 'TH18', category: 'COOLERS', price: 90000, folder: 'COOLERS/TH18/', images: ['TH18_1_Delante.png', 'TH18_2_ConAgarraderas.png', 'TH18_3_DelanteSolo.png', 'TH18_4_AtrasSolo.png', 'TH18_5_PlacaMagnetica.png', 'TH18_6_Agarraderas.png', 'TH18_7_CableDeCarga.png', 'TH18_8_Todo.png'] },
    { id: 'TL07', name: 'TL07', category: 'COOLERS', price: 75000, folder: 'COOLERS/TL07/', images: ['TL07_1_Delante.png', 'TL07_2_ConAgarraderas.png', 'TL07_3_DelanteSolo.png', 'TL07_4_AtrasSolo.png', 'TL07_5_CableDeCarga.png', 'TL07_6_Agarraderas.png', 'TL07_7_PlacaMagnetica.png', 'TL07_8_Todo.png'] },
    { id: 'Y02', name: 'Y02', category: 'COOLERS', price: 65000, folder: 'COOLERS/Y02/', images: ['Y02_1_delante.png', 'Y02_2_AtrasSolo.png', 'Y02_3_DelanteSolo.png', 'Y02_4_CableDeCarga.png', 'Y02_5_Todo.png'] },
    { id: 'Y05', name: 'Y05', category: 'COOLERS', price: 60000, folder: 'COOLERS/Y05/', images: ['Y05_1_delante.png', 'Y05_2_AtrasSolo.png', 'Y05_3_CableDeCarga.png', 'Y05_4_Todo.png'] }
];

// Estado de la UI
let currentCategory = 'Todos';
let sortDesc = true; // true = Mayor a Menor

// Formateador de pesos colombianos
const formatter = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
});

const grid = document.getElementById('product-grid');
const sortBtn = document.getElementById('sort-btn');
const modal = document.getElementById('product-modal');
const closeBtn = document.querySelector('.close-btn');

// Renderizado de productos
function renderProducts() {
    grid.innerHTML = '';
    
    // Filtrar
    let filtered = products.filter(p => currentCategory === 'Todos' || p.category === currentCategory);
    
    // Ordenar
    filtered.sort((a, b) => sortDesc ? b.price - a.price : a.price - b.price);

    filtered.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        // Selecciona la primera imagen como previsualización
        const firstImage = product.folder + product.images[0];
        
        card.innerHTML = `
            <img src="${firstImage}" alt="${product.name}" class="product-image-preview" loading="lazy">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-price">${formatter.format(product.price)}</p>
        `;
        
        card.addEventListener('click', () => openModal(product));
        grid.appendChild(card);
    });
}

// Filtros por Categoría
document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        currentCategory = e.target.getAttribute('data-cat');
        renderProducts();
    });
});

// Botón de Ordenar
sortBtn.addEventListener('click', () => {
    sortDesc = !sortDesc;
    sortBtn.textContent = sortDesc ? 'Ordenar: Mayor Precio ▼' : 'Ordenar: Menor Precio ▲';
    renderProducts();
});

// Modal y Galería
function openModal(product) {
    document.getElementById('modal-title').textContent = product.name;
    document.getElementById('modal-price').textContent = formatter.format(product.price);
    
    // Configurar WhatsApp (Prefijo +57 de Colombia incluido)
    const wsMensaje = encodeURIComponent(`Hola, me interesa el ${product.name}`);
    document.getElementById('modal-whatsapp').href = `https://wa.me/573143766181?text=${wsMensaje}`;

    // Construir galería vertical
    const gallery = document.getElementById('modal-gallery');
    gallery.innerHTML = '';
    product.images.forEach(imgName => {
        const img = document.createElement('img');
        img.src = product.folder + imgName;
        img.alt = `Vista de ${product.name}`;
        img.loading = 'lazy';
        gallery.appendChild(img);
    });

    modal.style.display = 'flex';
}

// Cerrar Modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Inicializar
renderProducts();
