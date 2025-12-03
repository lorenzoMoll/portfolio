<template>
    <section class="welcome-section">
      <!-- Versión móvil (columna) -->
      <div class="mobile-layout">
        <div class="image-container">
          <img src="/imgs/Portada.png" alt="Imagen de Lorenzo" class="profile-image" />
        </div>
        
        <div class="content-container">
          <h1 class="title">¡Bienvenido a mi portafolio!</h1>
          <p class="description">
            Hola, soy Lorenzo, desarrollador web junior apasionado por crear soluciones elegantes y
            funcionales. He trabajado con Vue.js, React, Laravel y Node.js, construyendo proyectos que combinan buen
            diseño y código limpio.
          </p>
          <p class="description">
            Me encanta aprender nuevas tecnologías y enfrentar retos que me permitan mejorar como desarrollador. En
            este portfolio encontrarás algunos de los proyectos en los que he trabajado y que reflejan mi entusiasmo
            por la programación y la innovación.
          </p>
        </div>
      </div>
      
      <!-- Versión escritorio (fila) -->
      <div class="desktop-layout">
        <div class="content-wrapper">
          <h1 class="title">¡Bienvenido a mi portafolio!</h1>
          <p class="description">
            Hola, soy Lorenzo, desarrollador web junior apasionado por crear soluciones elegantes y
            funcionales. He trabajado con Vue.js, React, Laravel y Node.js, construyendo proyectos que combinan buen
            diseño y código limpio.
          </p>
          <p class="description">
            Me encanta aprender nuevas tecnologías y enfrentar retos que me permitan mejorar como desarrollador. En
            este portfolio encontrarás algunos de los proyectos en los que he trabajado y que reflejan mi entusiasmo
            por la programación y la innovación.
          </p>
        </div>
        
        <div class="image-wrapper">
          <img src="./../imgs/Portada.png" alt="Imagen de Lorenzo" class="profile-image" />
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  // No se requiere lógica adicional por ahora.
  </script>
  
  <style scoped>
  .welcome-section {
    padding: 2rem 1rem;
    width: 100%;
    box-sizing: border-box;
  }
  
  /* Estilos para móvil (columna) */
  .mobile-layout {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    width: 100%;
  }
  
  .image-container {
    width: 100%;
    max-width: 300px;
    display: flex;
    justify-content: center;
  }
  
  .profile-image {
    width: 100%;
    max-width: 280px;
    height: auto;
  }
  
  .content-container {
    width: 100%;
  }
  
  .title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 2.5rem; /* AUMENTADO de 1.5rem a 2.5rem */
    line-height: 1.2;
    text-align: center;
  }
  
  .description {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 1rem;
    text-align: justify;
  }
  
  .description:last-of-type {
    margin-bottom: 0;
  }
  
  /* Estilos para escritorio (fila) */
  .desktop-layout {
    display: none;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 4rem;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .content-wrapper {
    flex: 1;
    max-width: 600px;
  }
  
  .image-wrapper {
    flex-shrink: 0;
  }
  
  .image-wrapper .profile-image {
    max-width: 400px;
  }
  
  /* Media queries para responsive */
  
  /* Tablet (≥768px) */
  @media (min-width: 768px) {
    .welcome-section {
      padding: 3rem 2rem;
    }
    
    .mobile-layout {
      display: none;
    }
    
    .desktop-layout {
      display: flex;
    }
    
    .title {
      font-size: 2.5rem;
      text-align: left;
      margin-bottom: 2rem; /* Espacio normal para tablet/escritorio */
    }
    
    .description {
      font-size: 1.15rem;
      text-align: left;
      margin-bottom: 1.2rem;
    }
    
    .image-container .profile-image {
      max-width: 350px;
    }
  }
  
  /* Desktop (≥1024px) */
  @media (min-width: 1024px) {
    .welcome-section {
      padding: 4rem 3rem;
      min-height: 80vh;
      display: flex;
      align-items: center;
    }
    
    .title {
      font-size: 3rem;
      margin-bottom: 2.5rem;
    }
    
    .description {
      font-size: 1.2rem;
      line-height: 1.7;
      margin-bottom: 1.5rem;
    }
    
    .image-wrapper .profile-image {
      max-width: 450px;
    }
  }
  
  /* Desktop grande (≥1280px) */
  @media (min-width: 1280px) {
    .welcome-section {
      padding: 5rem 4rem;
    }
    
    .desktop-layout {
      gap: 6rem;
      max-width: 1400px;
    }
    
    .title {
      font-size: 3.5rem;
      margin-bottom: 3rem; /* Un poco más de espacio en pantallas grandes */
    }
    
    .description {
      font-size: 1.25rem;
    }
    
    .image-wrapper .profile-image {
      max-width: 500px;
    }
  }
  
  /* Ajustes para pantallas muy pequeñas (≤480px) */
  @media (max-width: 480px) {
    .welcome-section {
      padding: 1.5rem 1rem;
    }
    
    .mobile-layout {
      gap: 1.5rem;
    }
    
    .image-container {
      max-width: 250px;
    }
    
    .profile-image {
      max-width: 240px;
      border-radius: 10px;
    }
    
    .title {
      font-size: 1.75rem;
      margin-bottom: 2.2rem; /* AUMENTADO de 1.2rem a 2.2rem */
    }
    
    .description {
      font-size: 1rem;
      line-height: 1.5;
      margin-bottom: 0.8rem;
    }
  }
  
  /* Ajustes para iPhone SE y similares (≤375px) */
  @media (max-width: 375px) {
    .welcome-section {
      padding: 1rem 0.75rem;
    }
    
    .mobile-layout {
      gap: 1.2rem;
    }
    
    .image-container {
      max-width: 220px;
    }
    
    .profile-image {
      max-width: 210px;
    }
    
    .title {
      font-size: 1.5rem;
      margin-bottom: 2rem; /* AUMENTADO de 1rem a 2rem */
    }
    
    .description {
      font-size: 0.95rem;
      line-height: 1.5;
    }
  }
  
  /* Añadido: Para pantallas muy pequeñas verticales */
  @media (max-width: 480px) and (max-height: 700px) {
    .mobile-layout {
      gap: 1.2rem;
    }
    
    .title {
      margin-bottom: 1.8rem; /* Un poco menos en pantallas muy cortas */
    }
  }
  </style>