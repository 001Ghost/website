/* OTHER PAGES: Exposition, Events, Academie, Contact */
import { IMAGES } from '../js/config.js';
import { arrowSVG } from '../js/helpers.js';
import { getArticlesByCategory } from '../js/articles-data.js';

/* ─── EXPOSITION PAGE ─── */
export function renderExposition(t, lang) {
  const tr = t().expositions;
  const articles = getArticlesByCategory('exhibition');

  const articleCard = (a) => `
    <article class="blog-card reveal">
      <div class="blog-card-img">
        ${a.image
          ? `<img src="${a.image}" alt="${a.title[lang] || a.title.fr}" loading="lazy"/>`
          : `<div class="blog-card-img-placeholder"></div>`
        }
      </div>
      <div class="blog-card-body">
        <p class="blog-card-date">${a.date}</p>
        <h3 class="blog-card-title">${a.title[lang] || a.title.fr}</h3>
        <p class="blog-card-excerpt">${a.excerpt[lang] || a.excerpt.fr}</p>
        <a href="/exposition/${a.slug}" data-nav="/exposition/${a.slug}" class="btn btn-primary" style="margin-top:1.25rem;display:inline-block;">
          ${lang === 'zh' ? '阅读更多' : lang === 'fr' ? 'Lire plus' : 'Read more'}
        </a>
      </div>
    </article>
  `;

  return `
<div class="page-entry">

  <!-- HEADER -->
  <section class="section-sm">
    <div class="wrapper">
      <div class="reveal">
        <p class="label mb-2">${tr.overline}</p>
        <h1>${tr.title}</h1>
        <p class="lead max-prose mt-3">${tr.lead}</p>
      </div>
    </div>
  </section>

  <!-- ARTICLES GRID -->
  <section class="section section-cream">
    <div class="wrapper">
      <div class="blog-grid">
        ${articles.map(articleCard).join('')}
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="section-sm" style="background:var(--ink);">
    <div class="wrapper" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1.5rem;">
      <div>
        <p style="color:rgba(255,255,255,0.5);font-size:11px;letter-spacing:0.25em;text-transform:uppercase;font-weight:600;margin-bottom:0.5rem;">${lang === 'zh' ? '2025年版' : lang === 'fr' ? 'Édition 2025' : '2025 Edition'}</p>
        <h3 class="serif" style="color:#fff;">${lang === 'zh' ? '更大规模，更多内容' : lang === 'fr' ? 'Plus grand, plus riche' : 'Bigger, richer program'}</h3>
      </div>
      <a href="/contact" data-nav="/contact" class="btn btn-ghost-white">${lang === 'zh' ? '联系我们' : lang === 'fr' ? 'Nous contacter' : 'Get in touch'} ${arrowSVG()}</a>
    </div>
  </section>

</div>`;
}



//* ─── EVENTS PAGE ─── */
export function renderEvents(t, lang) {
  const tr = t().events;
  const articles = getArticlesByCategory('event');

  const articleCard = (a) => `
    <article class="blog-card reveal">
      <div class="blog-card-img">
        ${a.image
          ? `<img src="${a.image}" alt="${a.title[lang] || a.title.fr}" loading="lazy"/>`
          : `<div class="blog-card-img-placeholder"></div>`
        }
      </div>
      <div class="blog-card-body">
        <p class="blog-card-date">${a.date}</p>
        <h3 class="blog-card-title">${a.title[lang] || a.title.fr}</h3>
        <p class="blog-card-excerpt">${a.excerpt[lang] || a.excerpt.fr}</p>
        <a href="/evenements/${a.slug}" data-nav="/evenements/${a.slug}" class="btn btn-primary" style="margin-top:1.25rem;display:inline-block;">
          ${lang === 'zh' ? '阅读更多' : lang === 'fr' ? 'Lire plus' : 'Read more'}
        </a>
      </div>
    </article>
  `;

  return `
<div class="page-entry">

  <!-- HEADER -->
  <section class="section-sm">
    <div class="wrapper">
      <div class="reveal">
        <p class="label mb-2">${tr.overline}</p>
        <h1>${tr.title}</h1>
        <p class="lead max-prose mt-3">${tr.lead}</p>
      </div>
    </div>
  </section>

  <!-- ARTICLES GRID -->
  <section class="section section-cream">
    <div class="wrapper">
      <div class="blog-grid">
        ${articles.map(articleCard).join('')}
      </div>
    </div>
  </section>

</div>`;
}

