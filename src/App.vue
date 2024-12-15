<template>
  <div id="app">
    <div class="layout-container">
      <header class="layout-container__navbar">
        <NavBar />
      </header>
      <main class="layout-container__content">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script>
import { RouterView } from 'vue-router';
import NavBar from './components/sections/NavBar.vue';
export default {
  name: 'App',
  components: {
    NavBar,
    RouterView,
  }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Poppins", serif;
  font-weight: 400;
  font-style: normal;
  background-color: #333;
  color: #ccc;
}

html {
  scroll-behavior: smooth;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.layout-container {
  display: flex;
  flex-direction: column;

  &__navbar {
    height: 8%;
  }

  &__content {
    flex: 1;
  }
}
</style>
