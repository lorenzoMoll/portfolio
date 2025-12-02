<template>
    <section class="flex items-center justify-between p-8">
        <div class="max-w-1/2">
            <h1 class="text-4xl font-bold mb-8">¡Bienvenido a mi portafolio!</h1>
            <p class="text-lg">Hola, soy Lorenzo, desarrollador web junior apasionado por crear soluciones elegantes y
                funcionales. He trabajado con Vue.js, React, Laravel y Node.js, construyendo proyectos que combinan buen
                diseño y código limpio.

                Me encanta aprender nuevas tecnologías y enfrentar retos que me permitan mejorar como desarrollador. En
                este portfolio encontrarás algunos de los proyectos en los que he trabajado y que reflejan mi entusiasmo
                por la programación y la innovación.</p>
        </div>
        <div>
            <img src="./../imgs/Portada.png" alt="Tu imagen" class="rounded-lg max-w-full" />
        </div>
    </section>
</template>

<script setup>
// No se requiere lógica adicional por ahora.
</script>

<style scoped>
/* Eliminados los estilos CSS en favor de TailwindCSS */
.welcome-section h1 {
  margin-bottom: 2rem; /* Aumenta el margen entre el título y la descripción */
}
</style>