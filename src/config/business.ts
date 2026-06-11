// =====================================================================
//  CONFIG POR NEGOCIO  —  Edita SOLO este archivo para cada cliente.
//  Cambia textos, colores, servicios, fotos y datos de contacto.
//  Nada mas que tocar para lanzar un cliente nuevo.
//
//  CLIENTE: Lúa Estilistas — Narón (área de Ferrol), A Coruña.
//  Identidad: elegante, moderna, cercana, gallega. Blanco / negro / dorado.
//  (Datos de muestra realistas. Sustituir por los reales del salón.)
// =====================================================================

export interface Service {
  name: string;
  price: string;
  duration?: string;
  description?: string;
}

export interface Review {
  author: string;
  rating: number; // 1-5
  text: string;
}

export interface HourRow {
  day: string;
  hours: string; // "10:00 - 20:00" o "Cerrado"
}

export interface BusinessConfig {
  slug: string;            // identificador unico, igual a PUBLIC_BUSINESS_SLUG
  name: string;
  tagline: string;
  city: string;            // para SEO local
  category: string;        // "Peluqueria", "Barberia", "Centro de estetica"...
  // Contacto
  phone: string;           // formato visible "+34 600 000 000"
  phoneRaw: string;        // formato para tel: "+34600000000"
  whatsapp: string;        // numero internacional sin signos "34600000000"
  whatsappMessage: string; // mensaje precargado
  email: string;
  address: string;
  mapsUrl: string;         // enlace directo a Google Maps
  mapsEmbedQuery: string;  // texto para el mapa incrustado
  instagram?: string;
  // Marca / estilo
  brand: {
    primary: string;       // color principal
    accent: string;        // color acento
    dark: string;
    light: string;
    font: string;
  };
  heroImage: string;       // ruta en /public o URL
  logoText: string;
  // Contenido
  about: string;
  services: Service[];
  hours: HourRow[];
  gallery: { src: string; alt: string }[];
  reviews: Review[];
  googleRating?: { score: number; count: number };
  onlineBooking?: { enabled: boolean; url?: string };
  // SEO
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
}

export const business: BusinessConfig = {
  slug: 'lua-estilistas',
  name: 'Lúa Estilistas',
  tagline: 'Color, corte y cuidado del cabello con mirada gallega. En el corazón de Narón.',
  city: 'Narón',
  category: 'Peluquería',

  phone: '+34 981 39 21 00',
  phoneRaw: '+34981392100',
  whatsapp: '34698123456',
  whatsappMessage: 'Hola Lúa Estilistas 👋 Me gustaría reservar cita. ¿Qué disponibilidad tenéis esta semana?',
  email: 'hola@luaestilistas.es',
  address: 'Estrada de Castela 75, 15570 Narón (A Coruña)',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=peluquer%C3%ADa+Estrada+de+Castela+Nar%C3%B3n',
  mapsEmbedQuery: 'Estrada de Castela 75, 15570 Narón, A Coruña',
  instagram: 'https://instagram.com/luaestilistas',

  brand: {
    primary: '#0e0e0e',   // negro
    accent: '#c6a662',    // dorado suave
    dark: '#161616',
    light: '#ffffff',     // blanco
    font: "'Poppins', system-ui, sans-serif",
  },
  heroImage:
    'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&w=1600&q=80',
  logoText: 'Lúa Estilistas',

  about:
    'Lúa Estilistas nace en Narón con una idea sencilla: tratar cada cabeza como si fuese la nuestra. Somos un salón cercano y cuidado, donde el café está siempre listo y nadie sale por la puerta sin sentirse a gusto. Trabajamos con marcas profesionales y asesoramos de verdad —te decimos lo que de verdad le va a tu pelo, no lo que toca vender. Color, mechas, tratamientos y cortes para toda la familia, a un paso de Ferrol.',

  services: [
    { name: 'Corte y peinado mujer', price: '22€', duration: '45 min', description: 'Lavado, corte personalizado y acabado.' },
    { name: 'Corte caballero', price: '14€', duration: '30 min' },
    { name: 'Corte infantil', price: '11€', duration: '25 min' },
    { name: 'Color / tinte raíz', price: 'desde 33€', duration: '90 min', description: 'Cobertura de canas y brillo, con lavado y peinado.' },
    { name: 'Mechas / balayage', price: 'desde 60€', duration: '120 min', description: 'Iluminación a medida según tu tono y tu rostro.' },
    { name: 'Tratamiento hidratación profunda', price: '25€', duration: '40 min', description: 'Para cabello castigado por sal, sol o color.' },
    { name: 'Alisado / keratina', price: 'desde 68€', duration: '120 min', description: 'Pelo manejable y sin encrespamiento durante semanas.' },
    { name: 'Recogido y peinado de evento', price: 'desde 30€', duration: '50 min', description: 'Bodas, comuniones y celebraciones.' },
  ],

  hours: [
    { day: 'Lunes', hours: 'Cerrado' },
    { day: 'Martes', hours: '09:30 - 13:30 · 16:30 - 20:30' },
    { day: 'Miércoles', hours: '09:30 - 13:30 · 16:30 - 20:30' },
    { day: 'Jueves', hours: '09:30 - 13:30 · 16:30 - 20:30' },
    { day: 'Viernes', hours: '09:30 - 20:30' },
    { day: 'Sábado', hours: '09:00 - 14:00' },
    { day: 'Domingo', hours: 'Cerrado' },
  ],

  gallery: [
    { src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80', alt: 'Corte y peinado en Lúa Estilistas, Narón' },
    { src: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=800&q=80', alt: 'Color y mechas' },
    { src: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=800&q=80', alt: 'Lavado y tratamiento capilar' },
    { src: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=800&q=80', alt: 'Interior del salón' },
    { src: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80', alt: 'Producto profesional' },
    { src: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&w=800&q=80', alt: 'Resultado de balayage' },
  ],

  reviews: [
    { author: 'María do Carme', rating: 5, text: 'Llevo años viniendo y nunca me fallan. El balayage me dura muchísimo y siempre me aconsejan con sinceridad. Lo mejor de Narón.' },
    { author: 'Brais V.', rating: 5, text: 'Trato cercano y muy buen corte. Vengo con mi hijo y se portan genial con los peques. Salimos siempre contentos.' },
    { author: 'Antía R.', rating: 5, text: 'Me peinaron para una boda en Ferrol y quedé encantadísima. Elegantes, puntuales y muy majas. Repetiré seguro.' },
    { author: 'Noa F.', rating: 5, text: 'Pedí cita por WhatsApp en dos minutos. Me cuidaron el pelo después de un verano de playa en Doniños. De diez.' },
  ],
  googleRating: { score: 4.9, count: 168 },

  onlineBooking: { enabled: false, url: '' },

  seo: {
    title: 'Lúa Estilistas | Peluquería en Narón (Ferrol) · color, mechas y tratamientos',
    description:
      'Peluquería en Narón, junto a Ferrol. Corte de mujer, hombre y niños, color, mechas, balayage, keratina y peinados de evento. Reserva por WhatsApp o teléfono. Trato cercano y producto profesional.',
    keywords:
      'peluquería Narón, peluquería Ferrol, Lúa Estilistas, corte de pelo Narón, mechas Ferrol, balayage Narón, tinte Narón, alisado keratina Narón, peluquería cerca de mí Ferrol, recogidos Narón',
  },
};

export default business;
