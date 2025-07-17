// ===============================================
// FUNCIÓN PARA ALTERNAR EL MENÚ HAMBURGUESA
// ===============================================
// Permite abrir y cerrar el menú de navegación móvil
// al hacer clic en el botón hamburguesa
function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    const hamburger = document.querySelector('.hamburger');
    
    // Alterna la clase 'active' para mostrar/ocultar el menú
    navMenu.classList.toggle('active');
    // Alterna la animación del icono hamburguesa
    hamburger.classList.toggle('active');
}

// ===============================================
// FUNCIÓN PARA MOSTRAR SECCIONES
// ===============================================
// Gestiona la navegación entre diferentes secciones de la página
// mostrando solo la sección seleccionada
function showSection(sectionId) {
    // Oculta todas las secciones actualmente visibles
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Muestra únicamente la sección seleccionada
    document.getElementById(sectionId).classList.add('active');
    
    // Cierra automáticamente el menú móvil después de seleccionar una opción
    const navMenu = document.getElementById('navMenu');
    const hamburger = document.querySelector('.hamburger');
    if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
}

// ===============================================
// CERRAR MENÚ AL HACER CLIC FUERA DE ÉL
// ===============================================
// Mejora la experiencia de usuario cerrando el menú
// cuando se hace clic en cualquier parte fuera del área de navegación
document.addEventListener('click', function(event) {
    const navMenu = document.getElementById('navMenu');
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    
    // Verifica si el clic fue fuera del área de navegación y si el menú está abierto
    if (!nav.contains(event.target) && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// ===============================================
// CERRAR MENÚ AL CAMBIAR EL TAMAÑO DE PANTALLA
// ===============================================
// Cierra automáticamente el menú móvil cuando la pantalla
// se redimensiona a un tamaño mayor (modo desktop)
window.addEventListener('resize', function() {
    const navMenu = document.getElementById('navMenu');
    const hamburger = document.querySelector('.hamburger');
    
    // Si la pantalla es mayor a 768px, cierra el menú móvil
    if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

////////////////////////////
// SECCIÓN DE PROVINCIAS //
///////////////////////////

// ===============================================
// BARRA DE NAVEGACIÓN RESPONSIVA
// ===============================================
// Controla la apertura y cierre del menú de navegación en dispositivos móviles
function menuDespegable() {
    const menu = document.querySelector('.nav-menu');
    // Alterna la clase 'active' para mostrar/ocultar el menú
    menu.classList.toggle('active');
}

// ===============================================
// BASE DE DATOS DE PROVINCIAS
// ===============================================
// Objeto que contiene toda la información detallada de cada provincia
// Incluye: nombre, imagen, capital, altitud, clima, atractivos y descripción
const provincesData = {
    'huanuco': {
        name: 'Huánuco',
        image: 'IMAGENES SECUNDARIAS/calicanto.jpg',
        capital: 'Huánuco',
        altitude: '1,894 msnm',
        climate: 'Templado y seco',
        attractions: [
            'Templo de Kotosh (Templo de las Manos Cruzadas)',
            'Centro Histórico de Huánuco',
            'Iglesia San Francisco',
            'Plaza de Armas',
            'Museo de Ciencias Naturales'
        ],
        description: 'Capital del departamento, conocida por su rica historia colonial y el famoso Templo de Kotosh. Ciudad de eterna primavera con arquitectura colonial y moderna. Es el centro administrativo y comercial más importante de la región.'
    },
    'ambo': {
        name: 'Ambo',
        image: 'IMAGENES SECUNDARIAS/ambo.jpg',
        capital: 'Ambo',
        altitude: '2,058 msnm',
        climate: 'Templado de montaña',
        attractions: [
            'Nacimiento del río Huallaga',
            'Minas de Cerro de Pasco',
            'Miradores naturales',
            'Rutas de trekking',
            'Paisajes andinos'
        ],
        description: 'Provincia minera por excelencia, famosa por sus paisajes andinos y el nacimiento del río Huallaga. Ideal para turismo de aventura y naturaleza, con múltiples rutas de senderismo y vistas panorámicas.'
    },
    'dos-de-mayo': {
        name: 'Dos de Mayo',
        image: 'IMAGENES SECUNDARIAS/dos de mayo.jpg',
        capital: 'La Unión',
        altitude: '3,146 msnm',
        climate: 'Frío de puna',
        attractions: [
            'Sitios históricos de la Batalla de Abtao',
            'Paisajes altoandinos',
            'Tradiciones culturales ancestrales',
            'Festividades locales',
            'Arquitectura colonial'
        ],
        description: 'Tierra de la memorable Batalla de Abtao, con hermosos paisajes altoandinos y tradiciones culturales ancestrales. Un lugar ideal para conocer la historia peruana y disfrutar de la cultura andina.'
    },
    'huacaybamba': {
        name: 'Huacaybamba',
        image: 'IMAGENES SECUNDARIAS/huacaybamba.jpg',
        capital: 'Huacaybamba',
        altitude: '2,200 msnm',
        climate: 'Templado húmedo',
        attractions: [
            'Cataratas espectaculares',
            'Bosques nublados',
            'Biodiversidad única',
            'Rutas ecológicas',
            'Comunidades rurales'
        ],
        description: 'Provincia de contrastes geográficos, desde la sierra hasta la selva alta. Famosa por sus cataratas y biodiversidad única. Perfecta para ecoturismo y turismo de aventura.'
    },
    'huamalies': {
        name: 'Huamalíes',
        image: 'IMAGENES SECUNDARIAS/huamalies.jpg',
        capital: 'Llata',
        altitude: '3,360 msnm',
        climate: 'Frío de puna',
        attractions: [
            'Paisajes de puna',
            'Ganadería tradicional',
            'Lagunas altoandinas',
            'Turismo rural',
            'Artesanías locales'
        ],
        description: 'Conocida por sus hermosos paisajes de puna y sus tradiciones ganaderas. Ideal para el turismo rural y ecoturismo, donde se puede vivir la experiencia de la vida andina tradicional.'
    },
    'leoncio-prado': {
        name: 'Leoncio Prado',
        image: 'IMAGENES SECUNDARIAS/leoncio prado.jpg',
        capital: 'Tingo María',
        altitude: '670 msnm',
        climate: 'Tropical húmedo',
        attractions: [
            'Cueva de las Lechuzas',
            'Parque Nacional Tingo María',
            'Velo de la Novia',
            'Puente Calicanto',
            'Jardín Botánico'
        ],
        description: 'Puerta de entrada a la selva huanuqueña, con Tingo María como capital. Famosa por la Cueva de las Lechuzas y el Parque Nacional Tingo María. Destino ideal para turismo ecológico y de aventura.'
    },
    'marañon': {
        name: 'Marañón',
        image: 'IMAGENES SECUNDARIAS/marañon.jpg',
        capital: 'Aucayacu',
        altitude: '600 msnm',
        climate: 'Tropical húmedo',
        attractions: [
            'Río Marañón',
            'Bosques amazónicos',
            'Biodiversidad selvática',
            'Turismo fluvial',
            'Comunidades nativas'
        ],
        description: 'Provincia amazónica con una rica biodiversidad y paisajes selváticos únicos. Ideal para turismo de naturaleza y aventura, con experiencias únicas en la selva peruana.'
    },
    'pachitea': {
        name: 'Pachitea',
        image: 'IMAGENES SECUNDARIAS/pachitea.jpg',
        capital: 'Panao',
        altitude: '2,400 msnm',
        climate: 'Templado húmedo',
        attractions: [
            'Diversidad biológica',
            'Comunidades nativas',
            'Pesca deportiva',
            'Turismo ecológico',
            'Artesanías tradicionales'
        ],
        description: 'Provincia selvática con gran diversidad biológica y comunidades nativas. Perfecta para turismo ecológico y cultural, donde se puede conocer las tradiciones ancestrales.'
    },
    'puerto-inca': {
        name: 'Puerto Inca',
        image: 'IMAGENES SECUNDARIAS/puerto inca.jpg',
        capital: 'Puerto Inca',
        altitude: '200 msnm',
        climate: 'Tropical húmedo',
        attractions: [
            'Selva baja',
            'Ríos amazónicos',
            'Culturas amazónicas',
            'Transporte fluvial',
            'Recursos naturales'
        ],
        description: 'La provincia más joven de Huánuco, ubicada en la selva baja. Rica en recursos naturales y culturas amazónicas. Perfecta para conocer la auténtica vida amazónica.'
    },
    'lauricocha': {
        name: 'Lauricocha',
        image: 'IMAGENES SECUNDARIAS/lauricocha.jpg',
        capital: 'Jesús',
        altitude: '3,845 msnm',
        climate: 'Frío de puna',
        attractions: [
            'Laguna de Lauricocha',
            'Restos arqueológicos',
            'Paisajes altoandinos',
            'Sitios prehistóricos',
            'Turismo de altura'
        ],
        description: 'Hogar de la famosa Laguna de Lauricocha, cuna de importantes restos arqueológicos y paisajes altoandinos espectaculares. Destino ideal para turismo arqueológico y de altura.'
    },
    'yarowilca': {
        name: 'Yarowilca',
        image: 'IMAGENES SECUNDARIAS/yarowilca.jpg',
        capital: 'Chavinillo',
        altitude: '3,150 msnm',
        climate: 'Templado frío',
        attractions: [
            'Tradiciones ancestrales',
            'Paisajes andinos',
            'Festividades culturales',
            'Turismo vivencial',
            'Gastronomía local'
        ],
        description: 'Provincia de tradiciones ancestrales y paisajes andinos. Conocida por sus festividades culturales y turismo vivencial. Ideal para conocer la cultura andina auténtica.'
    }
};

// ===============================================
// FUNCIÓN PARA MOSTRAR DETALLE DE PROVINCIA
// ===============================================
// Muestra la información completa de una provincia específica
// Oculta la grilla general y muestra el detalle con descripción y atractivos
function showProvinceDetail(provinceId) {
    const province = provincesData[provinceId];
    
    // Validar que la provincia exista en la base de datos
    if (!province) {
        console.error('Provincia no encontrada:', provinceId);
        return;
    }

    // Ocultar la grilla principal de provincias
    document.getElementById('provinces-grid').style.display = 'none';
    
    // Mostrar el botón para regresar a la vista general
    document.querySelector('.back-button').style.display = 'inline-block';
    
    // Generar el HTML del detalle de la provincia
    const detailsContainer = document.getElementById('province-details-container');
    detailsContainer.innerHTML = `
        <div class="province-detail">
            <div class="province-detail-header">
                <img src="${province.image}" alt="${province.name}" class="province-detail-image">
                <div class="province-detail-info">
                    <h2>${province.name}</h2>
                    <div class="province-stats">
                        <div class="stat-item">
                            <strong>Capital:</strong> ${province.capital}
                        </div>
                        <div class="stat-item">
                            <strong>Altitud:</strong> ${province.altitude}
                        </div>
                        <div class="stat-item">
                            <strong>Clima:</strong> ${province.climate}
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="province-detail-content">
                <div class="province-description">
                    <h3>Descripción</h3>
                    <p>${province.description}</p>
                </div>
                
                <div class="province-attractions">
                    <h3>Principales Atractivos</h3>
                    <ul>
                        ${province.attractions.map(attraction => `<li>${attraction}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>
    `;
    
    // Mostrar el contenedor de detalles
    detailsContainer.style.display = 'block';
    
    // Hacer scroll suave hacia el contenedor de detalles
    detailsContainer.scrollIntoView({ behavior: 'smooth' });
}

// ===============================================
// FUNCIÓN PARA VOLVER A MOSTRAR TODAS LAS PROVINCIAS
// ===============================================
// Regresa a la vista general mostrando todas las provincias
// Oculta el detalle individual y muestra la grilla completa
function showAllProvinces() {
    // Ocultar el contenedor de detalles específicos
    document.getElementById('province-details-container').style.display = 'none';
    
    // Mostrar la grilla principal con todas las provincias
    document.getElementById('provinces-grid').style.display = 'grid';
    
    // Ocultar el botón de regresar
    document.querySelector('.back-button').style.display = 'none';
    
    // Hacer scroll suave hacia la sección de provincias
    document.getElementById('provincias').scrollIntoView({ behavior: 'smooth' });
}

// ===============================================
// FUNCIÓN PARA LIMPIAR CONTENIDO DE DETALLES
// ===============================================
// Limpia el contenido del contenedor de detalles (función opcional)
function clearProvinceDetails() {
    document.getElementById('province-details-container').innerHTML = '';
}

// ===============================================
// INICIALIZACIÓN DE LA PÁGINA
// ===============================================
// Se ejecuta cuando la página se ha cargado completamente
// Configura funcionalidades adicionales y manejo de errores
document.addEventListener('DOMContentLoaded', function() {
    // Confirmar que la página se ha cargado correctamente
    console.log('Página de provincias de Huánuco cargada correctamente');
    
    // Configurar manejo de errores para imágenes no encontradas
    const images = document.querySelectorAll('.province-card img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            // Mostrar imagen por defecto si la original no se encuentra
            this.src = 'IMAGENES/default-province.jpg';
            console.warn('Imagen no encontrada:', this.alt);
        });
    });
});

// ===============================================
// FUNCIÓN DE BÚSQUEDA DE PROVINCIAS
// ===============================================
// Permite filtrar las provincias por nombre o descripción
// Oculta las tarjetas que no coinciden con el término de búsqueda
function searchProvinces(searchTerm) {
    const cards = document.querySelectorAll('.province-card');
    const term = searchTerm.toLowerCase();
    
    // Revisar cada tarjeta de provincia
    cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();
        
        // Mostrar u ocultar según coincidencia con el término de búsqueda
        if (title.includes(term) || description.includes(term)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// ===============================================
// FUNCIÓN PARA RESETEAR LA BÚSQUEDA
// ===============================================
// Muestra todas las provincias nuevamente
// Elimina cualquier filtro de búsqueda aplicado
function resetSearch() {
    const cards = document.querySelectorAll('.province-card');
    // Mostrar todas las tarjetas de provincias
    cards.forEach(card => {
        card.style.display = 'block';
    });
}

/////////////////////////////////////
// FIN DE LA SECCIÓN DE PROVINCIAS //
////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////
// SECCIÓN DE PAQUETES TURÍSTICOS //
////////////////////////////////////

/**
 * Base de datos de paquetes turísticos
 * Contiene toda la información detallada de cada paquete disponible
 * incluyendo precios, destinos, itinerarios y servicios incluidos
 */
const packagesData = {
    'huanuco-colonial': {
        name: 'Huánuco Colonial',
        duration: '3 días / 2 noches',
        price: 'S/ 280',
        destinations: 'Kotosh, Centro Histórico, Iglesia San Francisco',
        includes: ['Hospedaje', 'Desayunos', 'Tours guiados', 'Transporte'],
        image: 'IMAGENES PAQUETES TURISTICOS SECUNDARIO/1.jpg',
        type: 'individual',
        description: 'Descubre la rica historia colonial de Huánuco, visitando el famoso Templo de Kotosh conocido como el "Templo de las Manos Cruzadas", el centro histórico con su arquitectura colonial y la emblemática Iglesia San Francisco.',
        itinerary: [
            {
                day: 1,
                title: 'Llegada y Centro Histórico',
                activities: [
                    'Recepción en terminal/aeropuerto',
                    'Check-in en hotel',
                    'Tour por el Centro Histórico',
                    'Visita a la Plaza de Armas',
                    'Almuerzo en restaurante típico'
                ]
            },
            {
                day: 2,
                title: 'Kotosh y Iglesia San Francisco',
                activities: [
                    'Desayuno en hotel',
                    'Visita al Templo de Kotosh',
                    'Tour guiado arqueológico',
                    'Almuerzo',
                    'Visita a la Iglesia San Francisco',
                    'Museo de Ciencias Naturales'
                ]
            },
            {
                day: 3,
                title: 'Despedida',
                activities: [
                    'Desayuno',
                    'Tiempo libre para compras',
                    'Traslado a terminal/aeropuerto'
                ]
            }
        ],
        included: [
            'Hospedaje en hotel 3 estrellas',
            'Desayunos todos los días',
            'Tours guiados con guía profesional',
            'Transporte durante todo el tour',
            'Entradas a atractivos turísticos',
            'Seguro de viajero'
        ],
        notIncluded: [
            'Almuerzos y cenas',
            'Bebidas alcohólicas',
            'Gastos personales',
            'Propinas'
        ]
    },
    'aventura-ambo': {
        name: 'Aventura en Ambo',
        duration: '2 días / 1 noche',
        price: 'S/ 220',
        destinations: 'Minas, Mirador del Huallaga, Trekking',
        includes: ['Hospedaje', 'Alimentación completa', 'Guía especializado'],
        image: 'IMAGENES PAQUETES TURISTICOS SECUNDARIO/2.jpg',
        type: 'individual',
        description: 'Vive una experiencia única de aventura en los paisajes andinos de Ambo, con trekking hasta el mirador del Huallaga y visitas a zonas mineras históricas.',
        itinerary: [
            {
                day: 1,
                title: 'Trekking y Miradores',
                activities: [
                    'Salida temprano desde Huánuco',
                    'Llegada a Ambo y desayuno',
                    'Trekking hacia el Mirador del Huallaga',
                    'Almuerzo campestre',
                    'Visita a zonas mineras',
                    'Check-in en hospedaje local',
                    'Cena típica'
                ]
            },
            {
                day: 2,
                title: 'Nacimiento del Huallaga',
                activities: [
                    'Desayuno',
                    'Caminata al nacimiento del río Huallaga',
                    'Actividades de aventura',
                    'Almuerzo',
                    'Retorno a Huánuco'
                ]
            }
        ],
        included: [
            'Hospedaje en casa rural',
            'Alimentación completa',
            'Guía especializado en trekking',
            'Transporte ida y vuelta',
            'Equipo básico de trekking',
            'Seguro de aventura'
        ],
        notIncluded: [
            'Equipo personal de montaña',
            'Bebidas alcohólicas',
            'Gastos personales'
        ]
    },
    'tingo-maria': {
        name: 'Tingo María Mágico',
        duration: '4 días / 3 noches',
        price: 'S/ 450',
        destinations: 'Cueva de las Lechuzas, Parque Nacional, Velo de la Novia',
        includes: ['Hospedaje', 'Todas las comidas', 'Tours ecológicos'],
        image: 'IMAGENES PAQUETES TURISTICOS SECUNDARIO/3.jpg',
        type: 'individual',
        description: 'Explora la magia de la selva alta en Tingo María, visitando la famosa Cueva de las Lechuzas, el Parque Nacional y la cascada Velo de la Novia.',
        itinerary: [
            {
                day: 1,
                title: 'Llegada a Tingo María',
                activities: [
                    'Traslado desde Huánuco',
                    'Check-in en hotel',
                    'Almuerzo de bienvenida',
                    'Tour por la ciudad',
                    'Visita al Jardín Botánico'
                ]
            },
            {
                day: 2,
                title: 'Cueva de las Lechuzas',
                activities: [
                    'Desayuno',
                    'Visita a la Cueva de las Lechuzas',
                    'Almuerzo',
                    'Parque Nacional Tingo María',
                    'Caminatas ecológicas'
                ]
            },
            {
                day: 3,
                title: 'Velo de la Novia',
                activities: [
                    'Desayuno',
                    'Excursión al Velo de la Novia',
                    'Almuerzo campestre',
                    'Actividades en el río',
                    'Cena con show folclórico'
                ]
            },
            {
                day: 4,
                title: 'Retorno',
                activities: [
                    'Desayuno',
                    'Tiempo libre',
                    'Traslado de retorno'
                ]
            }
        ],
        included: [
            'Hospedaje en hotel 3 estrellas',
            'Todas las comidas',
            'Tours ecológicos',
            'Guía naturalista',
            'Transporte durante todo el tour',
            'Entradas a parques y atractivos',
            'Seguro de viajero'
        ],
        notIncluded: [
            'Bebidas alcohólicas',
            'Gastos personales',
            'Souvenirs'
        ]
    },
    'lauricocha': {
        name: 'Lauricocha Ancestral',
        duration: '3 días / 2 noches',
        price: 'S/ 350',
        destinations: 'Laguna Lauricocha, Sitios arqueológicos',
        includes: ['Hospedaje', 'Alimentación', 'Transporte 4x4'],
        image: 'IMAGENES PAQUETES TURISTICOS SECUNDARIO/4.jpg',
        type: 'individual',
        description: 'Descubre los misterios ancestrales de Lauricocha, hogar de importantes restos arqueológicos y paisajes altoandinos espectaculares.',
        itinerary: [
            {
                day: 1,
                title: 'Viaje a Lauricocha',
                activities: [
                    'Salida muy temprano desde Huánuco',
                    'Viaje en transporte 4x4',
                    'Paradas panorámicas',
                    'Llegada y almuerzo',
                    'Aclimatación a la altura',
                    'Hospedaje en refugio'
                ]
            },
            {
                day: 2,
                title: 'Laguna y Sitios Arqueológicos',
                activities: [
                    'Desayuno',
                    'Visita a la Laguna de Lauricocha',
                    'Exploración de sitios arqueológicos',
                    'Almuerzo',
                    'Caminata por la zona',
                    'Observación de fauna altoandina'
                ]
            },
            {
                day: 3,
                title: 'Retorno',
                activities: [
                    'Desayuno',
                    'Últimas fotografías',
                    'Viaje de retorno',
                    'Llegada a Huánuco'
                ]
            }
        ],
        included: [
            'Hospedaje en refugio de montaña',
            'Alimentación completa',
            'Transporte 4x4',
            'Guía arqueológico',
            'Equipo de altura',
            'Seguro de montaña'
        ],
        notIncluded: [
            'Ropa de abrigo personal',
            'Medicamentos para el soroche',
            'Gastos personales'
        ]
    },
    'dos-mayo': {
        name: 'Dos de Mayo Histórico',
        duration: '2 días / 1 noche',
        price: 'S/ 200',
        destinations: 'La Unión, Sitios históricos, Paisajes andinos',
        includes: ['Hospedaje', 'Comidas', 'Guía histórico'],
        image: 'IMAGENES PAQUETES TURISTICOS SECUNDARIO/5.jpg',
        type: 'individual',
        description: 'Conoce la historia de la memorable Batalla de Abtao y disfruta de los hermosos paisajes altoandinos con tradiciones culturales ancestrales.',
        included: [
            'Hospedaje en La Unión',
            'Alimentación completa',
            'Guía histórico especializado',
            'Visitas a sitios históricos',
            'Transporte'
        ],
        notIncluded: [
            'Gastos personales',
            'Souvenirs'
        ]
    },
    'huacaybamba': {
        name: 'Huacaybamba Natural',
        duration: '3 días / 2 noches',
        price: 'S/ 300',
        destinations: 'Cataratas, Bosques nublados, Comunidades',
        includes: ['Hospedaje rural', 'Comidas típicas', 'Caminatas'],
        image: 'IMAGENES PAQUETES TURISTICOS SECUNDARIO/6.jpg',
        type: 'individual',
        description: 'Explora la diversidad natural de Huacaybamba, desde cataratas espectaculares hasta bosques nublados únicos.',
        included: [
            'Hospedaje rural',
            'Comidas típicas',
            'Caminatas a cataratas',
            'Visita a comunidades locales',
            'Guía de naturaleza'
        ],
        notIncluded: [
            'Equipo de trekking',
            'Gastos personales'
        ]
    },
    'huamalies': {
        name: 'Huamalíes Rural',
        duration: '2 días / 1 noche',
        price: 'S/ 180',
        destinations: 'Paisajes de puna, Ganadería tradicional',
        includes: ['Hospedaje en casa rural', 'Comidas caseras'],
        image: 'IMAGENES/7.jpg',
        type: 'individual',
        description: 'Vive la auténtica experiencia rural andina en Huamalíes, conociendo las tradiciones ganaderas y los paisajes de puna.',
        included: [
            'Hospedaje en casa rural',
            'Comidas caseras',
            'Experiencia ganadera',
            'Paisajes de puna',
            'Turismo vivencial'
        ],
        notIncluded: [
            'Transporte desde Huánuco',
            'Gastos personales'
        ]
    },
    'marañon': {
        name: 'Marañón Selvático',
        duration: '4 días / 3 noches',
        price: 'S/ 500',
        destinations: 'Río Marañón, Bosques amazónicos',
        includes: ['Hospedaje', 'Comidas', 'Tours en bote'],
        image: 'IMAGENES PAQUETES TURISTICOS SECUNDARIO/8.jpg',
        type: 'individual',
        description: 'Adéntrate en la selva amazónica del Marañón, con una rica biodiversidad y paisajes selváticos únicos.',
        included: [
            'Hospedaje en lodge selvático',
            'Alimentación completa',
            'Tours en bote',
            'Observación de fauna',
            'Pesca deportiva'
        ],
        notIncluded: [
            'Equipo de pesca personal',
            'Gastos personales'
        ]
    },
    'pachitea': {
        name: 'Pachitea: Corazón Verde de Huánuco',
        duration: '5 días / 4 noches',
        price: 'S/ 600',
        destinations: 'Comunidades nativas, Pesca deportiva',
        includes: ['Hospedaje', 'Comidas', 'Guía nativo'],
        image: 'IMAGENES PAQUETES TURISTICOS SECUNDARIO/9.jpg',
        type: 'individual',
        description: 'Experiencia única en la selva de Pachitea, conviviendo con comunidades nativas y disfrutando de la pesca deportiva.',
        included: [
            'Hospedaje en comunidad nativa',
            'Alimentación completa',
            'Guía nativo',
            'Actividades culturales',
            'Pesca deportiva'
        ],
        notIncluded: [
            'Equipo de pesca profesional',
            'Gastos personales'
        ]
    },
    'puerto-inca': {
        name: 'Puerto Inca Explorador',
        duration: '3 días / 2 noches',
        price: 'S/ 400',
        destinations: 'Selva baja, Ríos hirviente',
        includes: ['Hospedaje', 'Comidas', 'Transporte fluvial'],
        image: 'IMAGENES PAQUETES TURISTICOS SECUNDARIO/10.jpg',
        type: 'individual',
        description: 'Explora la auténtica selva baja de Puerto Inca, navegando por ríos amazónicos y conociendo culturas amazónicas.',
        included: [
            'Hospedaje en la selva',
            'Alimentación completa',
            'Transporte fluvial',
            'Exploración de ríos',
            'Contacto con culturas amazónicas'
        ],
        notIncluded: [
            'Equipo de navegación',
            'Gastos personales'
        ]
    },
    'yarowilca': {
        name: 'Yarowilca Cultural',
        duration: '2 días / 1 noche',
        price: 'S/ 190',
        destinations: 'Festividades, Turismo vivencial',
        includes: ['Hospedaje', 'Comidas', 'Actividades culturales'],
        image: 'IMAGENES PAQUETES TURISTICOS SECUNDARIO/11.jpg',
        type: 'individual',
        description: 'Sumérgete en las tradiciones ancestrales de Yarowilca, participando en festividades culturales y turismo vivencial.',
        included: [
            'Hospedaje familiar',
            'Comidas tradicionales',
            'Actividades culturales',
            'Participación en festividades',
            'Turismo vivencial'
        ],
        notIncluded: [
            'Trajes típicos',
            'Gastos personales'
        ]
    },
    'ruta-colonial': {
        name: 'Ruta Colonial + Aventura',
        duration: '5 días / 4 noches',
        price: 'S/ 650',
        destinations: 'Huánuco + Ambo + Tingo María',
        includes: ['Hospedaje', 'Comidas', 'Transporte', 'Guías'],
        image: 'IMAGENES PAQUETES TURISTICOS SECUNDARIO/12.jpg',
        type: 'combo',
        description: 'Combina la riqueza colonial de Huánuco con la aventura de Ambo y la magia selvática de Tingo María en un solo paquete.',
        included: [
            'Hospedaje en cada destino',
            'Alimentación completa',
            'Transporte entre destinos',
            'Guías especializados',
            'Todas las entradas',
            'Seguro de viajero'
        ],
        notIncluded: [
            'Bebidas alcohólicas',
            'Gastos personales',
            'Souvenirs'
        ]
    },
    'circuito-andino': {
        name: 'Circuito Andino',
        duration: '6 días / 5 noches',
        price: 'S/ 800',
        destinations: 'Lauricocha + Dos de Mayo + Huamalíes',
        includes: ['Hospedaje', 'Comidas', 'Transporte 4x4'],
        image: 'IMAGENES PAQUETES TURISTICOS SECUNDARIO/13.jpg',
        type: 'combo',
        description: 'Recorre los paisajes altoandinos más espectaculares de Huánuco, combinando historia, arqueología y naturaleza.',
        included: [
            'Hospedaje en cada destino',
            'Alimentación completa',
            'Transporte 4x4',
            'Guías especializados',
            'Equipo de altura',
            'Seguro de montaña'
        ],
        notIncluded: [
            'Ropa de abrigo personal',
            'Medicamentos para soroche',
            'Gastos personales'
        ]
    },
    'amazonica': {
        name: 'Experiencia Amazónica',
        duration: '7 días / 6 noches',
        price: 'S/ 1200',
        destinations: 'Leoncio Prado + Marañón + Pachitea',
        includes: ['Hospedaje', 'Comidas', 'Tours especializados'],
        image: 'IMAGENES PAQUETES TURISTICOS SECUNDARIO/14.jpg',
        type: 'combo',
        description: 'Sumérgete completamente en la amazonía huanuqueña, explorando la biodiversidad y culturas de tres provincias selváticas.',
        included: [
            'Hospedaje en cada destino',
            'Alimentación completa',
            'Tours especializados',
            'Transporte terrestre y fluvial',
            'Guías naturalistas',
            'Seguro de aventura'
        ],
        notIncluded: [
            'Equipo de selva personal',
            'Vacunas',
            'Gastos personales'
        ]
    },
    'gran-tour': {
        name: 'Gran Tour Huánuco',
        duration: '10 días / 9 noches',
        price: 'S/ 1800',
        destinations: 'Recorrido por las 11 provincias',
        includes: ['Todo incluido', 'Guías especializados'],
        image: 'IMAGENES PAQUETES TURISTICOS SECUNDARIO/15.jpg',
        type: 'combo',
        description: 'La experiencia completa de Huánuco, recorriendo las 11 provincias y descubriendo toda la diversidad geográfica y cultural de la región.',
        included: [
            'Hospedaje en cada destino',
            'Alimentación completa',
            'Todo tipo de transporte',
            'Guías especializados',
            'Todas las entradas',
            'Seguro integral',
            'Souvenirs'
        ],
        notIncluded: [
            'Vuelos internacionales',
            'Gastos personales extra',
            'Bebidas alcohólicas premium'
        ]
    }
};

/**
 * Función principal para mostrar el detalle completo de un paquete turístico
 * Se activa cuando el usuario hace clic en un paquete específico
 * @param {string} packageId - ID único del paquete a mostrar
 */
function showPackageDetail(packageId) {
    const packageData = packagesData[packageId];
    
    // Validación de existencia del paquete
    if (!packageData) {
        console.error('Paquete no encontrado:', packageId);
        return;
    }

    // Ocultar la vista de rejilla de paquetes
    document.querySelector('.packages-grid').style.display = 'none';
    
    // Crear o obtener el contenedor de detalles
    const detailsContainer = document.getElementById('package-details-container') || createPackageDetailsContainer();

    // Mostrar el botón de navegación para volver
    document.querySelector('.back-button').style.display = 'inline-block';
    
    // Generar HTML del itinerario si existe
    let itineraryHtml = '';
    if (packageData.itinerary) {
        itineraryHtml = `
            <div class="package-itinerary">
                <h4>Itinerario detallado:</h4>
                <div class="itinerary">
                    ${packageData.itinerary.map(day => `
                        <div class="day">
                            <h5>Día ${day.day}: ${day.title}</h5>
                            <ul>
                                ${day.activities.map(activity => `<li>${activity}</li>`).join('')}
                            </ul>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    // Renderizar el contenido completo del detalle del paquete
    detailsContainer.innerHTML = `
        <div class="package-detail">
            <div class="package-detail-header">
                <img src="${packageData.image}" alt="${packageData.name}" class="package-detail-image">
                <div class="package-detail-info">
                    <h2>${packageData.name}</h2>
                    <div class="package-stats">
                        <div class="stat-item">
                            <strong>Duración:</strong> ${packageData.duration}
                        </div>
                        <div class="stat-item">
                            <strong>Precio:</strong> ${packageData.price} por persona
                        </div>
                        <div class="stat-item">
                            <strong>Tipo:</strong> ${packageData.type === 'combo' ? 'Paquete Combinado' : 'Paquete Individual'}
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="package-detail-content">
                <div class="package-description">
                    <h3>Descripción</h3>
                    <p>${packageData.description}</p>
                </div>
                
                <div class="package-destinations">
                    <h3>Destinos</h3>
                    <p>${packageData.destinations}</p>
                </div>
                
                ${itineraryHtml}
                
                <div class="package-includes">
                    <h3>Incluye</h3>
                    <ul>
                        ${packageData.included.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
                
                ${packageData.notIncluded ? `
                    <div class="package-not-includes">
                        <h3>No incluye</h3>
                        <ul>
                            ${packageData.notIncluded.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                ` : ''}
            </div>
        </div>
    `;
    
    // Hacer visible el contenedor de detalles
    detailsContainer.style.display = 'block';
    
    // Desplazar suavemente hacia el contenedor de detalles
    detailsContainer.scrollIntoView({ behavior: 'smooth' });
}

/**
 * Función auxiliar para crear el contenedor de detalles del paquete
 * Se ejecuta solo si no existe previamente en el DOM
 * @returns {HTMLElement} El contenedor creado
 */
function createPackageDetailsContainer() {
    const container = document.createElement('div');
    container.id = 'package-details-container';
    container.className = 'package-details-container';
    container.style.display = 'none';
    
    // Insertar el contenedor en la sección de paquetes
    const packagesSection = document.getElementById('paquetes');
    packagesSection.appendChild(container);
    
    return container;
}

/**
 * Función de navegación general para mostrar secciones
 * Maneja la transición entre la vista de detalles y la vista de rejilla
 * @param {string} sectionId - ID de la sección a mostrar
 */
function showSection(sectionId) {
    if (sectionId === 'paquetes') {
        // Ocultar la vista de detalles del paquete
        const detailsContainer = document.getElementById('package-details-container');
        if (detailsContainer) {
            detailsContainer.style.display = 'none';
        }
        
        // Restaurar la vista de rejilla de paquetes
        document.querySelector('.packages-grid').style.display = 'grid';
        
        // Ocultar el botón de navegación
        document.querySelector('.back-button').style.display = 'none';
        
        // Navegar suavemente a la sección de paquetes
        document.getElementById('paquetes').scrollIntoView({ behavior: 'smooth' });
    }
}

//////////////////////////////////////////////
// FIN DE LA SECCIÓN DE PAQUETES TURÍSTICOS //
//////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////
// SISTEMA DE RESERVACIÓN  //
////////////////////////////

/**
 * Sistema de Reservación de Paquetes Turísticos
 * Funcionalidades principales:
 * - Cálculo automático de precios y totales
 * - Validación de formularios en tiempo real
 * - Interfaz de usuario interactiva
 * - Confirmación de reservaciones
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // ===========================================
    // CONFIGURACIÓN INICIAL Y ELEMENTOS DOM
    // ===========================================
    
    // Elementos principales del formulario de reservación
    const form = document.querySelector('.reservation-form form');
    const packageSelect = document.getElementById('res-package');
    const travelersInput = document.getElementById('res-travelers');
    const dateInput = document.getElementById('res-date');
    const paymentSelect = document.getElementById('res-payment');
    const submitBtn = document.querySelector('.submit-btn');
    
    // Catálogo de precios por paquete turístico (en soles peruanos)
    const packagePrices = {
        'huanuco-colonial': 280,
        'aventura-ambo': 220,
        'tingo-maria': 450,
        'lauricocha': 350,
        'dos-mayo': 200,
        'huacaybamba': 300,
        'huamalies': 180,
        'marañon': 500,
        'pachitea': 600,
        'puerto-inca': 400,
        'yarowilca': 190,
        'ruta-colonial': 650,
        'circuito-andino': 800,
        'amazonica': 1200,
        'gran-tour': 1800
    };

    // Configurar fecha mínima permitida (desde mañana en adelante)
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    dateInput.min = tomorrow.toISOString().split('T')[0];

    // ===========================================
    // INICIALIZACIÓN DEL SISTEMA
    // ===========================================
    
    // Crear interfaz para mostrar el resumen de costos
    createTotalDisplay();

    // Configurar eventos del formulario
    packageSelect.addEventListener('change', calculateTotal);
    travelersInput.addEventListener('input', calculateTotal);
    form.addEventListener('submit', handleSubmit);
    
    // Activar validación en tiempo real de campos
    addRealTimeValidation();

    // ===========================================
    // FUNCIONES DE INTERFAZ DE USUARIO
    // ===========================================
    
    /**
     * Crea y muestra el panel de resumen de reservación
     * Incluye: paquete seleccionado, precio por persona, total y adelanto
     */
    function createTotalDisplay() {
        const totalDiv = document.createElement('div');
        totalDiv.className = 'total-display';
        totalDiv.innerHTML = `
            <div class="total-info">
                <h4>Resumen de la Reservación</h4>
                <div class="total-breakdown">
                    <div class="total-line">
                        <span>Paquete seleccionado:</span>
                        <span id="selected-package">-</span>
                    </div>
                    <div class="total-line">
                        <span>Precio por persona:</span>
                        <span id="price-per-person">S/ 0</span>
                    </div>
                    <div class="total-line">
                        <span>Número de viajeros:</span>
                        <span id="num-travelers">0</span>
                    </div>
                    <div class="total-line total-final">
                        <span><strong>Total:</strong></span>
                        <span id="total-price"><strong>S/ 0</strong></span>
                    </div>
                    <div class="total-line advance">
                        <span>Adelanto requerido (50%):</span>
                        <span id="advance-price">S/ 0</span>
                    </div>
                </div>
            </div>
        `;
        
        // Insertar el resumen antes del botón de envío
        form.insertBefore(totalDiv, submitBtn);
        
        // Aplicar estilos personalizados
        addTotalStyles();
    }

    /**
     * Calcula automáticamente el costo total de la reservación
     * Se ejecuta cuando cambia el paquete o número de viajeros
     */
    function calculateTotal() {
        const selectedPackage = packageSelect.value;
        const numTravelers = parseInt(travelersInput.value) || 0;
        
        const selectedPackageText = packageSelect.options[packageSelect.selectedIndex].text;
        const pricePerPerson = packagePrices[selectedPackage] || 0;
        const total = pricePerPerson * numTravelers;
        const advance = total * 0.5;
        
        // Actualizar todos los elementos del resumen
        document.getElementById('selected-package').textContent = 
            selectedPackage ? selectedPackageText.split(' - ')[0] : '-';
        document.getElementById('price-per-person').textContent = `S/ ${pricePerPerson}`;
        document.getElementById('num-travelers').textContent = numTravelers;
        document.getElementById('total-price').innerHTML = `<strong>S/ ${total}</strong>`;
        document.getElementById('advance-price').textContent = `S/ ${advance}`;
        
        // Mostrar/ocultar panel según si hay datos válidos
        const totalDisplay = document.querySelector('.total-display');
        if (selectedPackage && numTravelers > 0) {
            totalDisplay.style.display = 'block';
            totalDisplay.style.opacity = '1';
        } else {
            totalDisplay.style.opacity = '0.5';
        }
    }

    // ===========================================
    // PROCESAMIENTO DE RESERVACIONES
    // ===========================================
    
    /**
     * Procesa el envío del formulario de reservación
     * Incluye validación completa y simulación de envío
     */
    function handleSubmit(e) {
        e.preventDefault();
        
        // Validar todos los campos antes de procesar
        if (!validateForm()) {
            return;
        }
        
        // Mostrar indicador de procesamiento
        showLoading();
        
        // Simular procesamiento del servidor (aquí conectarías con tu backend)
        setTimeout(() => {
            hideLoading();
            showSuccessMessage();
            resetForm();
        }, 2000);
    }

    // ===========================================
    // SISTEMA DE VALIDACIÓN
    // ===========================================
    
    /**
     * Valida todos los campos del formulario
     * Retorna true si todos los campos son válidos
     */
    function validateForm() {
        const requiredFields = form.querySelectorAll('[required]');
        let isValid = true;
        
        // Validar campos obligatorios
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                showFieldError(field, 'Este campo es obligatorio');
                isValid = false;
            } else {
                clearFieldError(field);
            }
        });
        
        // Validaciones específicas por tipo de campo
        if (!validateEmail(document.getElementById('res-email').value)) {
            showFieldError(document.getElementById('res-email'), 'Email inválido');
            isValid = false;
        }
        
        if (!validatePhone(document.getElementById('res-phone').value)) {
            showFieldError(document.getElementById('res-phone'), 'Teléfono inválido');
            isValid = false;
        }
        
        if (!validateDNI(document.getElementById('res-dni').value)) {
            showFieldError(document.getElementById('res-dni'), 'DNI inválido (8 dígitos)');
            isValid = false;
        }
        
        if (!validateDate(document.getElementById('res-date').value)) {
            showFieldError(document.getElementById('res-date'), 'Fecha debe ser futura');
            isValid = false;
        }
        
        return isValid;
    }

    /**
     * Validadores específicos para diferentes tipos de datos
     */
    
    // Validador de formato de email
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Validador de número telefónico peruano (9 dígitos)
    function validatePhone(phone) {
        const phoneRegex = /^[0-9]{9}$/;
        return phoneRegex.test(phone.replace(/\s/g, ''));
    }
    
    // Validador de DNI peruano (8 dígitos)
    function validateDNI(dni) {
        const dniRegex = /^[0-9]{8}$/;
        return dniRegex.test(dni);
    }
    
    // Validador de fecha (debe ser futura)
    function validateDate(date) {
        const selectedDate = new Date(date);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return selectedDate > today;
    }

    // ===========================================
    // MANEJO DE ERRORES EN FORMULARIO
    // ===========================================
    
    /**
     * Muestra mensaje de error específico para un campo
     */
    function showFieldError(field, message) {
        clearFieldError(field);
        
        const errorDiv = document.createElement('div');
        errorDiv.className = 'field-error';
        errorDiv.textContent = message;
        
        field.parentNode.appendChild(errorDiv);
        field.classList.add('error');
    }

    /**
     * Limpia los mensajes de error de un campo específico
     */
    function clearFieldError(field) {
        const existingError = field.parentNode.querySelector('.field-error');
        if (existingError) {
            existingError.remove();
        }
        field.classList.remove('error');
    }

    /**
     * Configura validación en tiempo real para campos críticos
     * Se ejecuta cuando el usuario sale del campo (evento blur)
     */
    function addRealTimeValidation() {
        const emailField = document.getElementById('res-email');
        const phoneField = document.getElementById('res-phone');
        const dniField = document.getElementById('res-dni');
        
        // Validación inmediata de email
        emailField.addEventListener('blur', function() {
            if (this.value && !validateEmail(this.value)) {
                showFieldError(this, 'Email inválido');
            } else {
                clearFieldError(this);
            }
        });
        
        // Validación inmediata de teléfono
        phoneField.addEventListener('blur', function() {
            if (this.value && !validatePhone(this.value)) {
                showFieldError(this, 'Teléfono inválido (9 dígitos)');
            } else {
                clearFieldError(this);
            }
        });
        
        // Validación inmediata de DNI
        dniField.addEventListener('blur', function() {
            if (this.value && !validateDNI(this.value)) {
                showFieldError(this, 'DNI inválido (8 dígitos)');
            } else {
                clearFieldError(this);
            }
        });
    }

    // ===========================================
    // INDICADORES DE ESTADO
    // ===========================================
    
    /**
     * Muestra indicador de carga durante el procesamiento
     */
    function showLoading() {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="loading-spinner"></span> Procesando...';
        submitBtn.classList.add('loading');
    }

    /**
     * Oculta indicador de carga y restaura botón normal
     */
    function hideLoading() {
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'Realizar Reservación';
        submitBtn.classList.remove('loading');
    }

    // ===========================================
    // CONFIRMACIÓN DE RESERVACIÓN
    // ===========================================
    
    /**
     * Muestra mensaje de confirmación detallado tras procesar la reservación
     * Incluye resumen completo y próximos pasos
     */
    function showSuccessMessage() {
        const selectedPackage = packageSelect.options[packageSelect.selectedIndex].text.split(' - ')[0];
        const numTravelers = travelersInput.value;
        const selectedDate = new Date(dateInput.value).toLocaleDateString('es-PE', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        const clientName = document.getElementById('res-name').value;
        
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.innerHTML = `
            <div class="success-content">
                <div class="success-icon">
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" stroke="#28a745" stroke-width="2"/>
                        <path d="m9 12 2 2 4-4" stroke="#28a745" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <h3>¡Reservación Recibida Exitosamente!</h3>
                <div class="reservation-details">
                    <p><strong>Estimado(a) ${clientName},</strong></p>
                    <p>Hemos recibido tu solicitud de reservación con los siguientes detalles:</p>
                    
                    <div class="details-box">
                        <div class="detail-item">
                            <span class="detail-label">📦 Paquete:</span>
                            <span class="detail-value">${selectedPackage}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">👥 Viajeros:</span>
                            <span class="detail-value">${numTravelers} persona(s)</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">📅 Fecha:</span>
                            <span class="detail-value">${selectedDate}</span>
                        </div>
                    </div>
                    
                    <div class="next-steps">
                        <h4>📋 Próximos pasos:</h4>
                        <ul>
                            <li>Te contactaremos dentro de las próximas <strong>24 horas</strong> para confirmar tu reservación</li>
                            <li>Recibirás un <strong>correo electrónico</strong> con los detalles completos del paquete</li>
                            <li>Nuestro equipo coordinará contigo los <strong>métodos de pago</strong> y fechas exactas</li>
                        </ul>
                    </div>
                    
                    <div class="contact-info">
                        <p><strong>¿Necesitas ayuda inmediata?</strong></p>
                        <p>📞 Llámanos al: <strong>(+51) 983 647 983</strong></p>
                        <p>📧 Email: <strong>TourCADD@gmail.com</strong></p>
                    </div>
                </div>
                
                <button class="close-btn" onclick="this.closest('.success-message').remove()">
                    Entendido
                </button>
            </div>
        `;
        
        document.body.appendChild(successDiv);
        
        // Auto-cerrar el mensaje después de 30 segundos
        setTimeout(() => {
            if (successDiv.parentNode) {
                successDiv.remove();
            }
        }, 30000);
    }

    // ===========================================
    // FUNCIONES UTILITARIAS
    // ===========================================
    
    /**
     * Resetea completamente el formulario tras envío exitoso
     */
    function resetForm() {
        form.reset();
        calculateTotal();
        
        // Limpiar todos los mensajes de error
        const errorElements = form.querySelectorAll('.field-error');
        errorElements.forEach(error => error.remove());
        
        const errorFields = form.querySelectorAll('.error');
        errorFields.forEach(field => field.classList.remove('error'));
    }

    /**
     * Aplica estilos CSS personalizados para el panel de resumen
     */
    function addTotalStyles() {
        const styles = ``;
        
        const styleSheet = document.createElement('style');
        styleSheet.textContent = styles;
        document.head.appendChild(styleSheet);
    }

    // ===========================================
    // INICIALIZACIÓN FINAL
    // ===========================================
    
    // Ejecutar cálculo inicial del total
    calculateTotal();
    
    // Confirmar inicialización exitosa en consola
    console.log('Sistema de Reservación inicializado correctamente');
});

//////////////////////////////////////
// FIN DEL SISTEMA DE RESERVACIÓN   //
//////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////
// SISTEMA DE ATENCIÓN AL CLIENTE  //
//         TransCADD - v1.0         //
////////////////////////////////////

/**
 * Sistema completo de atención al cliente para TransCADD
 * Incluye: Formulario de reclamaciones, validación en tiempo real,
 * integración con WhatsApp, gestión de contactos y notificaciones
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================
    // CONFIGURACIÓN PRINCIPAL DEL SISTEMA
    // ==========================================
    
    const config = {
        whatsappNumber: '+51983647983',
        email: 'info@tourcadd.com',
        phone: '+51994120211',
        businessHours: {
            start: 8,
            end: 20
        }
    };

    // ==========================================
    // SELECCIÓN DE ELEMENTOS DEL DOM
    // ==========================================
    
    const form = document.querySelector('.complaints-form form');
    const submitBtn = document.querySelector('.submit-btn');
    const contactDetails = document.querySelector('.contact-details');
    
    // ==========================================
    // INICIALIZACIÓN DEL SISTEMA
    // ==========================================
    
    init();

    function init() {
        setupFormValidation();      // Configurar validación del formulario
        setupContactInteractions(); // Configurar interacciones de contacto
        setupBusinessHours();       // Configurar horarios de atención
        setupSocialMediaLinks();    // Configurar enlaces de redes sociales
        setupOfficeInfo();          // Configurar información de oficina
        addAnimations();            // Agregar animaciones
        addNotificationStyles();    // Agregar estilos de notificaciones
    }

    // ==========================================
    // SISTEMA DE VALIDACIÓN DE FORMULARIOS
    // ==========================================
    
    /**
     * Configura la validación en tiempo real del formulario de reclamaciones
     */
    function setupFormValidation() {
        if (!form) return;

        // Validación en tiempo real para todos los campos
        const inputs = form.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', validateField);
            input.addEventListener('input', clearErrors);
        });

        // Manejo del envío del formulario
        form.addEventListener('submit', handleFormSubmit);
    }

    /**
     * Valida un campo específico según su tipo
     */
    function validateField(e) {
        const field = e.target;
        const value = field.value.trim();
        const fieldName = field.name;

        clearFieldError(field);

        switch(fieldName) {
            case 'name':
                if (value.length < 2) {
                    showFieldError(field, 'El nombre debe tener al menos 2 caracteres');
                    return false;
                }
                break;
            case 'email':
                if (!isValidEmail(value)) {
                    showFieldError(field, 'Por favor ingrese un email válido');
                    return false;
                }
                break;
            case 'phone':
                if (!isValidPhone(value)) {
                    showFieldError(field, 'Por favor ingrese un número de teléfono válido');
                    return false;
                }
                break;
            case 'type':
                if (!value) {
                    showFieldError(field, 'Por favor seleccione un tipo');
                    return false;
                }
                break;
            case 'message':
                if (value.length < 10) {
                    showFieldError(field, 'El mensaje debe tener al menos 10 caracteres');
                    return false;
                }
                break;
        }
        return true;
    }

    /**
     * Limpia errores de validación al escribir en el campo
     */
    function clearErrors() {
        clearFieldError(this);
    }

    /**
     * Muestra mensaje de error para un campo específico
     */
    function showFieldError(field, message) {
        clearFieldError(field);
        field.classList.add('error');
        
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        
        field.parentNode.appendChild(errorDiv);
    }

    /**
     * Elimina mensaje de error de un campo
     */
    function clearFieldError(field) {
        field.classList.remove('error');
        const errorMessage = field.parentNode.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.remove();
        }
    }

    /**
     * Valida formato de email
     */
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    /**
     * Valida formato de teléfono
     */
    function isValidPhone(phone) {
        const phoneRegex = /^[\+]?[0-9\s\-\(\)]{9,15}$/;
        return phoneRegex.test(phone);
    }

    /**
     * Procesa el envío del formulario con validación completa
     */
    function handleFormSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Validar todos los campos antes del envío
        let isValid = true;
        const inputs = form.querySelectorAll('input, select, textarea');
        
        inputs.forEach(input => {
            if (!validateField({target: input})) {
                isValid = false;
            }
        });

        if (!isValid) {
            showNotification('Por favor corrija los errores en el formulario', 'error');
            return;
        }

        // Simular proceso de envío
        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando...';
        
        setTimeout(() => {
            // Simular respuesta exitosa del servidor
            showNotification('¡Reclamación enviada exitosamente! Te contactaremos pronto.', 'success');
            form.reset();
            submitBtn.disabled = false;
            submitBtn.textContent = 'Enviar Reclamación';
            
        }, 2000);
    }

    // ==========================================
    // SISTEMA DE INTERACCIONES DE CONTACTO
    // ==========================================
    
    /**
     * Configura todas las interacciones de contacto disponibles
     */
    function setupContactInteractions() {
        addWhatsAppButton();    // Botón de WhatsApp
        addPhoneClick();        // Click para llamar
        addEmailClick();        // Click para enviar email
    }

    /**
     * Agrega botón de WhatsApp al área de contacto
     */
    function addWhatsAppButton() {
        const whatsappInfo = document.querySelector('.contact-details p:nth-child(3)');
        if (whatsappInfo) {
            const whatsappBtn = document.createElement('button');
            whatsappBtn.className = 'whatsapp-btn';
            whatsappBtn.innerHTML = '💬 Abrir WhatsApp';
            whatsappBtn.onclick = () => openWhatsApp();
            whatsappInfo.appendChild(whatsappBtn);
        }
    }

    /**
     * Habilita click en número de teléfono para llamar directamente
     */
    function addPhoneClick() {
        const phoneInfo = document.querySelector('.contact-details p:nth-child(2)');
        if (phoneInfo) {
            phoneInfo.style.cursor = 'pointer';
            phoneInfo.onclick = () => {
                window.location.href = `tel:${config.phone}`;
            };
        }
    }

    /**
     * Habilita click en email para abrir cliente de correo
     */
    function addEmailClick() {
        const emailInfo = document.querySelector('.contact-details p:nth-child(1)');
        if (emailInfo) {
            emailInfo.style.cursor = 'pointer';
            emailInfo.onclick = () => {
                window.location.href = `mailto:${config.email}`;
            };
        }
    }

    /**
     * Abre WhatsApp con mensaje predeterminado
     */
    function openWhatsApp() {
        const message = encodeURIComponent('Hola, me gustaría obtener información sobre los servicios de TransCADD.');
        const whatsappUrl = `https://wa.me/${config.whatsappNumber.replace(/\s+/g, '')}?text=${message}`;
        window.open(whatsappUrl, '_blank');
    }

    // ==========================================
    // SISTEMA DE REDES SOCIALES
    // ==========================================
    
    /**
     * Configura enlaces interactivos a redes sociales
     */
    function setupSocialMediaLinks() {
        const socialSection = document.querySelector('.social-media');
        if (socialSection) {
            const socialLinks = {
                Facebook: 'https://facebook.com/TransCADDTurismo',
                Instagram: 'https://instagram.com/transcadd_oficial',
                TikTok: 'https://tiktok.com/@transcadd_tours',
                YouTube: 'https://youtube.com/channel/TransCADDTurismoHuanuco'
            };

            const socialPs = socialSection.querySelectorAll('p');
            socialPs.forEach((p, index) => {
                const platform = Object.keys(socialLinks)[index];
                if (platform) {
                    p.style.cursor = 'pointer';
                    p.onclick = () => window.open(socialLinks[platform], '_blank');
                }
            });
        }
    }

    // ==========================================
    // SISTEMA DE NOTIFICACIONES
    // ==========================================
    
    /**
     * Agrega estilos CSS para el sistema de notificaciones
     */
    function addNotificationStyles() {
        const styles = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 1000;
                padding: 15px 25px;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                font-weight: 500;
                font-size: 14px;
                transform: translateX(400px);
                opacity: 0;
                transition: all 0.3s ease;
                min-width: 300px;
                max-width: 400px;
            }
            
            .notification.show {
                transform: translateX(0);
                opacity: 1;
            }
            
            .notification.success {
                background: #d4edda;
                border: 1px solid #c3e6cb;
                color: #155724;
            }
            
            .notification.error {
                background: #f8d7da;
                border: 1px solid #f5c6cb;
                color: #721c24;
            }
            
            .notification.info {
                background: #d1ecf1;
                border: 1px solid #bee5eb;
                color: #0c5460;
            }
        `;
        
        const styleSheet = document.createElement('style');
        styleSheet.textContent = styles;
        document.head.appendChild(styleSheet);
    }

    // ==========================================
    // FUNCIONES UTILITARIAS
    // ==========================================
    
    /**
     * Genera número de seguimiento único para reclamaciones
     */
    function generateTrackingNumber() {
        const date = new Date();
        const timestamp = date.getTime();
        const random = Math.floor(Math.random() * 1000);
        return `TC-${timestamp}-${random}`;
    }

    /**
     * Muestra notificación temporal en pantalla
     */
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);
        
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 4000);
    }

});

//////////////////////////////////////////////
// FIN DEL SISTEMA DE ATENCIÓN AL CLIENTE  //
//////////////////////////////////////////////