<template>
  <nav class="navbar">
    <!-- Logo -->
    <div class="navbar-logo">
      <a href="/">Dayron-z</a>
    </div>

    <!-- Secciones -->
    <ul class="navbar-sections">
      <li><router-link to="#about">About</router-link></li>
      <li><router-link to="#skills">Skills</router-link></li>
      <li><router-link to="#projects">Projects</router-link></li>
      <li><router-link to="#education">Education</router-link></li>
      <li><router-link to="#contact">Contact</router-link></li>
    </ul>

    <!-- Botón -->
    <div class="navbar-button">
      <a href="https://github.com/Dayron-z" target="_blank"><button>Github Profile</button></a>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  background-color:$light-purple;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 18%;

  &-logo {
    a {
      text-decoration: none;
      font-size: 1.5rem;
      font-weight: bold;
      color: $white-color;
    }
  }

  &-sections {
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

  &-button {
    button {
      font-size: 1.25rem;
      padding: 0.5rem 1rem;
      background-color: rgba(0,0,0,0);
      color: #844ce6;
      border: solid .15rem #844ce6; 
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