/* ─── ACADEMIE PAGE ─── */
export function renderAcademie(t, lang) {
  const tr = t().academie;
  return `
<div class="page-entry">

  <!-- HEADER -->
  <section class="section-sm">
    <div class="wrapper">
      <div class="reveal">
        <p class="label mb-2">${tr.overline}</p>
        <h1>${tr.title}</h1>
        <p class="lead max-prose mt-3">${tr.lead}</p>
      </div>
    </div>
  </section>

  <!-- HERO -->
  <div class="wrapper-wide reveal" style="margin-bottom:4rem;">
    <div class="img-wrap ratio-21-9" style="border-radius:4px;">
      <img src="${IMAGES.temple}" alt="Chinese culture" loading="lazy"/>
    </div>
  </div>

  <!-- GUIDES GRID -->
  <section class="section section-cream">
    <div class="wrapper">
      <div class="reveal">
        <div class="section-title-block mb-4">
          <p class="label">${lang === 'zh' ? '教育指南' : lang === 'fr' ? 'Guides éducatifs' : 'Educational Guides'}</p>
          <div class="divider-line"></div>
        </div>
      </div>
      <div class="grid-3" style="gap:1.25rem;">
        ${tr.guides.map((g, i) => `
          <div class="guide-card reveal" style="transition-delay:${i*60}ms;">
            <span class="guide-tag">${g.tag}</span>
            <div class="guide-title">${g.title}</div>
            <p class="guide-desc">${g.desc}</p>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- VIDEO PLACEHOLDER -->
  <section class="section">
    <div class="wrapper">
      <div class="reveal">
        <div class="section-title-block mb-3">
          <p class="label">${lang === 'zh' ? '视频系列' : lang === 'fr' ? 'Série vidéo' : 'Video Series'}</p>
          <div class="divider-line"></div>
        </div>
        <div class="grid-2" style="gap:1.5rem;">
          ${[
            {
              title: lang === 'zh' ? '白酒香型完整指南' : lang === 'fr' ? 'Guide complet des types aromatiques' : 'Complete Guide to Baijiu Aroma Types',
              desc: lang === 'zh' ? '系统介绍11种官方香型，含品鉴笔记和生产工艺解析。' : lang === 'fr' ? 'Introduction systématique aux 11 types aromatiques officiels avec notes de dégustation.' : 'A systematic introduction to all 11 official aroma types, with tasting notes and production breakdowns.',
            },
            {
              title: lang === 'zh' ? '宁夏：中国的波尔多' : lang === 'fr' ? 'Ningxia : le Bordeaux de Chine' : 'Ningxia: China\'s Bordeaux',
              desc: lang === 'zh' ? '深度探索宁夏产区——贺兰晴雪、银色高地及其他标杆酒庄。' : lang === 'fr' ? 'Exploration approfondie de la région de Ningxia — Helan Qingxue, Silver Heights et autres références.' : 'A deep dive into the Ningxia region — Helan Qingxue, Silver Heights, and other benchmark estates.',
            },
            {
              title: lang === 'zh' ? '白酒品鉴入门' : lang === 'fr' ? 'Introduction à la dégustation du Baijiu' : 'Introduction to Baijiu Tasting',
              desc: lang === 'zh' ? '实用品鉴方法：如何评估白酒的香气、口感和余味。' : lang === 'fr' ? 'Méthodologie pratique : évaluer les arômes, la bouche et la finale d\'un Baijiu.' : 'Practical methodology: how to assess the nose, palate, and finish of a Baijiu.',
            },
            {
              title: lang === 'zh' ? '敖云：喜马拉雅山脚下的葡萄酒' : lang === 'fr' ? 'Ao Yun : le vin de l\'Himalaya' : 'Ao Yun: Wine at the Foot of the Himalayas',
              desc: lang === 'zh' ? '探索LVMH在云南海拔2600米处建立的卓越高海拔项目。' : lang === 'fr' ? 'Le projet d\'altitude extraordinaire de LVMH à 2 600 m au Yunnan.' : 'LVMH\'s extraordinary high-altitude project at 2,600m in Yunnan.',
            },
          ].map((v, i) => `
            <div class="reveal card" style="transition-delay:${i*80}ms;">
              <div class="img-wrap ratio-16-9" style="background:var(--ink);display:flex;align-items:center;justify-content:center;">
                <div style="color:#fff;text-align:center;padding:2rem;">
                  <div style="font-size:2.5rem;margin-bottom:0.5rem;">▶</div>
                  <div style="font-family:'Outfit',sans-serif;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;opacity:0.5;">${lang === 'zh' ? '即将推出' : lang === 'fr' ? 'Bientôt disponible' : 'Coming soon'}</div>
                </div>
              </div>
              <div class="card-body">
                <h4 style="font-family:'Cormorant Garamond',serif;font-size:1.1rem;font-weight:500;margin-bottom:0.5rem;">${v.title}</h4>
                <p class="body-sm">${v.desc}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="section-sm" style="background:var(--red);">
    <div class="wrapper" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1.5rem;">
      <div>
        <h3 class="serif" style="color:#fff;">${lang === 'zh' ? '有问题或建议？' : lang === 'fr' ? 'Des questions ou suggestions ?' : 'Questions or suggestions?'}</h3>
        <p style="color:rgba(255,255,255,0.7);margin-top:0.35rem;font-size:0.9rem;">${lang === 'zh' ? '我们欢迎您的意见。' : lang === 'fr' ? 'Nous accueillons vos retours.' : 'We welcome your feedback.'}</p>
      </div>
      <a href="/contact" data-nav="/contact" class="btn btn-ghost-white">${lang === 'zh' ? '联系我们' : lang === 'fr' ? 'Nous contacter' : 'Contact us'} ${arrowSVG()}</a>
    </div>
  </section>

</div>`;
}

/* ─── CONTACT PAGE ─── */
export function renderContact(t, lang) {
  const tr = t().contact;
  return `
<div class="page-entry">

  <!-- HEADER -->
  <section class="section">
    <div class="wrapper">
      <div class="reveal text-center" style="max-width:600px;margin:0 auto;">
        <p class="label mb-2">${tr.overline}</p>
        <h1>${tr.title}</h1>
        <p class="lead mt-3">${tr.lead}</p>
      </div>
    </div>
  </section>

  <!-- CONTACT BLOCK -->
  <section class="section-sm" style="padding-bottom:6rem;">
    <div class="wrapper">
      <div class="contact-block reveal">

        <div class="contact-item">
          <div class="contact-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          </div>
          <div>
            <div class="contact-label">${lang === 'zh' ? '电子邮件' : lang === 'fr' ? 'Adresse email' : 'Email address'}</div>
            <a href="mailto:${tr.email}" class="contact-value" style="display:block;transition:color 0.3s;" onmouseover="this.style.color='var(--red)'" onmouseout="this.style.color='var(--ink)'">${tr.email}</a>
          </div>
        </div>

        <div class="contact-item">
          <div class="contact-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.36 10a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.27 0h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.67a16 16 0 0 0 8 8l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 24 17z"/></svg>
          </div>
          <div>
            <div class="contact-label">${lang === 'zh' ? '电话' : lang === 'fr' ? 'Téléphone' : 'Phone'}</div>
            <a href="tel:${tr.phone.replace(/\s/g,'')}" class="contact-value" style="display:block;transition:color 0.3s;" onmouseover="this.style.color='var(--red)'" onmouseout="this.style.color='var(--ink)'">${tr.phone}</a>
          </div>
        </div>

        <div class="contact-item" style="border-bottom:none;padding-bottom:0;">
          <div class="contact-icon" style="background:var(--gold);">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          </div>
          <div>
            <div class="contact-label">${lang === 'zh' ? '关于我们' : lang === 'fr' ? 'À propos' : 'About'}</div>
            <div class="contact-value" style="font-size:1.1rem;">${lang === 'zh' ? '独立教育资源' : lang === 'fr' ? 'Ressource éducative indépendante' : 'Independent educational resource'}</div>
            <p class="body-sm mt-1">${lang === 'zh' ? '关于白酒与中国葡萄酒的非商业性教育资源。我们欢迎更正、补充内容或合作提案。' : lang === 'fr' ? 'Ressource éducative non-commerciale sur le Baijiu et les vins chinois. Nous accueillons corrections, suggestions de contenu ou propositions de collaboration.' : 'A non-commercial educational resource on Baijiu and Chinese wines. We welcome corrections, content suggestions, or collaboration proposals.'}</p>
          </div>
        </div>

      </div>
    </div>
  </section>

</div>`;
}
