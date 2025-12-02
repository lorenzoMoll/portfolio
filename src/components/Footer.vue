<template>
  <footer class="flex justify-between items-center p-4 bg-gray-800 text-white">
    <div>
      <span>&copy; 2025</span>
    </div>
    <div class="flex space-x-4">
      <a href="https://github.com/lorenzoMoll" target="_blank" class="hover:text-gray-400">
        <i class="fab fa-github text-2xl"></i>
      </a>
      <a href="https://linkedin.com/in/lorenzo-moll-anglada" target="_blank" class="hover:text-gray-400">
        <i class="fab fa-linkedin text-2xl"></i>
      </a>
    </div>
  </footer>
</template>

<script setup>
// No se requiere lógica adicional por ahora.
</script>

<style scoped>
footer {
  position: relative;
  bottom: 0;
  width: 100%;
  margin-top: 240px;
}

footer .flex.space-x-4 a {
  margin-right: 1.5rem; /* Aumenta el espacio entre los iconos */
}

footer .flex.space-x-4 i {
  font-size: 2rem; /* Aumenta el tamaño de los iconos */
}
</style>