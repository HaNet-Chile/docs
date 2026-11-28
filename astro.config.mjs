// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// Documentación de HaNet: páginas en Markdown dentro de src/content/docs.
// SITE y BASE los pone el workflow de GitHub Pages; sin ellos, el sitio va en la raíz.
const base = process.env.BASE ?? '/';

export default defineConfig({
  site: process.env.SITE ?? 'https://docs.hanet.muxp.art',
  base,
  // La página anterior de "Cómo se suma tu liceo" ahora es "Primeros pasos".
  // El destino de un redirect no lleva la base sola, así que se la ponemos.
  redirects: { '/liceos/sumarse': `${base.replace(/\/$/, '')}/liceos/primeros-pasos/` },
  integrations: [
    starlight({
      title: 'HaNet Docs',
      description: 'La guía de HaNet para los liceos que lo usan: primeros pasos, roles y el detalle de cada módulo.',
      defaultLocale: 'root',
      locales: { root: { label: 'Español', lang: 'es' } },
      logo: { src: './src/assets/hanet.svg', alt: 'HaNet' },
      favicon: '/favicon.svg',
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/HaNet-Chile/hanetcl' }],
      customCss: ['@fontsource-variable/dm-sans', './src/styles/hanet.css'],
      editLink: { baseUrl: 'https://github.com/HaNet-Chile/docs/edit/main/' },
      lastUpdated: true,
      sidebar: [
        {
          label: 'Empezar',
          items: [
            { label: 'Qué es HaNet', slug: 'liceos/que-es-hanet' },
            { label: 'Primeros pasos', slug: 'liceos/primeros-pasos' },
            { label: 'Cómo entra cada persona', slug: 'liceos/registro' },
            { label: 'Roles y permisos', slug: 'liceos/roles' },
            { label: 'Panel web', slug: 'liceos/panel-web' },
            { label: 'Guías por rol (PDF)', slug: 'liceos' },
          ],
        },
        {
          label: 'La base',
          items: [
            { label: 'Todos los módulos', slug: 'liceos/modulos' },
            { label: 'Calendar', slug: 'liceos/modulos/calendar' },
            { label: 'Horario', slug: 'liceos/modulos/horario' },
            { label: 'Días sin clases', slug: 'liceos/modulos/dias-sin-clases' },
            { label: 'ClassHall', slug: 'liceos/modulos/classhall' },
            { label: 'Eventos del liceo', slug: 'liceos/modulos/eventos' },
            { label: 'Organizar', slug: 'liceos/modulos/organizar' },
            { label: 'Notificaciones', slug: 'liceos/modulos/notificaciones' },
            { label: 'Herramientas', slug: 'liceos/modulos/herramientas' },
          ],
        },
        {
          label: 'Módulos que se activan',
          items: [
            { label: 'Notas', slug: 'liceos/modulos/notas' },
            { label: 'Entradas', slug: 'liceos/modulos/entradas' },
            { label: 'Feed y votaciones', slug: 'liceos/modulos/feed' },
            { label: 'Aniversario', slug: 'liceos/modulos/aniversario' },
          ],
        },
        {
          label: 'Ayuda',
          items: [
            { label: 'Seguridad y privacidad', slug: 'liceos/seguridad' },
            { label: 'Preguntas frecuentes', slug: 'liceos/preguntas' },
          ],
        },
      ],
    }),
  ],
});
