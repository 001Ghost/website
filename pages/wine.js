/* PAGE: CHINESE WINE */
import { REGIONS, WINE_BRANDS } from '../js/data.js';
import { IMAGES } from '../js/config.js';
import { arrowSVG } from '../js/helpers.js';

export function renderChineseWine(t, lang) {
  const tr = t().wine;

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
      <img src="${IMAGES.changyu}" alt="Chinese vineyard" loading="lazy"/>
    </div>
  </div>

  <!-- KEY FACTS -->
  <section class="section section-cream">
    <div class="wrapper">
      <div class="reveal">
        <div class="section-title-block mb-4">
          <p class="label">${lang === 'zh' ? '关键数据' : lang === 'fr' ? 'Chiffres clés' : 'Key facts'}</p>
          <div class="divider-line"></div>
        </div>
      </div>
      <div class="stats-bar" style="border-radius:4px;">
        <div class="stats-grid">
          ${[
            { num: lang === 'zh' ? '第六' : '6th', label: lang === 'zh' ? '全球葡萄酒产量排名' : lang === 'fr' ? 'Plus grand producteur mondial' : 'Largest wine producer globally' },
            { num: '2,000+', label: lang === 'zh' ? '年葡萄酒酿造史' : lang === 'fr' ? 'Ans de viticulture' : 'Years of winemaking history' },
            { num: '2011', label: lang === 'zh' ? '贺兰晴雪首次获国际大奖' : lang === 'fr' ? 'Premier grand trophée international' : 'First major international trophy' },
            { num: '2,600m', label: lang === 'zh' ? '敖云酒庄海拔高度' : lang === 'fr' ? 'Altitude de Ao Yun (Yunnan)' : 'Altitude of Ao Yun estate (Yunnan)' },
          ].map(s => `
            <div class="stat-item reveal">
              <div class="stat-num">${s.num}</div>
              <div class="stat-label">${s.label}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  </section>

  <!-- REGIONS -->
  <section class="section">
    <div class="wrapper">
      <div class="reveal">
        <div class="section-title-block mb-4">
          <p class="label">${lang === 'zh' ? '主要产区' : lang === 'fr' ? 'Régions viticoles' : 'Wine Regions'}</p>
          <div class="divider-line"></div>
        </div>
      </div>
      <div class="grid-3" style="gap:1.25rem;">
        ${REGIONS.map((r, i) => {
          const desc = r.desc[lang] || r.desc.en;
          return `
          <div class="wine-region-card reveal" style="transition-delay:${i*60}ms;">
            <div class="img-wrap ratio-16-9">
              <img src="${r.image}" alt="${r.name}" loading="lazy"/>
            </div>
            <div class="wine-region-body">
              <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:0.5rem;">
                <h3 style="font-size:1.2rem;">${r.name}</h3>
                <span class="wine-region-zh">${r.nameZh}</span>
              </div>
              <p class="body-sm" style="margin-bottom:1rem;">${desc}</p>
              <div class="wine-brands-list">
                ${r.brands.map(b => `<span class="wine-brand-chip">${b}</span>`).join('')}
              </div>
            </div>
          </div>`;
        }).join('')}
      </div>
    </div>
  </section>

  <!-- FEATURED ESTATES -->
  <section class="section section-dark">
    <div class="wrapper">
      <div class="reveal">
        <p class="label label-gold mb-2">${lang === 'zh' ? '旗舰酒庄' : lang === 'fr' ? 'Domaines phares' : 'Flagship Estates'}</p>
        <h2 style="color:#fff;margin-bottom:3rem;">${lang === 'zh' ? '中国葡萄酒的标杆' : lang === 'fr' ? 'Les références du vin chinois' : 'The benchmarks of Chinese wine'}</h2>
      </div>
      <div class="grid-2" style="gap:1.5rem;">
        ${WINE_BRANDS.map((wb, i) => {
          const desc = wb.desc[lang] || wb.desc.en;
          return `
          <div class="reveal" style="transition-delay:${i*60}ms;">
            <div style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.08);border-radius:4px;padding:2rem;display:flex;flex-direction:column;gap:0.75rem;">
              <div style="display:flex;align-items:baseline;justify-content:space-between;gap:1rem;">
                <h3 style="color:#fff;font-size:1.2rem;">${wb.name}</h3>
                <span style="font-family:'Outfit',sans-serif;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:var(--gold-light);white-space:nowrap;">${wb.region.toUpperCase()}</span>
              </div>
              <p style="font-size:0.875rem;color:rgba(255,255,255,0.6);line-height:1.65;">${desc}</p>
            </div>
          </div>`;
        }).join('')}
      </div>
    </div>
  </section>

  <!-- CHANGYU CALLOUT -->
  <section class="section-sm" style="background:var(--red);">
    <div class="wrapper" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1.5rem;">
      <div>
        <p style="color:rgba(255,255,255,0.7);font-size:11px;letter-spacing:0.25em;text-transform:uppercase;font-weight:600;margin-bottom:0.5rem;">${lang === 'zh' ? '品牌聚焦' : lang === 'fr' ? 'Marque à l\'honneur' : 'Brand Spotlight'}</p>
        <h3 class="serif" style="color:#fff;font-size:clamp(1.1rem,2vw,1.625rem);">${lang === 'zh' ? '张裕：中国葡萄酒130年的历史' : lang === 'fr' ? 'Changyu : 130 ans de vin chinois' : 'Changyu: 130 years of Chinese wine'}</h3>
      </div>
      <a href="/events" data-nav="/events" class="btn btn-ghost-white">${lang === 'zh' ? '了解更多' : lang === 'fr' ? 'En savoir plus' : 'Learn more'} ${arrowSVG()}</a>
    </div>
  </section>

</div>`;
}
