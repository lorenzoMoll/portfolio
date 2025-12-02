<template>
  <div v-if="visible" class="fixed inset-0 flex items-center justify-center z-50">
    <div class="absolute inset-0 bg-black bg-opacity-80" @click="close"></div>
    <div class="relative max-w-4xl max-h-4xl">
      <button class="absolute top-2 right-2 text-white text-3xl" @click="close">&times;</button>
      <img :src="currentImage" alt="Imagen del proyecto" class="max-w-full max-h-full" />
      <button class="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl" @click="prevImage">&#10094;</button>
      <button class="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl" @click="nextImage">&#10095;</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
  visible: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(['close']);

const currentIndex = ref(0);

const currentImage = computed(() => props.images[currentIndex.value]);

function close() {
  emit('close');
}

function prevImage() {
  currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length;
}

function nextImage() {
  currentIndex.value = (currentIndex.value + 1) % props.images.length;
}
</script>

<style scoped>
/* Eliminados los estilos CSS en favor de TailwindCSS */
</style>