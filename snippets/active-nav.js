const links = document.querySelectorAll('nav a[href^="#"]');
const sections = [...links].map((a) => document.querySelector(a.getAttribute('href')));
window.addEventListener('scroll', () => {
  const pos = window.scrollY + 120;
  sections.forEach((s, i) => {
    if (s && s.offsetTop <= pos && s.offsetTop + s.offsetHeight > pos) {
      links.forEach((l) => l.classList.remove('active'));
      links[i].classList.add('active');
    }
  });
});
