/* =========================================================
   悅讀童年 — 互動腳本
   1. 手機版選單開關
   2. 捲動時區塊淡入
   ========================================================= */

// ---------- 手機選單 ----------
const navToggle = document.getElementById('navToggle');
const siteNav   = document.getElementById('siteNav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const open = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open);
  });

  // 點選連結後自動關閉選單
  siteNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ---------- 捲動淡入 ----------
const revealItems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach(el => io.observe(el));
} else {
  // 舊瀏覽器：直接顯示
  revealItems.forEach(el => el.classList.add('in'));
}
