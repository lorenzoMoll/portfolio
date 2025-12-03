<template>
  <div class="project-card border p-8 border-gray-300 rounded-lg overflow-hidden shadow-md transform transition-transform hover:scale-105">
    <img 
      :src="project.image" 
      alt="Imagen del proyecto" 
      @click="openImageViewer" 
      class="w-full rounded-lg h-48 object-cover cursor-pointer transition-opacity hover:opacity-90" 
    />
    <div class="p-4">
      <h3 class="text-xl font-semibold mb-2">{{ project.name }}</h3>
      <p class="text-gray-600 mb-8">{{ project.description }}</p> <!-- mb-8 para espacio -->
      
      <!-- Contenedor flex para alinear el icono a la derecha -->
      <div class="flex justify-end mt-4">
        <a 
          v-if="hasGithubLink"
          :href="project.github"
          target="_blank"
          rel="noopener noreferrer"
          class="github-icon-flex"
          title="Ver en GitHub"
        >
          <i class="fab fa-github"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(['open-image-viewer']);

const hasGithubLink = computed(() => {
  if (!props.project.github) return false;
  
  const githubLink = props.project.github.trim();
  
  return githubLink !== '' && 
         !githubLink.includes('tuusuario') &&
         githubLink.startsWith('http');
});

function openImageViewer() {
  emit('open-image-viewer', props.project.media || []);
}
</script>

<style scoped>
.project-card {
  border-radius: 8px;
  overflow: hidden;
  padding: 26px;
}

img {
  cursor: pointer;
  border-radius: 8px;
}

h3 {
  margin-bottom: 2rem;
}

/* Estilos para el icono de GitHub - CON FLEXBOX */
.github-icon-flex {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: #f8f9fa;
  color: #333;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #e0e0e0;
}

.github-icon-flex:hover {
  background-color: #333;
  color: white;
  transform: scale(1.15);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  border-color: #333;
}

.github-icon-flex i {
  font-size: 2.2rem;
}

/* Responsive */
@media (max-width: 768px) {
  .github-icon-flex {
    width: 40px;
    height: 40px;
  }
  
  .github-icon-flex i {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .github-icon-flex {
    width: 38px;
    height: 38px;
  }
  
  .github-icon-flex i {
    font-size: 1.4rem;
  }
}
</style>