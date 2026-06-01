/* APP.JS — Router, i18n, navbar orchestration */
import { T } from './config.js';
import { revealObserver } from './helpers.js';
import { renderHome } from '../pages/home.js';
import { renderWhoWeAre } from '../pages/who-we-are.js';
import { renderBaijiu, renderBaijiuFlavor } from '../pages/baijiu.js';
import { renderChineseWine } from '../pages/wine.js';
import { renderExposition, renderEvents, renderAcademie, renderContact } from '../pages/other-pages.js';
import { renderProducer } from '../pages/producer.js';
import { renderProduct } from '../pages/product.js';

/* ── LANG STATE ── */
let lang = localStorage.getItem('bj-lang') || 'en';
const t = () => T[lang] || T.en;
window.router = (p) => router(p);

/* ── I18N ── */
function setLang(l) {
  lang = l;
  localStorage.setItem('bj-lang', l);
  document.documentElement.lang = l;
  updateLangUI();
  router();
}

function updateLangUI() {
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
}

function updateStaticI18n() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const parts = el.dataset.i18n.split('.');
    let val = t();
    for (const p of parts) val = val?.[p];
    if (val) el.textContent = val;
  });
}

/* ── ROUTER ── */
function router(path) {
  path = path || location.pathname;
  const app = document.getElementById('app');
  const navbar = document.getElementById('main-navbar');
  window.scrollTo(0, 0);
  closeMobile();

  const isHome = path === '/';

  if      (path === '/')                         { app.innerHTML = renderHome(t, lang);         document.title = lang === 'zh' ? '白酒百科' : lang === 'fr' ? 'Encyclopédie Baijiu' : 'Baijiu Encyclopedia'; }
  else if (path === '/who-we-are')               { app.innerHTML = renderWhoWeAre(t, lang);     document.title = (lang === 'zh' ? '关于我们' : lang === 'fr' ? 'Qui sommes-nous' : 'Who We Are') + ' — Baijiu Encyclopedia'; }
  else if (path === '/baijiu')                   { app.innerHTML = renderBaijiu(t, lang);       document.title = (lang === 'zh' ? '香型' : lang === 'fr' ? 'Types aromatiques' : 'Aroma Types') + ' — Baijiu Encyclopedia';
    /* Restore persisted region filter */
    setTimeout(() => {
      try {
        const saved = sessionStorage.getItem('bj-region-filter');
        if (saved && saved !== 'all') {
          const btn = document.querySelector(`.region-btn[data-region="${saved}"]`);
          if (btn) window.filterRegion(btn, saved);
        }
      } catch(_) {}
    }, 0);
  }
  else if (path.startsWith('/baijiu/')) {
    const slug = path.replace('/baijiu/','');
    app.innerHTML = renderBaijiuFlavor(slug, t, lang);
    const flavor = (lang === 'zh') ? document.querySelector('h1')?.textContent : null;
    const flavorName = document.querySelector('h1')?.textContent || slug;
    document.title = flavorName + ' — Baijiu Encyclopedia';
  }
  else if (path === '/chinese-wine')             { app.innerHTML = renderChineseWine(t, lang);  document.title = (lang === 'zh' ? '中国葡萄酒' : lang === 'fr' ? 'Vins de Chine' : 'Chinese Wine') + ' — Baijiu Encyclopedia'; }
  else if (path === '/private-expositions')      { app.innerHTML = renderExposition(t, lang);   document.title = (lang === 'zh' ? '展览' : lang === 'fr' ? 'Exposition' : 'Exhibition') + ' — Baijiu Encyclopedia'; }
  else if (path === '/events')                   { app.innerHTML = renderEvents(t, lang);       document.title = (lang === 'zh' ? '活动' : lang === 'fr' ? 'Événements' : 'Events') + ' — Baijiu Encyclopedia'; }
  else if (path === '/prestige-academie')        { app.innerHTML = renderAcademie(t, lang);     document.title = (lang === 'zh' ? '学院' : lang === 'fr' ? 'Académie' : 'Academy') + ' — Baijiu Encyclopedia'; }
  else if (path === '/contact')                  { app.innerHTML = renderContact(t, lang);      document.title = 'Contact — Baijiu Encyclopedia'; }
  else if (path.startsWith('/producer/')) {
      const slug = path.replace('/producer/', '');
      app.innerHTML = renderProducer(slug, t, lang);
      const name = document.querySelector('h1')?.textContent || slug;
      document.title = name + ' — Baijiu Encyclopedia';
    }
  else if (path.startsWith('/product/')) {
      const parts = path.replace('/product/', '').split('/');
      const producerSlug = parts[0];
      const productSlug = parts[1] || 'flagship';
      app.innerHTML = renderProduct(producerSlug, productSlug, t, lang);
      const name = document.querySelector('h2')?.textContent || productSlug;
      document.title = name + ' — Baijiu Encyclopedia';
    }
  else                                           { app.innerHTML = renderHome(t, lang);         document.title = 'Baijiu Encyclopedia'; }

  /* navbar mode */
  if (isHome) {
    navbar.className = 'on-dark';
    window.addEventListener('scroll', onHomeScroll);
  } else {
    navbar.className = 'light';
    window.removeEventListener('scroll', onHomeScroll);
  }

  /* active links */
  const programmePaths = ['/private-expositions', '/events', '/prestige-academie'];
  document.querySelectorAll('[data-nav]').forEach(el => {
    el.classList.remove('active');
    const np = el.dataset.nav;
    if (np === path || (np !== '/' && path.startsWith(np.split('/').slice(0,2).join('/')))) {
      el.classList.add('active');
    }
  });
  /* Mark dropdown trigger active when on a programme page */
  const dropdownTrigger = document.querySelector('.nav-dropdown-trigger');
  if (dropdownTrigger) {
    dropdownTrigger.classList.toggle('active', programmePaths.includes(path));
  }

  updateStaticI18n();
  updateLangUI();
  setTimeout(() => revealObserver(), 60);
}

function onHomeScroll() {
  const nb = document.getElementById('main-navbar');
  if (window.scrollY > 20) nb.classList.add('scrolled');
  else nb.classList.remove('scrolled');
}

/* ── NAVIGATION ── */
function navigate(path) { history.pushState({}, '', path); router(path); }

document.addEventListener('click', e => {
  const el = e.target.closest('[data-nav]');
  if (el) {
    const href = el.dataset.nav;
    if (href && href.startsWith('/')) { e.preventDefault(); navigate(href); }
  }
});
window.addEventListener('popstate', () => router(location.pathname));

/* ── MOBILE MENU ── */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

function closeMobile() {
  hamburger.classList.remove('open');
  mobileMenu.classList.remove('open');
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', () => {
  const open = mobileMenu.classList.contains('open');
  if (open) { closeMobile(); }
  else {
    hamburger.classList.add('open');
    mobileMenu.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
});

/* ── LANG BUTTONS ── */
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLang(btn.dataset.lang));
});

/* ── BOOT ── */
document.documentElement.lang = lang;
router(location.pathname);
updateStaticI18n();
updateLangUI();
