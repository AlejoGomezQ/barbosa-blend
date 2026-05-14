# Café Barbosa — Landing Page

Landing inmersiva de una sola página (con rutas separadas para SEO) para Café Barbosa, con paleta verde oscuro / beige / café / vinotinto, transiciones elegantes y CTA a WhatsApp.

## Estructura de secciones

1. **Hero** — Logo Café Barbosa, tagline "El aroma de mis montañas", imagen de fondo de las cerezas/montañas con overlay verde oscuro, CTA primario a WhatsApp.
2. **Nosotros** — Quiénes somos + historia (13 familias, Barbosa Antioquia, desde 2013).
3. **Perfil del café** — Variedad, perfil de taza, tostión, altura, origen, presentado como ficha técnica visual elegante.
4. **Productos** — Tres bolsas (200g, 400g, 2.5kg), cada una con opción molido/grano, usando las fotos reales subidas.
5. **Maquila** — Sección dedicada al servicio de torrefacción para otros productores.
6. **CTA final + Footer** — Contacto, WhatsApp, redes, dirección (Carrera 21 No. 11-30 Barbosa, Antioquia).

## Diseño

- **Paleta** (tokens en `src/styles.css`, oklch):
  - Verde oscuro profundo (primary)
  - Beige cálido (background / surface)
  - Café tostado (foreground / accent)
  - Vinotinto (accent secundario para CTAs y detalles)
- **Tipografía**: serif elegante para titulares (ej. Cormorant / Fraunces) + sans humanista para cuerpo (Inter / DM Sans).
- **Movimiento**: fade + translate suave en scroll (Framer Motion), parallax sutil en hero, hover refinado en tarjetas de producto, transiciones de 400-600ms con easing personalizado.
- **Layout**: full-width sections alternando beige/verde oscuro, generoso whitespace, imágenes grandes editoriales.

## Arquitectura técnica

- **Stack**: TanStack Start (existente) + Tailwind v4 + shadcn/ui + Framer Motion.
- **Rutas**: una `index.tsx` con todas las secciones (landing real de una sola página). SEO completo con `head()` (title, description, og:*, JSON-LD Organization).
- **Componentes** en `src/components/landing/`: `Hero`, `About`, `CoffeeProfile`, `Products`, `Maquila`, `Footer`, más `WhatsAppCTA` reutilizable.
- **Hook** `useWhatsApp()` que centraliza número (+573014975996) y mensaje precargado ("Holaaa! Estoy interesado en un cafecito de finca ☕"), URL-encoded.
- **Hook** `useReveal()` (IntersectionObserver + Framer Motion) para animaciones on-scroll reutilizables.
- **Assets**: copiar imágenes subidas a `src/assets/` (logo etiqueta, cerezas, taza, 3 bolsas individuales, foto grupo).
- **Design tokens**: extender `src/styles.css` con paleta semántica (background, foreground, primary, accent, wine) en oklch para light mode.
- **Accesibilidad**: contraste AA, focus-visible, respeta `prefers-reduced-motion`.

## Lo que no se incluye

- Sin backend, sin DB, sin auth, sin formulario de contacto (todo va vía WhatsApp).
- Sin e-commerce — productos son informativos.
- Sin dark mode (la marca es cálida y diurna).

## Entregable

Landing lista para publicar, responsive (mobile-first), con CTA WhatsApp en hero, sección productos, maquila y footer flotante en mobile.
