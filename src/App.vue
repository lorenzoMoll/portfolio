<script setup>
import WelcomeSection from './components/WelcomeSection.vue';
import ProjectCard from './components/ProjectCard.vue';
import ImageViewer from './components/ImageViewer.vue';
import Footer from './components/Footer.vue';
import { ref } from 'vue';

// Configuración para GitHub Pages
const isProduction = import.meta.env.PROD;
const basePath = isProduction ? '/portfolio/' : '/';

const getPublicUrl = (path) => {
  // Si la ruta ya tiene basePath, no lo añadas de nuevo
  if (path.startsWith(basePath)) {
    return path;
  }
  // Añade basePath a rutas relativas
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${basePath}${cleanPath}`;
};

const projects = [
  {
    name: 'Syncblend',
    description: 'SyncBlend es una plataforma web diseñada específicamente para institutos, con un enfoque innovador en la gestión de estudiantes de entre 14 y 18 años. Su objetivo principal es recoger datos que permitan generar perfiles psicológicos personalizados y utilizar esta información para formar grupos de clase diversos, promoviendo la inclusión y minimizando posibles conflictos interpersonales. De este modo, SyncBlend busca optimizar la dinámica de los grupos y mejorar la experiencia educativa.',
    image: getPublicUrl('imgs/Syncblend_Home.png'),
    github: '',
    media: [
      { type: 'image', src: getPublicUrl('imgs/Syncblend_Home.png') },
      { type: 'image', src: getPublicUrl('imgs/Syncblend_Login.png') },
      { type: 'image', src: getPublicUrl('imgs/Syncblend_Profile.png') }
    ]
  },
  {
    name: 'TR3Cine',
    description: 'TR3Cine es una aplicación web que permite a los usuarios consultar la cartelera, reservar películas y seleccionar sus asientos de manera rápida y sencilla. Incluye un panel de administración completo para que el cine gestione películas, fechas y horarios de forma ágil. Desarrollé el proyecto íntegramente por mi cuenta, utilizando Nuxt para el front-end y Laravel para el back-end, enfocándome en crear una experiencia intuitiva y eficiente tanto para los usuarios como para los administradores.',
    image: getPublicUrl('imgs/TR3Cine_Home.png'),
    github: 'https://github.com/lorenzoMoll/tr3-cinema-24-25-a23lormolang',
    media: [
      { type: 'image', src: getPublicUrl('imgs/TR3Cine_Home.png') },
      { type: 'image', src: getPublicUrl('imgs/TR3Cine_Login.png') },
      { type: 'image', src: getPublicUrl('imgs/TR3Cine_CatalogoPeliculas.png') },
      { type: 'image', src: getPublicUrl('imgs/TR3Cine_ElegirAsiento.png') },
      { type: 'image', src: getPublicUrl('imgs/TR3Cine_CRUD.png') },
      { type: 'image', src: getPublicUrl('imgs/TR3Cine_Stats.png') }
    ]
  },
  {
    name: 'HolaBarri',
    description: 'HolaBarri es una aplicación que centraliza las tiendas locales y facilita a los usuarios la búsqueda de productos y la compra en línea. Además, ofrece a los comercios un espacio para gestionar inventarios, crear promociones personalizadas y fidelizar clientes mediante descuentos y programas de puntos, impulsando así la digitalización y el crecimiento del comercio de proximidad. Mi principal aporte fue el desarrollo del front-end con Vue, creando una interfaz clara, moderna e intuitiva, así como la implementación en Laravel de toda la lógica necesaria para gestionar las peticiones del front y mantener un flujo de datos eficiente y seguro.',
    image: getPublicUrl('imgs/HolaBarri_Mapa.png'),
    github: '',
    media: [
      { type: 'image', src: getPublicUrl('imgs/HolaBarri_Mapa.png') },
      { type: 'image', src: getPublicUrl('imgs/HolaBarri_Login.png') },
      { type: 'video', src: getPublicUrl('videos/HolaBarri_demo.mp4') }
    ]
  },
];

const imageViewerVisible = ref(false);
const currentMedia = ref([]);

function openImageViewer(media) {
  currentMedia.value = media;
  imageViewerVisible.value = true;
}

function closeImageViewer() {
  imageViewerVisible.value = false;
}

</script>

<template>
  <div>
    <WelcomeSection />

    <section class="p-8">
      <h2 class="text-3xl font-bold mb-6">Mis Proyectos</h2>
      <div class="projects-grid">
        <ProjectCard v-for="project in projects" :key="project.name" :project="project"
          @open-image-viewer="openImageViewer" />
      </div>
    </section>

    <ImageViewer :media="currentMedia" :visible="imageViewerVisible" @close="closeImageViewer" />

    <Footer />
  </div>
</template>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  h2 {
    margin-top: 240px;
    margin-bottom: 50px;
  }
}

@media (min-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  h2 {
    margin-bottom: 110px;
  }
}

h2 {
  margin-top: 240px;
  font-size: 30px;
  font-style: bold;
}
</style>
