# HaNet Docs

Documentación de [HaNet](https://github.com/martinuxp/hanetcl) para los liceos que lo usan: primeros pasos, roles y el detalle de cada módulo. Hecha con [Astro Starlight](https://starlight.astro.build).

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # sitio estático en dist/
```

Las páginas son Markdown en `src/content/docs/`. Las capturas de la app van en `src/assets/capturas/`, siempre con datos de ejemplo, y su texto alternativo empieza con "Pantalla" para mostrarse en tamaño de teléfono. La barra lateral se arma en `astro.config.mjs` y los colores de HaNet están en `src/styles/hanet.css`.

Este repositorio es público: nunca subas secretos, nóminas ni datos de estudiantes.

La fuente Google Sans Flex va con su licencia (`src/assets/fonts/OFL.txt`).
