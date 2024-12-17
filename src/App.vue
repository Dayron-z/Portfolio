<template>
  <div id="app">
    <div class="layout-container">
      <header class="layout-container__navbar">
        <NavBar />
      </header>

      <gradient-background class="layout-container__content">
        <RouterView />
      </gradient-background>
    </div>
  </div>
</template>

<script>
import { RouterView } from "vue-router";
import GradientBackground from "./components/common/GradientBackground.vue";
import NavBar from "./components/sections/NavBar.vue";
export default {
  name: "App",
  components: {
    NavBar,
    RouterView,
    GradientBackground,
  },
};
</script>

<style lang="css">
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

/* Tailwind imports */
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body {
  margin: 0;
  height: auto; /* Permite que se ajuste a la altura del contenido */
  overflow-x: hidden; /* Evita desplazamiento horizontal no deseado */
}

body {
  font-family: "Poppins", serif;
  font-weight: 400;
  font-style: normal;
  background-color: #333;
  color: #ccc;
  min-height: 100%; /* Permite que el body ocupe al menos toda la altura de la pantalla */
}

#app {
  display: flex;
  flex-direction: column;
  min-height: auto; /* Deja que el contenedor crezca según el contenido */
  z-index: 20;
}

.layout-container {
  display: flex;
  flex-direction: column;
  flex-grow: 1; /* Permite que el contenido crezca y ocupe el espacio disponible */
}

.layout-container__navbar {
  min-height: 8%;  /* Altura mínima de la barra de navegación */
}

.layout-container__content {
      /* Permite que el contenido ocupe el espacio restante */
  overflow-y: auto; /* Permite el desplazamiento vertical si es necesario */
}
</style>
