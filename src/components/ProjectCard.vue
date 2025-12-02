<template>
  <div  class="project-card border p-8 border-gray-300 rounded-lg overflow-hidden shadow-md transform transition-transform hover:scale-105">
    <!-- <img :src="project.image" alt="Imagen del proyecto" @click="openImageViewer" class="w-full rounded-lg h-48 object-cover cursor-pointer" /> -->
    <div class="p-4">
      <h3 class="text-xl font-semibold mb-2">{{ project.name }}</h3>
      <p class="text-gray-600 mb-6">{{ project.description }}</p>
      <!-- <a :href="project.github" target="_blank" class="text-black hover:text-gray-700">
        <i class="fab fa-github text-2xl"></i>
      </a> -->
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(['open-image-viewer']);

function openImageViewer() {
  emit('open-image-viewer', project.images);
}
</script>

<style scoped>
/* Eliminados los estilos CSS en favor de TailwindCSS */
.project-card {
  border-radius: 8px; /* Aplica esquinas redondeadas */
  overflow: hidden; /* Asegura que el contenido respete las esquinas redondeadas */
  padding: 26px;
}
h3 {
  margin-bottom: 2rem; /* Aumenta el margen entre el título y la descripción */
}
</style>