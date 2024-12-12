<template>
  <div ref="galaxyBackground" class="galaxy-background"></div>
</template>
  
  <script>
import * as THREE from "three";

export default {
  mounted() {
    this.createGalaxyBackground();
  },
  methods: {
    createGalaxyBackground() {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      this.$refs.galaxyBackground.appendChild(renderer.domElement);

      // Crear las partículas de la galaxia
      const geometry = new THREE.BufferGeometry();
      const particlesCount = 5000;
      const positions = new Float32Array(particlesCount * 3);

      for (let i = 0; i < particlesCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 1000; // X
        positions[i * 3 + 1] = (Math.random() - 0.5) * 1000; // Y
        positions[i * 3 + 2] = (Math.random() - 0.5) * 1000; // Z
      }

      geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );

      const material = new THREE.PointsMaterial({ color: 0x888888, size: 1 });
      const particles = new THREE.Points(geometry, material);
      scene.add(particles);

      // Configurar la cámara
      camera.position.z = 500;

      // Función de animación
      const animate = function () {
        requestAnimationFrame(animate);

        particles.rotation.x += 0.001;
        particles.rotation.y += 0.001;

        renderer.render(scene, camera);
      };

      animate();

      // Ajustar el tamaño del lienzo al redimensionar la ventana
      window.addEventListener("resize", () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
      });
    },
  },
};
</script>
  
  <style scoped>
.galaxy-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0; /* Asegura que quede detrás del contenido */
}
</style>
  