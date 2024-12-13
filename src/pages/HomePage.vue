<template>
  <div class="center-section">
    <!-- Sección Home -->
    <section id="about" class="galaxy">
      <galaxy-background />
      <div class="content-about-section">
        <div class="left-about">
          <h1>Welcome to My Portfolio</h1>
          <h2>Hi, I am <span>Dayron Zapata</span></h2>
          <p>A Backend Programmer</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            delectus necessitatibus omnis voluptate libero. Error sint unde
            delectus atque suscipit doloribus aliquam reiciendis saepe, rem
            accusamus nostrum voluptatum aut aperiam?
          </p>
        </div>
        <img class="profile" src="../assets/dayron5.png" />
      </div>
    </section>

    <!-- Sección About -->
    <section id="skills">
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
import GalaxyBackground from "@/components/sections/GalaxyBackground.vue";
export default {
  components: { GalaxyBackground },
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
};
</script>

<style lang="scss" scoped >
.galaxy {
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative; /* Necesario para la galaxia */
}

.content-about-section {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  z-index: 1;
  .profile {
      border: 5px solid $medium-purple;
      height: 30.25rem;
      width: 30.25rem;  
      border-radius: 100%;
      object-fit: cover;
  }
}

section {
}

#about {
  background-color: rgba($dark-purple, 0.65); // 0.5 es el nivel de opacidad
  height: 100vh;
}

#skills {
  background-color: $dark-purple;
  height: 90vh;
}

#contact {
  background-color: $medium-purple;
  height: 90vh;
}

#about,
#skills,
#contact {
  padding: 0rem 25%;
}
</style>
