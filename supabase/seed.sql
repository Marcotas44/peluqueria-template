-- =====================================================================
--  DATOS DEMO — Ejecutar despues de schema.sql
-- =====================================================================

-- Negocio demo (slug = el mismo que PUBLIC_BUSINESS_SLUG)
insert into negocios (slug, nombre, categoria, ciudad, telefono, whatsapp, email, direccion, owner_email)
values (
  'peluqueria-demo',
  'Peluqueria Demo',
  'Peluqueria',
  'Madrid',
  '+34 600 123 456',
  '34600123456',
  'hola@peluqueriademo.es',
  'Calle Ejemplo 12, 28001 Madrid',
  'dueno@peluqueriademo.es'
)
on conflict (slug) do nothing;

-- Servicios demo
insert into servicios (business_id, nombre, precio, duracion_min, orden)
select id, x.nombre, x.precio, x.dur, x.orden
from negocios n,
  (values
    ('Corte mujer', 18.00, 45, 1),
    ('Corte caballero', 14.00, 30, 2),
    ('Color / tinte', 35.00, 90, 3),
    ('Mechas / balayage', 55.00, 120, 4),
    ('Peinado y recogido', 20.00, 45, 5),
    ('Tratamiento hidratacion', 25.00, 40, 6)
  ) as x(nombre, precio, dur, orden)
where n.slug = 'peluqueria-demo';

-- Cliente demo
insert into clientes (business_id, nombre, telefono, email)
select id, 'Cliente Ejemplo', '600999888', 'cliente@ejemplo.es'
from negocios where slug = 'peluqueria-demo'
on conflict do nothing;

-- Lead demo
insert into leads (business_id, business_slug, nombre, telefono, email, servicio, mensaje, origen, estado)
select id, 'peluqueria-demo', 'Ana García', '600111222', 'ana@ejemplo.es',
       'Mechas / balayage', 'Querría cita para el sábado por la mañana', 'web', 'nuevo'
from negocios where slug = 'peluqueria-demo';

-- Config demo
insert into configuraciones (business_id, clave, valor)
select id, 'autorespuesta', 'Gracias por contactar con Peluqueria Demo. Te respondemos en breve.'
from negocios where slug = 'peluqueria-demo'
on conflict (business_id, clave) do nothing;
