<script setup>
import WelcomeSection from './components/WelcomeSection.vue';
import ProjectCard from './components/ProjectCard.vue';
import ImageViewer from './components/ImageViewer.vue';
import Footer from './components/Footer.vue';
import { ref } from 'vue';

const projects = [
  {
    name: 'Syncblend',
    description: 'SyncBlend es una plataforma web diseñada específicamente para institutos, con un enfoque innovador en la gestión de estudiantes de entre 14 y 18 años. Su objetivo principal es recoger datos que permitan generar perfiles psicológicos personalizados y utilizar esta información para formar grupos de clase diversos, promoviendo la inclusión y minimizando posibles conflictos interpersonales. De este modo, SyncBlend busca optimizar la dinámica de los grupos y mejorar la experiencia educativa.',
    image: '/path-to-syncblend-image.jpg',
    github: 'https://github.com/tuusuario/syncblend',
    images: ['/path-to-syncblend-image1.jpg', '/path-to-syncblend-image2.jpg'],
  },
  {
    name: 'TR3Cine',
    description: 'TR3Cinenpm es una aplicación web que permite a los usuarios consultar la cartelera, reservar películas y seleccionar sus asientos de manera rápida y sencilla. Incluye un panel de administración completo para que el cine gestione películas, fechas y horarios de forma ágil. Desarrollé el proyecto íntegramente por mi cuenta, utilizando Nuxt para el front-end y Laravel para el back-end, enfocándome en crear una experiencia intuitiva y eficiente tanto para los usuarios como para los administradores.',
    image: '/path-to-tr3cine-image.jpg',
    github: 'https://github.com/tuusuario/tr3cine',
    images: ['/path-to-tr3cine-image1.jpg', '/path-to-tr3cine-image2.jpg'],
  },
  {
    name: 'HolaBarri',
    description: 'HolaBarri es una aplicación que centraliza las tiendas locales, permitiendo a los usuarios buscar productos, comprar en línea y recibirlos en casa. Los comercios pueden gestionar inventarios, crear promociones y fidelizar clientes, fomentando la digitalización y la economía local. Mi principal aporte fue el desarrollo del front-end con Vue, diseñando una experiencia de usuario intuitiva, y la gestión de las peticiones del front con Laravel.',
    image: '/path-to-holabarri-image.jpg',
    github: 'https://github.com/tuusuario/holabarri',
    images: ['/path-to-holabarri-image1.jpg', '/path-to-holabarri-image2.jpg'],
  },
];

const imageViewerVisible = ref(false);
const currentImages = ref([]);

function openImageViewer(images) {
  currentImages.value = images;
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

    <ImageViewer :images="currentImages" :visible="imageViewerVisible" @close="closeImageViewer" />

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
}

@media (min-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

section {
  margin-top: 14rem;
  /* Aumenta la distancia entre WelcomeSection y los proyectos */
}

h2 {
  font-size: 30px;
  font-style: bold;
  margin-bottom: 130px;
}
</style>
