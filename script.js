// ===== MENU MOBILE =====
const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');
if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    siteNav.classList.toggle('abierto');
  });
  siteNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => siteNav.classList.remove('abierto'));
  });
}

// ===== TABS DEL MENU (tragos / cervezas / picadas) =====
const tabButtons = document.querySelectorAll('.tab-btn');
const panels = document.querySelectorAll('.menu-panel');
tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.tab;
    tabButtons.forEach(b => b.classList.remove('activo'));
    panels.forEach(p => p.classList.remove('activo'));
    btn.classList.add('activo');
    document.querySelector(`.menu-panel[data-panel="${target}"]`).classList.add('activo');
  });
});

// ===== AÑO EN EL FOOTER =====
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
