<template>
  <div v-if="visible" class="image-viewer-overlay">
    <div class="overlay-bg" @click="close"></div>
    
    <div class="image-viewer-container">
      <!-- Controles de navegación (fuera del contenedor de media) -->
      <button 
        v-if="media.length > 1"
        class="nav-btn prev-btn"
        @click.stop="prevMedia"
      >
        &#10094;
      </button>
      
      <button 
        v-if="media.length > 1"
        class="nav-btn next-btn"
        @click.stop="nextMedia"
      >
        &#10095;
      </button>
      
      <div class="media-wrapper">
        <!-- Botón de cerrar dentro del área de media -->
        <button class="close-btn" @click="close">
          &times;
        </button>
        
        <!-- Contenido multimedia -->
        <div v-if="currentMedia.type === 'image'" class="image-container">
          <img 
            :src="currentMedia.src" 
            :alt="'Media ' + (currentIndex + 1)"
            class="media-content"
          />
        </div>
        
        <div v-else-if="currentMedia.type === 'video'" class="video-container">
          <video 
            :src="currentMedia.src" 
            controls 
            autoplay
            class="media-content"
          >
            Tu navegador no soporta el elemento de video.
          </video>
        </div>
        
        <!-- Mensaje si no hay contenido -->
        <div v-else class="no-media">
          No hay contenido para mostrar
        </div>
      </div>
      
      <!-- Indicador de posición (fuera del contenedor de media) -->
      <div v-if="media.length > 1" class="indicators">
        <span 
          v-for="(item, index) in media" 
          :key="index"
          :class="['indicator-dot', index === currentIndex ? 'active' : '']"
        ></span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

const props = defineProps({
  media: {
    type: Array,
    required: true,
    default: () => []
  },
  visible: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(['close']);

const currentIndex = ref(0);

const currentMedia = computed(() => {
  return props.media[currentIndex.value] || {};
});

// Resetear índice cuando se abre con nuevo contenido
watch(() => props.visible, (newVal) => {
  if (newVal) {
    currentIndex.value = 0;
  }
});

function close() {
  emit('close');
}

function prevMedia() {
  if (props.media.length > 1) {
    currentIndex.value = (currentIndex.value - 1 + props.media.length) % props.media.length;
  }
}

function nextMedia() {
  if (props.media.length > 1) {
    currentIndex.value = (currentIndex.value + 1) % props.media.length;
  }
}
</script>

<style scoped>
/* Estilos CSS puro para el ImageViewer */
.image-viewer-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.overlay-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.85);
  cursor: pointer;
}

.image-viewer-container {
  position: relative;
  width: 90%;
  max-width: 1200px;
  max-height: 90vh;
  background-color: transparent;
  z-index: 1001;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.media-wrapper {
  position: relative;
  width: 100%;
  height: calc(90vh - 40px);
  background-color: #000;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
}

/* Botón de cerrar dentro del área de media */
.close-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  border-radius: 50%;
  font-size: 36px;
  cursor: pointer;
  z-index: 1002;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  font-weight: 300;
  line-height: 1;
  padding: 0;
}

.close-btn:hover {
  background-color: rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
}

.image-container,
.video-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
}

.media-content {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 8px;
}

.video-container video {
  width: 100%;
  height: auto;
  max-height: 100%;
  background-color: #000;
}

.no-media {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: white;
  font-size: 18px;
}

/* Botones de navegación fuera del contenedor */
.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 60px;
  height: 60px;
  background-color: transparent; /* Fondo transparente por defecto */
  color: white;
  border: none;
  border-radius: 50%;
  font-size: 32px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 1002;
  font-weight: 200;
  padding: 0;
  /* Solo el fondo del círculo aparecerá al hover */
}

/* Fondo circular que solo aparece al hover */
.nav-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}

.nav-btn:hover::before {
  opacity: 1;
}

.nav-btn:hover {
  transform: translateY(-50%) scale(1.1);
}

/* Ajustes específicos para cada flecha */
.prev-btn {
  left: 20px; /* Cambiado de -80px a 20px para estar dentro de la pantalla */
}

.next-btn {
  right: 20px; /* Cambiado de -80px a 20px para estar dentro de la pantalla */
}

/* En pantallas grandes, podemos ponerlos más fuera */
@media (min-width: 1024px) {
  .prev-btn {
    left: -80px;
  }
  
  .next-btn {
    right: -80px;
  }
}

/* Ajustes de padding para centrar las flechas en todas las pantallas */
@media (min-width: 768px) {
  .prev-btn {
    padding-right: 4px; /* Compensa la forma asimétrica de la flecha izquierda */
  }
  
  .next-btn {
    padding-left: 4px; /* Compensa la forma asimétrica de la flecha derecha */
  }
}

/* Indicador de posición (fuera del contenedor) */
.indicators {
  margin-top: 20px;
  display: flex;
  gap: 12px;
  z-index: 1002;
}

.indicator-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid transparent;
}

.indicator-dot:hover {
  background-color: rgba(255, 255, 255, 0.7);
  transform: scale(1.2);
}

.indicator-dot.active {
  background-color: white;
  transform: scale(1.2);
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

/* Responsive para móviles */
@media (max-width: 768px) {
  .image-viewer-container {
    width: 95%;
    max-height: 85vh;
  }
  
  .media-wrapper {
    height: calc(85vh - 40px);
  }
  
  .nav-btn {
    width: 50px;
    height: 50px;
    font-size: 28px;
    background-color: rgba(0, 0, 0, 0.3); /* En móviles, fondo visible siempre */
  }
  
  .nav-btn::before {
    background-color: rgba(255, 255, 255, 0.25); /* Más visible en móviles */
  }
  
  .nav-btn:hover::before {
    opacity: 1;
  }
  
  /* En móviles, los botones están sobre el borde del contenedor */
  .prev-btn {
    left: 10px;
    padding-right: 3px;
  }
  
  .next-btn {
    right: 10px;
    padding-left: 3px;
  }
  
  .close-btn {
    top: 15px;
    right: 15px;
    width: 44px;
    height: 44px;
    font-size: 32px;
  }
  
  .image-container,
  .video-container {
    padding: 10px;
  }
}

/* Para pantallas muy pequeñas */
@media (max-width: 480px) {
  .nav-btn {
    width: 44px;
    height: 44px;
    font-size: 24px;
    background-color: rgba(0, 0, 0, 0.4); /* Aún más visible en móviles pequeños */
  }
  
  /* En móviles muy pequeños, los botones están justo en el borde */
  .prev-btn {
    left: 8px;
    padding-right: 2px;
  }
  
  .next-btn {
    right: 8px;
    padding-left: 2px;
  }
  
  .close-btn {
    top: 12px;
    right: 12px;
    width: 40px;
    height: 40px;
    font-size: 28px;
  }
  
  .indicators {
    margin-top: 15px;
    gap: 8px;
  }
  
  .indicator-dot {
    width: 10px;
    height: 10px;
  }
}

/* Para pantallas extremadamente pequeñas (como iPhone SE) */
@media (max-width: 375px) {
  .nav-btn {
    width: 40px;
    height: 40px;
    font-size: 22px;
  }
  
  .prev-btn {
    left: 5px;
  }
  
  .next-btn {
    right: 5px;
  }
  
  .close-btn {
    top: 10px;
    right: 10px;
    width: 36px;
    height: 36px;
    font-size: 26px;
  }
  
  .image-container,
  .video-container {
    padding: 5px;
  }
}
</style>