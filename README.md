# ESPE PWA

Aplicacion web progresiva (PWA) para la ESPE, diseñada con soporte offline y optimizada para dispositivos móviles y de escritorio.

## Libreria de Componentes Utilizada

Este proyecto utiliza Material Design Lite (MDL), una libreria de componentes UI desarrollada por Google que implementa las guías de Material Design.

- CDN CSS:  
  ```html
  <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.deep_purple-amber.min.css" />
    ```

## Caracteristicas
- Interfaz basada en Material Design.
- Navegacion adaptable para moviles y escritorio.
- PWA con soporte offline mediante Service Worker.
- Soporte para iconos y manifest para instalacion en dispositivos.

## Secciones de la aplicacion

### 1. **Inicio**
- **Propósito:** Dar la bienvenida al usuario.
- **Contenido:** Mensaje introductorio invitando a explorar la historia, carreras y proceso de admisión de la ESPE.
- **Características:** Encabezado en color primario (`mdl-color--primary`) y texto claro.

---

### 2. **Sobre la ESPE**
- **Propósito:** Presentar información institucional.
- **Contenido:**
  - **Historia:** Fundación en 1922.
  - **Misión:** Formación de profesionales competentes con valores éticos.
  - **Visión:** Ser una universidad de excelencia nacional e internacional.
- **Características:** Encabezado en color índigo (`mdl-color--indigo`), con texto blanco.

---

### 3. **Oferta Académica**
- **Propósito:** Mostrar las carreras disponibles en la ESPE.
- **Contenido:**
  - Lista de carreras de pregrado.
  - Lista de programas de posgrado.
- **Características:** Encabezado en color verde (`mdl-color--green`).

---

### 4. **Admisión**
- **Propósito:** Informar sobre el proceso de ingreso a la ESPE.
- **Contenido:**
  - Requisitos de postulación.
  - Fechas clave.
  - Pasos del proceso.
- **Características:** Encabezado en color naranja (`mdl-color--orange`).

---

### 5. **Contacto**
- **Propósito:** Proporcionar información de contacto.
- **Contenido:**
  - Dirección.
  - Teléfonos.
  - Correo electrónico.
- **Características:** Encabezado en color gris (`mdl-color--grey`).