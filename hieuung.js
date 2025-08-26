function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
// -------- NỀN TOÀN TRANG (#bg) : TRÁI ĐẤT XOAY --------
(function () {
  const canvas = document.getElementById('bg');
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);

  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(5, 5, 5);
  scene.add(light);

  const textureLoader = new THREE.TextureLoader();
  const earthTexture = textureLoader.load('https://threejs.org/examples/textures/land_ocean_ice_cloud_2048.jpg');
  const earthGeo = new THREE.SphereGeometry(5, 64, 64);
  const earthMat = new THREE.MeshPhongMaterial({ map: earthTexture });
  const earth = new THREE.Mesh(earthGeo, earthMat);
  scene.add(earth);

  camera.position.z = 12;

  function animate() {
    requestAnimationFrame(animate);
    earth.rotation.y += 0.002;
    renderer.render(scene, camera);
  }
  animate();

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
})();
//
const cards = document.querySelectorAll('.service-card');

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => observer.observe(card));
//
// Mở/đóng FAQ
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
  const btn = item.querySelector('.faq-question');
  btn.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});

// Hiệu ứng bay vào khi scroll
const observer2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.faq-item').forEach(item => {
  observer2.observe(item);
});
//
window.addEventListener('load', () => {
  document.querySelector('.hero-left').classList.add('show');
  document.querySelector('.hero-right').classList.add('show');
});
window.addEventListener('load', () => {
  document.querySelector('.hero-title').classList.add('show');
});
// Báo giá
const modal = document.getElementById("quoteModal");
const btn = document.getElementById("quoteBtn");
const span = modal.querySelector(".close");

btn.onclick = (e) => {
  e.preventDefault();
  modal.style.display = "block";
}

span.onclick = () => {
  modal.style.display = "none";
}

window.onclick = (event) => {
  if (event.target == modal) modal.style.display = "none";
}
//
const projects = document.querySelectorAll('.project-item');

const scrollObserver = new IntersectionObserver((entries, scrollObserver) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      scrollObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

projects.forEach(project => {
  scrollObserver.observe(project);
});
//
const scrollItems = document.querySelectorAll('.scroll-item');

const scrollObserver2 = new IntersectionObserver((entries, scrollObserver) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      scrollObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

scrollItems.forEach(item => {
  scrollObserver2.observe(item);
});