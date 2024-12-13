<template>
  <nav class="header-navbar">
    <!-- Logo -->
    <div class="header-navbar__logo">
      <a href="/">Dayron-z</a>
    </div>

    <!-- Secciones -->
    <ul class="header-navbar__sections">
      <li><router-link to="#about">About</router-link></li>
      <li><router-link to="#skills">Skills</router-link></li>
      <li><router-link to="#projects">Projects</router-link></li>
      <li><router-link to="#education">Education</router-link></li>
      <li><router-link to="#contact">Contact</router-link></li>
    </ul>

    <!-- Botón -->
    <div class="header-navbar__cta">
      <a href="https://github.com/Dayron-z" target="_blank"
        ><button>Github Profile</button></a
      >
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.header-navbar {
  background-color: $black-color;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 18%;

  &__logo {
    a {
      text-decoration: none;
      font-size: 1.5rem;
      font-weight: bold;
      color: $white-color;
    }
  }

  &__sections {
    display: flex;
    gap: 1.4rem;
    list-style: none;

    li {
      a {
        text-decoration: none;
        color: inherit;
        font-size: 1.2rem;
        font-weight: 500;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  &__cta {
    button {
      font-size: 1.25rem;
      padding: 0.5rem 1rem;
      background-color: transparent;
      color: #844ce6;
      border: 0.15rem solid #844ce6;
      border-radius: 0.5rem;
      cursor: pointer;
      transition: background-color 1s, color 0.5s;

      &:hover {
        background-color: rgb(154, 77, 255);
        color: $white-color;
      }
    }
  }
}
</style>
