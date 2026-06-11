-- =====================================================================
--  SUPABASE — Esquema MVP multi-negocio (peluquerias y pequenos negocios)
--  Ejecutar en: Supabase > SQL Editor > New query > Run
--  Multi-tenant: cada fila pertenece a un negocio (business_id).
-- =====================================================================

-- Extension para UUIDs
create extension if not exists "pgcrypto";

-- ---------------------------------------------------------------------
-- NEGOCIOS
-- ---------------------------------------------------------------------
create table if not exists negocios (
  id          uuid primary key default gen_random_uuid(),
  slug        text unique not null,          -- coincide con PUBLIC_BUSINESS_SLUG
  nombre      text not null,
  categoria   text default 'Peluqueria',
  ciudad      text,
  telefono    text,
  whatsapp    text,
  email       text,
  direccion   text,
  owner_email text,                          -- para avisos
  owner_telegram text,                       -- chat id de Telegram (opcional)
  created_at  timestamptz default now()
);

-- ---------------------------------------------------------------------
-- SERVICIOS
-- ---------------------------------------------------------------------
create table if not exists servicios (
  id          uuid primary key default gen_random_uuid(),
  business_id uuid not null references negocios(id) on delete cascade,
  nombre      text not null,
  precio      numeric(10,2),
  duracion_min int,
  descripcion text,
  activo      boolean default true,
  orden       int default 0,
  created_at  timestamptz default now()
);

-- ---------------------------------------------------------------------
-- CLIENTES
-- ---------------------------------------------------------------------
create table if not exists clientes (
  id          uuid primary key default gen_random_uuid(),
  business_id uuid not null references negocios(id) on delete cascade,
  nombre      text,
  telefono    text,
  email       text,
  notas       text,
  created_at  timestamptz default now(),
  unique (business_id, telefono)
);

-- ---------------------------------------------------------------------
-- LEADS  (contactos entrantes desde web, google, whatsapp...)
-- ---------------------------------------------------------------------
create table if not exists leads (
  id          uuid primary key default gen_random_uuid(),
  business_id uuid references negocios(id) on delete cascade,
  business_slug text,                        -- por si llega antes de resolver id
  nombre      text,
  telefono    text,
  email       text,
  servicio    text,
  mensaje     text,
  origen      text default 'web',            -- web | google | whatsapp | formulario | instagram
  estado      text default 'nuevo',          -- nuevo | contactado | cita | descartado
  clasificacion text,                        -- opcional (caliente/tibio/frio via IA)
  pagina      text,
  created_at  timestamptz default now()
);

-- ---------------------------------------------------------------------
-- CITAS
-- ---------------------------------------------------------------------
create table if not exists citas (
  id          uuid primary key default gen_random_uuid(),
  business_id uuid not null references negocios(id) on delete cascade,
  cliente_id  uuid references clientes(id) on delete set null,
  servicio_id uuid references servicios(id) on delete set null,
  inicio      timestamptz not null,
  fin         timestamptz,
  estado      text default 'pendiente',      -- pendiente | confirmada | cancelada | no_show | completada
  notas       text,
  created_at  timestamptz default now()
);

-- ---------------------------------------------------------------------
-- MENSAJES  (log de comunicaciones: autorespuestas, recordatorios...)
-- ---------------------------------------------------------------------
create table if not exists mensajes (
  id          uuid primary key default gen_random_uuid(),
  business_id uuid references negocios(id) on delete cascade,
  lead_id     uuid references leads(id) on delete set null,
  cliente_id  uuid references clientes(id) on delete set null,
  canal       text,                          -- email | whatsapp | telegram
  direccion   text default 'saliente',       -- entrante | saliente
  asunto      text,
  cuerpo      text,
  estado      text default 'enviado',
  created_at  timestamptz default now()
);

-- ---------------------------------------------------------------------
-- CONFIGURACIONES  (clave/valor por negocio)
-- ---------------------------------------------------------------------
create table if not exists configuraciones (
  id          uuid primary key default gen_random_uuid(),
  business_id uuid not null references negocios(id) on delete cascade,
  clave       text not null,
  valor       text,
  unique (business_id, clave)
);

-- ---------------------------------------------------------------------
-- INDICES utiles
-- ---------------------------------------------------------------------
create index if not exists idx_leads_business on leads(business_id);
create index if not exists idx_leads_estado on leads(estado);
create index if not exists idx_citas_business_inicio on citas(business_id, inicio);
create index if not exists idx_servicios_business on servicios(business_id);

-- =====================================================================
--  RLS (Row Level Security)
--  Para PRUEBAS rapidas puedes dejar RLS DESACTIVADO (por defecto lo esta).
--  El backend escribe con la SERVICE_ROLE key (n8n), que ignora RLS.
--
--  Cuando quieras activar seguridad, descomenta el bloque siguiente.
--  Politica simple: la web (anon) solo puede INSERTAR leads; nada mas.
-- =====================================================================

-- alter table leads enable row level security;
-- create policy "anon puede insertar leads"
--   on leads for insert to anon with check (true);

-- alter table servicios enable row level security;
-- create policy "anon puede leer servicios activos"
--   on servicios for select to anon using (activo = true);

-- (negocios, clientes, citas, mensajes, configuraciones:
--  deja RLS activado SIN politicas anon => solo service_role accede.)
