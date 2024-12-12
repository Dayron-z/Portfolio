<template>
  <div>
    <!-- Sección Home -->
    <section id="home">
      <h1>Welcome to My Portfolio</h1>
      <p>Here is an introduction to what I do.</p>
    </section>

    <!-- Sección About -->
    <section id="about">
      <h2>About Me</h2>
      <p>Information about me.</p>
    </section>

    <!-- Sección Contact -->
    <section id="contact">
      <h2>Contact</h2>
      <p>Details about how to get in touch with me.</p>
    </section>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home'
};                        
</script>

<style lang="scss" scoped >
section {
  padding: 50px;
}

#home {
  background-color: rgba($dark-purple, 0.65); // 0.5 es el nivel de opacidad
  height: 90vh;
}

#about {
  background-color:$dark-purple;
  height: 90vh;
}

#contact {
  background-color: $medium-purple;
  height: 90vh; 
}
</style>
