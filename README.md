# Portfolio Web - Lorenzo

Un portfolio web moderno y responsive desarrollado con Vue.js para mostrar proyectos de desarrollo web.

## 🚀 Características

- **Diseño Responsive**: Adaptado para móviles, tablets y escritorio
- **Visualizador de Multimedia**: Soporte para imágenes y videos
- **Interfaz Moderna**: Diseño limpio y profesional
- **Navegación Intuitiva**: Fácil de usar y navegar
- **Performance Optimizada**: Carga rápida y eficiente

## 🛠️ Tecnologías Utilizadas

- **Vue.js 3** - Framework JavaScript progresivo
- **CSS3** - Estilos personalizados con media queries
- **HTML5** - Estructura semántica
- **GitHub Pages** - Hosting y despliegue

## 📁 Estructura del Proyecto

portfolio/
├── public/
│ ├── imgs/ # Imágenes del portfolio
│ │ ├── Portada.png
│ │ ├── Syncblend_Home.png
│ │ ├── TR3Cine_Home.png
│ │ └── ...
│ └── videos/ # Videos demostrativos
│ └── HolaBarri_demo.mp4
├── src/
│ ├── components/
│ │ ├── WelcomeSection.vue # Sección de bienvenida
│ │ ├── ProjectCard.vue # Tarjetas de proyectos
│ │ ├── ImageViewer.vue # Visor de imágenes/videos
│ │ └── Footer.vue # Pie de página
│ ├── App.vue # Componente principal
│ └── main.js # Punto de entrada
├── index.html
├── vite.config.js # Configuración de Vite
└── README.md # Este archivo


## 🎨 Componentes Principales

### 1. **WelcomeSection**
- Presentación personal con imagen
- Diseño responsive (columna en móvil, fila en escritorio)
- Espaciado optimizado para cada dispositivo

### 2. **ProjectCard**
- Tarjetas interactivas para cada proyecto
- Imagen de portada con hover effects
- Descripción detallada del proyecto
- Botón para abrir galería multimedia

### 3. **ImageViewer**
- Visor modal para imágenes y videos
- Navegación entre elementos
- Controles intuitivos (siguiente/anterior/cerrar)
- Indicadores de posición
- Soporte para videos MP4

## 📱 Proyectos Mostrados

### 1. **Syncblend**
Plataforma web para institutos que genera perfiles psicológicos de estudiantes para formar grupos de clase diversos e inclusivos.

### 2. **TR3Cine**
Aplicación web para reserva de películas y selección de asientos con panel de administración completo.

### 3. **HolaBarri**
Plataforma que centraliza tiendas locales permitiendo compras en línea y gestión de inventarios.

## 🚀 Cómo Ejecutar Localmente

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/tuusuario/portfolio.git
cd portfolio
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Ejecutar en desarrollo**
```bash
npm run dev
```

4. **Abrir en navegador**
http://localhost:5173

### 👤 Autor
Lorenzo - Desarrollador Web Junior

GitHub: @lorenzoMoll

Portfolio: https://lorenzomoll.github.io/portfolio