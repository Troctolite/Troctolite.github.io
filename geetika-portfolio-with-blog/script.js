const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.primary-nav');
if (menuButton && nav) menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('is-open', open);
});
if (menuButton && nav) nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menuButton.setAttribute('aria-expanded', 'false');
  nav.classList.remove('is-open');
}));
const filterButtons = document.querySelectorAll('[data-filter]');
const projects = document.querySelectorAll('.project-card');
filterButtons.forEach(button => button.addEventListener('click', () => {
  const selected = button.dataset.filter;
  filterButtons.forEach(b => {
    const active = b === button;
    b.classList.toggle('is-active', active);
    b.setAttribute('aria-pressed', String(active));
  });
  projects.forEach(project => {
    project.hidden = selected !== 'all' && !project.dataset.category.split(' ').includes(selected);
  });
}));
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
