---
title: Seguridad y privacidad
description: Dónde se guardan los datos del liceo, quién puede verlos y qué no guarda HaNet.
---

HaNet trabaja con datos de menores de edad, así que parte de una regla simple: **cada persona ve solo lo que le corresponde, y el servidor lo revisa en cada consulta.**

## Dónde viven los datos

| Qué | Dónde |
| --- | --- |
| **Base de datos** (cuentas, nómina, cursos, Calendar, ClassHall, notas) | Firestore, en **Santiago de Chile** (`southamerica-west1`), en tres bases separadas. |
| **Funciones** que leen y escriben esa base | Google Cloud en **Iowa, Estados Unidos** (`us-central1`). Las del escáner de la puerta (entradas y pasar lista) corren también en Santiago, para responder más rápido. |
| **Archivos** (material, entregas y fotos) | Cloud Storage de Firebase. |
| **Inicio de sesión** | Firebase Authentication, el servicio de cuentas de Google. |
| **Notificaciones** | Expo y Firebase Cloud Messaging. Nunca llevan una nota. |

- La app nunca escribe directo en la base: cada cambio pasa por una función que revisa quién lo pide, su rol y su institución. Los datos viajan cifrados entre la app, las funciones y la base.
- Los archivos de ClassHall solo se abren con un link con permiso que la función entrega a quienes están en ese Hall.

## Quién ve qué

| Dato | Quién lo ve |
| --- | --- |
| Nota de un estudiante | El estudiante, su docente y la administración de su institución. |
| Entrega de una tarea | Su autor y el docente del Hall. |
| Resultado de Electividad | El estudiante y la administración de su institución. |
| Foto de perfil | Solo la persona. Los demás ven su avatar generado (blobatar). |
| Voto en una votación | Nadie. Solo se suma al contador. |

## Lo que HaNet no guarda

- **Ni IP ni ubicación** de quien entra.
- **Ni el identificador del teléfono:** cada dispositivo recibe un número aleatorio propio de HaNet.
- **Ni quién votó qué:** cada voto marca que la persona ya votó y suma uno a la opción, sin unir una cosa con la otra. El voto no se puede cambiar.
- **Ni la nota en las notificaciones:** el aviso de una nota nueva nunca la muestra.
- **Ni el código de invitación en texto:** el liceo lo ve una sola vez; después solo queda su huella (hash).

## Protecciones de la cuenta

- **Alertas de seguridad:** un inicio de sesión desde un dispositivo nuevo, un cambio de contraseña, de correo o de rol llega como notificación a los otros dispositivos de la cuenta. Estas alertas no se pueden apagar.
- **Cerrar sesión en todas partes:** desde Configuraciones → Seguridad, la persona ve sus dispositivos y puede cerrar todas sus sesiones.
- **Proteger Notas:** opcional. Pide Face ID, huella o el código del teléfono para abrir las notas.
- **QR que caduca:** el código del perfil cambia cada 30 segundos y se valida en el servidor.

## Correos

HaNet manda solo correos esenciales: el código de verificación y el vínculo con la institución. Salen desde `hanet.muxp.art`.

## Código abierto

El código de la app es público en [GitHub](https://github.com/martinuxp/hanetcl). Cualquiera puede revisar cómo trata los datos. Los secretos, las nóminas y los datos de estudiantes nunca van en el repositorio.

## Reportar un problema de seguridad

Escríbenos a [muxp@muxp.art](mailto:muxp@muxp.art). Por favor no lo publiques antes de que podamos corregirlo.
