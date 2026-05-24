const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-list');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

for (const link of document.querySelectorAll('.nav-list a')) {
  link.addEventListener('click', () => nav?.classList.remove('open'));
}
