// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'; // Importa las funciones correctas
import HomePage from '@/pages/HomePage.vue'; // Asegúrate de que este archivo existe

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
];

const router = createRouter({
  history: createWebHistory(), // Establece el historial
  routes, // Establece las rutas
});

export default router;
