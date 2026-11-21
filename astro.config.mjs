// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// Documentación de HaNet: páginas en Markdown dentro de src/content/docs.
// SITE y BASE los pone el workflow de GitHub Pages; sin ellos, el sitio va en la raíz.
export default defineConfig({
  site: process.env.SITE ?? 'https://docs.hanet.muxp.art',
  base: process.env.BASE ?? '/',
  integrations: [
    starlight({
      title: 'HaNet Docs',
      description: 'Documentación de HaNet para liceos y para quienes quieren aportar al proyecto.',
      defaultLocale: 'root',
      locales: { root: { label: 'Español', lang: 'es' } },
      logo: { src: './src/assets/hanet.svg', alt: 'HaNet' },
      favicon: '/favicon.svg',
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/martinuxp/hanetcl' }],
      customCss: ['@fontsource-variable/dm-sans', './src/styles/hanet.css'],
      editLink: { baseUrl: 'https://github.com/martinuxp/hanetcl-docs/edit/main/' },
      lastUpdated: true,
      sidebar: [
        {
          label: 'Para liceos',
          items: [
            { label: 'Qué es HaNet', slug: 'liceos/que-es-hanet' },
            { label: 'Módulos', slug: 'liceos/modulos' },
            { label: 'Seguridad y privacidad', slug: 'liceos/seguridad' },
            { label: 'Cómo se suma tu liceo', slug: 'liceos/sumarse' },
            { label: 'Roles y permisos', slug: 'liceos/roles' },
            { label: 'Preguntas frecuentes', slug: 'liceos/preguntas' },
          ],
        },
        {
          label: 'Para contribuir',
          items: [{ label: 'Empezar a aportar', slug: 'contribuir' }],
        },
      ],
    }),
  ],
});
