const menuBtn = document.getElementById('menuBtn');
const topNav = document.getElementById('topNav');

if (menuBtn && topNav) {
  menuBtn.addEventListener('click', () => {
    topNav.classList.toggle('open');
  });
}
