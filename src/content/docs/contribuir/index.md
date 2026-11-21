---
title: Empezar a aportar
description: Cómo está hecho HaNet y cómo aportar al código o a esta documentación.
---

HaNet es código abierto. Si encontraste un error o tienes una idea, abre un *issue* en GitHub o escríbenos a [muxp@muxp.art](mailto:muxp@muxp.art).

## Repositorios

| Repositorio | Qué tiene |
| --- | --- |
| [`hanetcl`](https://github.com/martinuxp/hanetcl) | La app (Expo y React Native) y las funciones de Firebase. |
| [`hanet-panel`](https://github.com/martinuxp/hanet-panel) | El panel web (Vite, React y TypeScript). |
| [`hanetcl-docs`](https://github.com/martinuxp/hanetcl-docs) | Esta documentación (Astro Starlight). |

## Cómo está hecho

- **App:** Expo con Expo Router, para iPhone, Android y la web.
- **Backend:** Firebase. Cloud Functions en Node 22 y Firestore con tres bases en Santiago.
- **Textos:** todos en `i18n/locales/es.json`. El español es el idioma fuente.

## Correr la app

```sh
git clone https://github.com/martinuxp/hanetcl.git
cd hanetcl
npm install
npx expo start
```

Ábrela en Expo Go o en el navegador. Antes de abrir un PR, comprueba que pasen:

```sh
npx tsc --noEmit
npx eslint app components services
npm run i18n:extract
```

Cada PR sube la versión con `npm run version:bump` y anota qué cambió en `constants/changelog.json`.

## Editar esta documentación

Cada página tiene el link "Editar página" al final. Las páginas son Markdown dentro de `src/content/docs/`.

```sh
npm install
npm run dev
```

## Reglas

- **Nunca subas secretos, nóminas ni datos de estudiantes.** Los repositorios son públicos.
- **Nada de funciones sociales entre estudiantes.** Es una decisión del proyecto.
