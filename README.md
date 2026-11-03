# Roadmap de Aprendizaje y Practicas Frontend super prompteado nada de texto escrito a mano jaja

Repositorio centralizado para el estudio, estructuracion y practica de tecnologias de desarrollo web moderno, enfocado en flujos de trabajo optimizados con Vite.

## Estructura de Proyectos con Vite

Para entender como se organiza un proyecto moderno basado en Vite, la estructura estandar recomendada sigue este patron modular:

```text
mi-proyecto-vite/
├── public/            # Archivos estaticos que no pasan por el procesador de Vite (favicon, etc.)
├── src/               # Codigo fuente principal de la aplicacion
│   ├── assets/        # Imagenes, fuentes y estilos globales
│   ├── components/    # Componentes reutilizables de UI
│   ├── styles/        # Configuracion de Tailwind y CSS global
│   ├── App.tsx        # Componente raiz de la aplicacion
│   └── main.tsx       # Punto de entrada de JavaScript/TypeScript
├── index.html         # Plantilla HTML principal
├── package.json       # Dependencias y scripts del proyecto
├── tailwind.config.js # Configuracion de Tailwind CSS
└── vite.config.ts     # Archivo de configuracion central de Vite
```

## Temario y Tutoriales Recomendados

> **Nota:** Todos los recursos y practicas estan orientados a integrarse y ejecutarse sobre entornos basados en Vite para garantizar un rendimiento y recarga en caliente (HMR) optimos.

### 1. HTML Moderno y Semantico
* Estructura de documentos web orientada a la accesibilidad (a11y) y buenas practicas de SEO.
* Uso correcto de etiquetas semanticas (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`).

### 2. Git y GitHub
* Control de versiones profesional mediante flujos de trabajo con ramas (*branching*).
* Comandos esenciales: `git clone`, `git checkout`, `git commit`, `git push` y gestion de pull requests.

### 3. JavaScript y TypeScript
* **JavaScript Moderno (ES6+):** Desestructuracion, operadores logicos, funciones flecha, promesas, `async/await` y manipulacion de arreglos.
* **TypeScript:** Tipado estatico, interfaces, tipos personalizados (*types*), genericos y su integracion fluida en entornos Vite.

### 4. CSS y Tailwind CSS
* Arquitectura CSS moderna y diseno responsivo (*Mobile First*).
* Configuracion avanzada de **Tailwind CSS** mediante clases utilitarias, personalizacion de temas y directivas de diseno.

## Guia de Instalacion y Ejecucion

Sigue estos pasos para poner en marcha cualquier proyecto de este repositorio en tu entorno local:

### 1. Clonar el repositorio
Si acabas de clonar el proyecto desde GitHub, instala las dependencias de Node ejecutando:
```bash
npm install
```

### 2. Ejecutar el servidor de desarrollo
Inicia el entorno de desarrollo en tiempo real impulsado por Vite:
```bash
npm run dev
```

Una vez ejecutado, la terminal te indicara la URL local (por defecto `http://localhost:5173`) para visualizar los cambios instantaneamente en tu navegador.
