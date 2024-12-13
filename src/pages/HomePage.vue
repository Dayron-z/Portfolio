<template>
  <div class="home-container">
    <!-- Sección Inicio -->
    <section id="about" class="about-section">
      <galaxy-background />
      <div class="about-section__content">
        <div class="about-section__text">
          <h1 class="about-section__text__welcome">Welcome to My Portfolio 😎</h1>
          <h2 class="about-section__text__intro">
            I am <span class="about-section__text__intro__name">Dayron Yeins</span>
          </h2>
          <p class="about-section__text__role">A Backend Programmer</p>
          <p class="about-section__text__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            delectus necessitatibus omnis voluptate libero. Error sint unde
            delectus atque suscipit doloribus aliquam reiciendis saepe, rem
            accusamus nostrum voluptatum aut aperiam?
          </p>
        </div>
        <img class="about-section__profile" src="../assets/dayron5.png" alt="Profile Image" />
      </div>
    </section>

    <!-- Sección Habilidades -->
    <section id="skills" class="skills-section">
      <h2 class="skills-section__title">About Me</h2>
      <p class="skills-section__info">Information about me.</p>
    </section>

    <!-- Sección Contacto -->
    <section id="contact" class="contact-section">
      <h2 class="contact-section__title">Contact</h2>
      <p class="contact-section__info">Details about how to get in touch with me.</p>
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

<style lang="scss" scoped>
.home-container {
  /* Contenedor principal */
  .about-section {
    display: flex;
    flex-direction: column;
    height: 100vh;
    position: relative; /* Necesario para la galaxia */
    padding: 0rem 21%;

    &__content {
      display: flex;
      align-items: center;
      gap: 7.7rem;
      height: 100%;
      width: 100%;
      z-index: 1;
    }

    &__text {
      display: flex;
      flex-direction: column;
      color: $white-color;
      gap: 7px;

      &__welcome {
        font-size: 4.2rem;
        text-shadow: 0px 1px 14px $white-color;
      }

      &__intro {
        font-size: 2.2rem;

        &__name {
          color: $black-color;
          margin-left: 4px;
          font-size: 2.8rem;
          text-shadow: 0px 1px 14px $white-color;
          font-weight: bold;
        }
      }

      &__role {
        font-size: 1.8rem;
      }

      &__description {
        font-size: 1.6rem;
        max-width: 450px;
        text-align: justify;
      }
    }

    &__profile {
      border: 5px solid $medium-purple;
      height: 28.25rem;
      width: 28.25rem;
      border-radius: 100%;
      object-fit: cover;
    }
  }

  /* Sección Habilidades */
  .skills-section {
    background-color: $dark-purple;
    padding: 0rem 21%;
    height: 90vh;

    &__title {
      font-size: 2rem;
      color: $white-color;
    }

    &__info {
      font-size: 1.2rem;
      color: $gray-color;
    }
  }

  /* Sección Contacto */
  .contact-section {
    background-color: $medium-purple;
    padding: 0rem 21%;
    height: 90vh;

    &__title {
      font-size: 2rem;
      color: $white-color;
    }

    &__info {
      font-size: 1.2rem;
      color: $gray-color;
    }
  }
}

#about {
  background-color: rgba($dark-purple, 0.65); /* 0.5 es el nivel de opacidad */
}
</style>
