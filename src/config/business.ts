// =====================================================================
//  CONFIG POR NEGOCIO  —  Edita SOLO este archivo para cada cliente.
//  Cambia textos, colores, servicios, fotos y datos de contacto.
//  Nada mas que tocar para lanzar un cliente nuevo.
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
  slug: 'peluqueria-demo',
  name: 'Peluquería Demo',
  tagline: 'Tu estilo, nuestro oficio',
  city: 'Madrid',
  category: 'Peluquería',

  phone: '+34 600 123 456',
  phoneRaw: '+34600123456',
  whatsapp: '34600123456',
  whatsappMessage: 'Hola, me gustaría pedir una cita 💇',
  email: 'hola@peluqueriademo.es',
  address: 'Calle Ejemplo 12, 28001 Madrid',
  mapsUrl: 'https://maps.google.com/?q=Peluqueria+Demo+Madrid',
  mapsEmbedQuery: 'Peluqueria Demo Madrid',
  instagram: 'https://instagram.com/peluqueriademo',

  brand: {
    primary: '#111111',
    accent: '#c9a24b',
    dark: '#1a1a1a',
    light: '#faf8f4',
    font: "'Poppins', system-ui, sans-serif",
  },
  heroImage:
    'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1600&q=80',
  logoText: 'Peluquería Demo',

  about:
    'Más de 15 años cuidando el cabello de nuestros clientes. Cortes, color y tratamientos con producto profesional en un espacio cómodo y cercano. Pide tu cita y deja el resto en nuestras manos.',

  services: [
    { name: 'Corte mujer', price: '18€', duration: '45 min' },
    { name: 'Corte caballero', price: '14€', duration: '30 min' },
    { name: 'Color / tinte', price: 'desde 35€', duration: '90 min' },
    { name: 'Mechas / balayage', price: 'desde 55€', duration: '120 min' },
    { name: 'Peinado y recogido', price: 'desde 20€', duration: '45 min' },
    { name: 'Tratamiento hidratación', price: '25€', duration: '40 min' },
  ],

  hours: [
    { day: 'Lunes', hours: 'Cerrado' },
    { day: 'Martes', hours: '10:00 - 20:00' },
    { day: 'Miércoles', hours: '10:00 - 20:00' },
    { day: 'Jueves', hours: '10:00 - 20:00' },
    { day: 'Viernes', hours: '10:00 - 20:00' },
    { day: 'Sábado', hours: '09:00 - 14:00' },
    { day: 'Domingo', hours: 'Cerrado' },
  ],

  gallery: [
    { src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80', alt: 'Corte y peinado' },
    { src: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=800&q=80', alt: 'Color' },
    { src: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80', alt: 'Barbería' },
    { src: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=800&q=80', alt: 'Salón' },
    { src: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80', alt: 'Producto' },
    { src: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80', alt: 'Detalle' },
  ],

  reviews: [
    { author: 'María L.', rating: 5, text: 'El mejor color que me han hecho nunca. Muy atentos y profesionales.' },
    { author: 'Javier R.', rating: 5, text: 'Voy desde hace años. Nunca fallan. Recomendado 100%.' },
    { author: 'Lucía P.', rating: 5, text: 'Salí encantada con mi corte. Ambiente súper agradable.' },
  ],
  googleRating: { score: 4.9, count: 187 },

  onlineBooking: { enabled: false, url: '' },

  seo: {
    title: 'Peluquería Demo en Madrid | Corte, color y tratamientos',
    description:
      'Peluquería en Madrid especializada en corte, color, mechas y tratamientos. Pide tu cita por WhatsApp o teléfono. Más de 15 años de experiencia.',
    keywords:
      'peluquería Madrid, corte de pelo Madrid, color pelo Madrid, mechas balayage Madrid, peluquería cerca de mí',
  },
};

export default business;
