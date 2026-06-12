# CLAUDE.md

Guía para trabajar en este repositorio con Claude Code.

## Qué es este proyecto

Plantilla web **reutilizable para negocios locales** (peluquerías, barberías, estética).
Stack: **Astro + Netlify + n8n + Supabase**.

- **Astro** (`output: 'static'`) → web estática servida por **Netlify** (solo escaparate, sin backend propio).
- **n8n** → automatización: recibe el formulario por webhook, guarda el lead y avisa al dueño.
- **Supabase** (Postgres, multi-tenant por `business_id`) → base de datos de negocios, leads, citas.

Flujo de un lead: formulario web → `fetch` POST al webhook de n8n → Supabase → email/Telegram al dueño + autorespuesta al cliente.

## Reglas de trabajo (IMPORTANTE)

1. **Modifica siempre los archivos reales del proyecto.** No describas cambios en abstracto ni pegues código para que el usuario lo copie: edítalo directamente con las herramientas de archivos.
2. **No te limites a dar explicaciones.** Cada petición de cambio debe terminar en archivos modificados, no en un resumen teórico.
3. **Verifica el build cuando cambies código.** Tras tocar `src/`, config o dependencias, ejecuta `npm run build` y confirma que pasa antes de darlo por hecho. Reporta el resultado real (si falla, muéstralo).
4. **Mantén el diseño premium y orientado a captar citas por WhatsApp.** El objetivo de negocio es convertir visitas en citas. Conserva el acabado cuidado (tipografía, colores de marca, espaciado) y prioriza los CTAs hacia WhatsApp/teléfono/formulario.

## El archivo principal del cliente

**`src/config/business.ts`** es el archivo que se edita para cada cliente nuevo.

Contiene todo lo personalizable: nombre, contacto, colores de marca, servicios, horarios, galería, reseñas, SEO. Para lanzar otro cliente, en la práctica solo se toca este archivo. Cambios de contenido/marca → empieza aquí antes de tocar componentes.

## Estructura

```
src/
  config/business.ts     # ⭐ config por cliente (editar esto primero)
  layouts/Layout.astro   # <head>, SEO, JSON-LD HairSalon, variables CSS de marca
  pages/index.astro      # única página: apila los componentes
  components/            # secciones (Hero, Services, Gallery, ContactForm…)
  styles/global.css
supabase/schema.sql      # esquema multi-tenant + RLS preparado
supabase/seed.sql        # datos demo
n8n/workflow-lead-capture.json  # workflow importable de captura de leads
netlify.toml             # build, publish=dist, headers de seguridad
```

## Comandos

```bash
npm install        # instalar dependencias
npm run dev        # desarrollo local
npm run build      # build de producción (verificar tras cambios de código)
npm run preview    # previsualizar el build
```

## Despliegue

Netlify construye con `npm run build` y publica `dist/`. Las variables `PUBLIC_*`
(`PUBLIC_N8N_WEBHOOK_URL`, `PUBLIC_BUSINESS_SLUG`, Supabase) se definen en el panel de
Netlify **antes** del build, porque Astro las incrusta en el HTML estático.

## No hacer

- No metas backend ni rutas API en la web: la lógica dinámica vive en n8n + Supabase.
- No subas `.env` (está en `.gitignore`).
- No hagas commit/push salvo que el usuario lo pida explícitamente.
