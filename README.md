# Ola & Roca — Alquiler de bicicletas en Lanzarote

Proyecto web estático, separado en archivos para facilitar las modificaciones.

## Estructura

```
proyecto-bicicletas/
├── index.html      → Estructura y contenido de la página
├── css/
│   └── style.css   → Todos los estilos (tokens de color, tipografía, layout, responsive)
├── js/
│   └── script.js   → Menú móvil, animaciones al hacer scroll y formulario de reservas
└── img/            → Carpeta vacía, lista para tus imágenes (actualmente todo el arte es SVG inline)
```

## Cómo editarlo

Abre la carpeta completa en tu editor (VS Code, Sublime, etc.) y abre `index.html` en el navegador para previsualizar. No necesitas servidor ni instalación, son archivos estáticos.

- **Colores y tipografía**: edita las variables al principio de `css/style.css`, dentro de `:root` (--volcanic, --cream, --turquoise, --sand, etc.). Cambiarlas ahí actualiza toda la web.
- **Textos**: directamente en `index.html`.
- **Precios y tipos de bici**: sección con `id="flota"` en `index.html`.
- **Formulario de reservas**: sección con `id="reservas"`. La lógica de envío (que ahora solo muestra un mensaje de confirmación simulado, sin backend real) está en `js/script.js`.
- **Imágenes propias**: si quieres sustituir los SVG por fotos, guarda los archivos en `img/` y referencia con `img/nombre-archivo.jpg`.

## Notas

- El formulario de reservas no envía datos a ningún servidor; solo simula la confirmación en el navegador. Si quieres que llegue de verdad por email o WhatsApp, habría que conectarlo a un backend o a un servicio como Formspree, EmailJS, etc.
- Las fuentes (Fraunces y Work Sans) se cargan desde Google Fonts, así que necesita conexión a internet para verse igual.
