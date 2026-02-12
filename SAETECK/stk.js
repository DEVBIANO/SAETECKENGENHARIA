// Função para observar sections
const sections = document.querySelectorAll('.fade-section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 }); // aparece quando 20% da section está visível

sections.forEach(section => {
  observer.observe(section);
});

// Ao clicar em links do menu
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', (e) => {
    const targetId = e.target.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    // rolar suavemente até a section
    targetSection.scrollIntoView({ behavior: 'smooth' });

    // força fade-in ao clicar
    targetSection.classList.add('visible');
  });
});