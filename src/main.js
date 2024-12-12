// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Asegúrate de importar el enrutador correctamente

createApp(App).use(router).mount('#app'); // Usa el enrutador en la aplicación
