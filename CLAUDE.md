# HaNet Docs — guía para Claude

Sitio de documentación de HaNet (Astro Starlight). La app vive en `HaNet-Chile/hanetcl`, el panel en `HaNet-Chile/panel`; sus CLAUDE.md tienen el detalle del producto.

- Responder en español. El usuario (muxp) escribe en español chileno informal; los textos del sitio son claros y neutros, con tuteo y sin modismos ("docente", "link", "correo").
- Prioridad: la parte para liceos (`src/content/docs/liceos/`). Todo lo que se diga del producto debe ser cierto según el código o el CLAUDE.md de hanetcl: nada de funciones que no existen; lo que viene va como "después de la beta".
- Nada de funciones sociales entre estudiantes, ni anunciarlas.
- Colores solo de HaNet (`src/styles/hanet.css`): rosa `#EF2274` como único acento fuerte, grises para el resto, botones en píldora, títulos en Google Sans Flex y texto en DM Sans.
- Repositorio público: nunca secretos, nóminas ni datos de estudiantes. Contacto: `muxp@muxp.art` (no usar direcciones de `hanet.cl`).
- Se publica con GitHub Pages en `docs.hanet.muxp.art` (`.github/workflows/pages.yml`, en cada push a `main`).
- Comprobar con `npm run build` antes de entregar. Publicar el sitio (hosting o dominio) necesita el OK de muxp cada vez.
