---
title: Primeros pasos
description: Todo lo que hace tu liceo para empezar a usar HaNet, desde la lista de personas hasta la primera semana de clases.
---

Sumar a tu liceo toma unos pocos días. Esta es la ruta completa, en orden.

| Paso | Quién lo hace | Cuánto toma |
| --- | --- | --- |
| 1. Conversemos | Dirección del liceo y equipo de HaNet | Una reunión |
| 2. Prepara la lista de personas | Administración | Una tarde |
| 3. Recibe el código de invitación | Equipo de HaNet | Al cargar la lista |
| 4. Define los roles | Administración, con el equipo de HaNet | Un día |
| 5. Crea las clases | Cada docente | Unos minutos por clase |
| 6. Carga el horario | Directiva de cada curso | Unos minutos por curso |
| 7. Invita a los estudiantes | Administración y docentes | Un día |

## 1. Conversemos

Escríbenos a [muxp@muxp.art](mailto:muxp@muxp.art). En esa conversación definimos:

- **Qué [módulos](../modulos/) activa tu liceo.** La base viene siempre; el resto se suma solo si lo necesitas.
- **Quiénes administran HaNet en el liceo.** Son las personas que van a tener el rol Admin y a las que acuden los estudiantes si algo no funciona.
- **El escudo y el banner del liceo.** Se ven en el Inicio de cada persona, al unirse al liceo y en el correo de verificación.

## 2. Prepara la lista de personas

HaNet usa la lista del liceo para comprobar quién es cada persona y ubicarla en su curso. Nadie entra a tu liceo si no está en ella.

Prepara una planilla (Excel o Google Sheets) con **una persona por fila** y estas columnas, en este orden:

| Columna | Ejemplo | Nota |
| --- | --- | --- |
| RUT | `12.345.678-5` | Con o sin puntos y guion. |
| Nombres | `Camila Andrea` | |
| Apellidos | `Rojas Muñoz` | |
| Curso | `Segundo Medio K` | Tal como lo nombra el liceo, igual en todas las filas del curso. Para docentes y administración, escribe `Docente`. |
| Correo institucional | `crojas@tuliceo.cl` | El correo que cada persona puede abrir. |

- Incluye a **estudiantes, docentes y administración**: todas las personas que van a usar HaNet. Docentes y administración llevan `Docente` en la columna Curso.
- Escribe cada curso **siempre igual**. "Segundo Medio K" y "2°K" serían dos cursos distintos.
- Cargar la lista otra vez **actualiza** las filas que ya existen (se reconocen por el RUT). Úsalo cuando alguien cambia de curso o llega a mitad de año.
- Las filas con datos incompletos o un correo no válido no se cargan, y te decimos cuáles son y por qué.
- La primera lista la carga el equipo de HaNet contigo. Después, la administración la actualiza desde el [panel web](../panel-web/), pegando las filas desde la planilla.

:::caution[Datos personales]
La lista tiene datos de menores de edad. Compártela solo con el equipo de HaNet y por un medio privado. Nunca la publiques ni la envíes a un grupo.
:::

## 3. Recibe el código de invitación

Cuando la lista está cargada, tu liceo recibe un **código de invitación de cuatro palabras**. Es la llave para unirse al liceo dentro de HaNet.

- **Se muestra una sola vez.** Anótalo en un lugar seguro.
- Si se pierde o se filtra fuera del liceo, genera uno nuevo en el panel web. El anterior deja de funcionar de inmediato y quienes ya se unieron no se ven afectados.
- El código solo no basta: además, cada persona tiene que comprobar su correo institucional contra la lista.

## 4. Define los roles

Cada cuenta tiene un rol: Estudiante, Directiva, CEE, Docente o Admin. Por defecto, todas entran como Estudiante.

1. Envíanos quiénes administran HaNet en el liceo: el equipo de HaNet les asigna el rol **Admin**.
2. Cuando ya entraron, la administración nombra desde el [panel web](../panel-web/) a los docentes, al CEE y a la Directiva de cada curso.

Revisa qué puede hacer cada uno en [Roles y permisos](../roles/).

## 5. Crea las clases

Cada docente entra a **ClassHall** y crea un **Hall** por cada asignatura y curso que dicta:

- **Plan común:** todo el curso queda dentro, sin código.
- **Electivo o dominio:** HaNet entrega un código de 6 caracteres que el docente comparte con sus estudiantes.

El detalle está en [ClassHall](../modulos/classhall/).

## 6. Carga el horario

La Directiva de cada curso arma el **horario** del plan común en el Calendar, con sus recreos. Los electivos y dominios llevan su propio horario, que carga su docente. Cada estudiante ve todo sumado en su semana. Revisa [Horario](../modulos/horario/).

## 7. Invita a los estudiantes

Comparte con los estudiantes:

1. Dónde usar HaNet (ver [Dónde se usa HaNet](#dónde-se-usa-hanet)): la web en [app.hanet.muxp.art](https://app.hanet.muxp.art), o la app para Android que te entrega el equipo de HaNet.
2. El código de invitación de cuatro palabras.
3. Que necesitan su **correo institucional** a mano.

Cada persona sigue los pasos de [Cómo entra cada persona](../registro/). Toma unos tres minutos.

## Dónde se usa HaNet

Durante la beta:

| Dispositivo | Cómo se usa |
| --- | --- |
| **iPhone y iPad** | En el navegador, en [app.hanet.muxp.art](https://app.hanet.muxp.art). Agregada a la pantalla de inicio se abre como una app y recibe notificaciones (iOS 16.4 o posterior). |
| **Android** | La app (un archivo APK que entrega el equipo de HaNet) o la web. |
| **Computador** | La web, y el [panel web](../panel-web/) para el trabajo de escritorio. |

Algunas funciones solo existen en la app instalada: los avisos de pruebas y entregas, los widgets y Compartir a HaNet. Durante la beta están en Android.

Con el primer liceo piloto, HaNet llega a **App Store** (con TestFlight para probar versiones nuevas) y a **Google Play** (con su canal beta).

## La primera semana

- [ ] Todos los cursos tienen su horario cargado.
- [ ] Cada docente creó sus Halls y publicó su primera evaluación.
- [ ] La Directiva de cada curso revisó el Calendar de su curso.
- [ ] La administración publicó un primer aviso en el Feed (si el módulo está activo).
- [ ] Quienes administran saben qué responder cuando un estudiante no puede entrar (ver [Cómo entra cada persona](../registro/#si-algo-no-funciona)).
