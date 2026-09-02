const correctionStyles = document.createElement('link');
correctionStyles.rel = 'stylesheet';
correctionStyles.href = 'corrections.css';
document.head.appendChild(correctionStyles);

const icons = {
  arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8"/></svg>',
  check: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg>',
  search: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="5.5"/><path d="m15 15 4.5 4.5"/></svg>',
  pin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 10c0 4.5-7 10-7 10S5 14.5 5 10a7 7 0 1 1 14 0Z"/><circle cx="12" cy="10" r="2"/></svg>',
  code: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14"/></svg>',
  star: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 2.6 5.3 5.8.8-4.2 4.1 1 5.8-5.2-2.7L6.8 19l1-5.8-4.2-4.1 5.8-.8L12 3Z"/></svg>',
  phone: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4h3l1 4-2 1c1.2 2.7 3.3 4.8 6 6l1-2 4 1v3c0 1.7-1.3 3-3 3C10.4 20 4 13.6 4 7c0-1.7 1.3-3 3-3Z"/></svg>',
  traditional: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10" cy="10" r="5"/><path d="m14 14 5 5M5 10h10M10 5v10"/></svg>',
  local: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z"/><circle cx="12" cy="10" r="2"/></svg>',
  geo: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="12" r="7"/><path d="M4 12h14M11 5c2 2.2 3 4.5 3 7s-1 4.8-3 7M11 5c-2 2.2-3 4.5-3 7s1 4.8 3 7"/><path d="m18.5 4 .6 1.5L20.5 6l-1.4.6-.6 1.4-.6-1.4L16.5 6l1.4-.5.6-1.5Z"/></svg>',
  aeo: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5h14v10H9l-4 4V5Z"/><path d="M10 9.1a2 2 0 0 1 3.8.9c0 1.3-1.8 1.5-1.8 2.7M12 15.2h.01"/></svg>',
  visibility: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 19V9M9 19V5M14 19v-7M19 19V7"/><path d="M2 19h20"/></svg>',
  traffic: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 4 13 7-6 2-2 6L5 4Z"/><path d="m13 14 4 4"/></svg>',
  booked: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="5" width="16" height="15" rx="2"/><path d="M8 3v4M16 3v4M4 9h16m-11 5 2 2 4-4"/></svg>'
};

const focusData = {
  plumbing: {
    label: 'Plumbing',
    kicker: 'Urgent demand + recurring high-value services',
    title: 'Own the searches that happen when homeowners need help now.',
    body: 'Emergency plumbing, drains, water heaters, sewer work and repiping create strong local intent. Serphic builds the search architecture around the services and areas you can actually serve.',
    services: ['Emergency plumber', 'Water heater repair', 'Drain & sewer', 'Leak detection', 'Repiping'],
    values: [91, 76, 63, 54, 43]
  },
  hvac: {
    label: 'HVAC',
    kicker: 'Repair urgency + replacement economics',
    title: 'Turn seasonal search demand into repair and replacement opportunities.',
    body: 'AC repair, replacement, heat pumps, furnaces and maintenance need different intent paths. Serphic connects service pages, Maps, reviews and conversion so high-value demand does not leak to competitors.',
    services: ['AC repair', 'AC replacement', 'Heat pumps', 'Furnace repair', 'Maintenance'],
    values: [94, 84, 67, 58, 49]
  }
};

const reviewData = {
  maps: {
    label: 'Maps & Local', eyebrow: 'LOCAL VISIBILITY', icon: icons.pin,
    headline: 'Coverage weakens outside the core radius.',
    insight: 'The business appears competitive near its location, but priority suburbs show wider competitor coverage.',
    action: 'Validate GBP relevance, service-area pages, review velocity and local authority before expanding content.',
    metric: '3 priority zones', metricLabel: 'to validate first'
  },
  organic: {
    label: 'Commercial Pages', eyebrow: 'ORGANIC OWNERSHIP', icon: icons.search,
    headline: 'High-value service intent is split across weak page owners.',
    insight: 'Several valuable queries do not have one clear commercial landing page with enough topical and local relevance.',
    action: 'Consolidate intent, strengthen internal links and expand only where the service deserves a dedicated page.',
    metric: '5 service intents', metricLabel: 'with ownership gaps'
  },
  technical: {
    label: 'Technical', eyebrow: 'TECHNICAL CONTROL', icon: icons.code,
    headline: 'Crawl paths are making important pages work harder than they should.',
    insight: 'Indexation, internal linking and site architecture are creating avoidable friction around commercial pages.',
    action: 'Fix the path to money pages first: crawlability, redirects, canonicals, schema and internal link depth.',
    metric: '12 signals', metricLabel: 'grouped by impact'
  },
  reviews: {
    label: 'Reviews', eyebrow: 'TRUST & PROMINENCE', icon: icons.star,
    headline: 'Review strength is good, but velocity trails the local leaders.',
    insight: 'Competitors are creating fresher proof while the business relies more heavily on older review volume.',
    action: 'Build a compliant request workflow tied to completed jobs, then measure velocity and response quality.',
    metric: '2.1× gap', metricLabel: 'in recent review pace'
  },
  conversion: {
    label: 'Conversion', eyebrow: 'CALL PATH', icon: icons.phone,
    headline: 'Search demand reaches the site, but the next action is not always obvious.',
    insight: 'Emergency messaging, click-to-call prominence, form friction and financing trust all affect whether visibility becomes revenue.',
    action: 'Prioritize mobile call paths, concise forms, service-specific CTAs and lead-source measurement.',
    metric: '4 friction points', metricLabel: 'in the sample journey'
  }
};

function renderFocus(key) {
  const item = focusData[key];
  document.getElementById('focus-kicker').textContent = item.kicker;
  document.getElementById('focus-title').textContent = item.title;
  document.getElementById('focus-body').textContent = item.body;
  document.getElementById('focus-label-link').textContent = item.label;
  const rows = document.getElementById('atlas-rows');
  rows.innerHTML = item.services.map((service, index) => `
    <div class="atlas-row">
      <div class="atlas-name"><strong>${service}</strong><small>${index < 2 ? 'High intent' : 'Growth opportunity'}</small></div>
      <div class="atlas-bar"><i style="width:${item.values[index]}%;animation-delay:${index * 80}ms"></i></div>
      <b>${item.values[index]}</b>
    </div>`).join('');
}

function mapVisual() {
  const levels = [2,3,3,4,3,2,3,4,5,4,1,2,4,5,4,1,2,3,4,3,1,1,2,3,2];
  return `<div class="map-visual"><div class="map-grid">${levels.map(level => `<i data-level="${level}"></i>`).join('')}</div><span class="map-pin">${icons.pin}</span><b class="map-ring"></b><b class="map-ring ring2"></b></div>`;
}

function organicVisual() {
  return `<div class="owner-visual"><div class="query-stack"><span>AC replacement</span><span>AC installation</span><span>new AC system</span></div><div class="owner-arrow">→</div><div class="owner-card"><small>Canonical owner</small><strong>AC Replacement</strong><i></i><i></i><i></i></div></div>`;
}

function technicalVisual() {
  return `<div class="tech-visual"><div><small>01</small><strong>Crawl</strong><span>200</span></div><div><small>02</small><strong>Canonical</strong><span>Valid</span></div><div class="good"><small>03</small><strong>Index</strong><span>Verified</span></div></div>`;
}

function reviewsVisual() {
  return `<div class="review-bars"><div class="stars">★★★★★</div><div><span>Your brand</span><i><b style="width:52%"></b></i></div><div><span>Leader A</span><i><b style="width:88%"></b></i></div><div><span>Leader B</span><i><b style="width:74%"></b></i></div></div>`;
}

function conversionVisual() {
  return `<div class="conversion-visual"><div>${icons.search}<span>Search</span></div><b>→</b><div><span class="page-glyph"></span><span>Service page</span></div><b>→</b><div class="good">${icons.phone}<span>Qualified call</span></div></div>`;
}

function renderReview(key) {
  const item = reviewData[key];
  document.getElementById('review-icon').innerHTML = item.icon;
  document.getElementById('review-eyebrow').textContent = item.eyebrow;
  document.getElementById('review-title').textContent = item.headline;
  document.getElementById('review-insight').textContent = item.insight;
  document.getElementById('review-action').textContent = item.action;
  document.getElementById('review-metric').textContent = item.metric;
  document.getElementById('review-metric-label').textContent = item.metricLabel;
  document.getElementById('review-label').textContent = item.label;
  const stage = document.getElementById('review-stage');
  stage.innerHTML = key === 'maps' ? mapVisual() : key === 'organic' ? organicVisual() : key === 'technical' ? technicalVisual() : key === 'reviews' ? reviewsVisual() : conversionVisual();
}

function activateTabs(selector, dataAttr, render) {
  document.querySelectorAll(selector).forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll(selector).forEach(other => {
        other.classList.toggle('active', other === button);
        other.setAttribute('aria-selected', other === button ? 'true' : 'false');
      });
      render(button.dataset[dataAttr]);
    });
  });
}

function animateCounters() {
  const counters = document.querySelectorAll('[data-count]');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const run = element => {
    const target = Number(element.dataset.count || 0);
    if (reduced) { element.textContent = target.toLocaleString(); return; }
    const start = performance.now();
    const duration = 1100;
    const frame = now => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      element.textContent = Math.round(target * eased).toLocaleString();
      if (p < 1) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  };
  if (!('IntersectionObserver' in window)) { counters.forEach(run); return; }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        run(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .35 });
  counters.forEach(counter => observer.observe(counter));
}

function restoreHeroIcons() {
  const heroIcons = [icons.traditional, icons.local, icons.geo, icons.aeo, icons.visibility, icons.traffic, icons.phone, icons.booked];
  document.querySelectorAll('.network-node').forEach((node, index) => {
    if (heroIcons[index]) node.innerHTML = heroIcons[index];
  });
}

function restorePricingCards() {
  const section = document.getElementById('pricing');
  if (!section) return;
  const intro = section.querySelector('.section-header > p');
  if (intro) intro.textContent = "90-day initial engagement. Month-to-month afterward with 30 days' written notice. Normal onboarding included.";

  const rows = section.querySelector('.pricing-rows');
  const terms = section.querySelector('.pricing-terms');
  if (!rows) return;

  rows.outerHTML = `
    <div class="price-grid">
      <article class="price-card">
        <div class="price-top"><span>Single market</span></div>
        <h3>Core</h3>
        <div class="price-value"><strong>$2,000+</strong><span>Starting monthly</span></div>
        <p>For established single-location operators with one primary market and a manageable competitive footprint.</p>
        <ul>
          <li><span class="price-check">${icons.check}</span>Search + Maps foundation</li>
          <li><span class="price-check">${icons.check}</span>Technical &amp; service-page SEO</li>
          <li><span class="price-check">${icons.check}</span>Reviews &amp; authority</li>
          <li><span class="price-check">${icons.check}</span>Conversion and lead measurement</li>
        </ul>
        <a class="price-secondary" href="mailto:info@serphic.com?subject=Core%20SEO%20Plan">Discuss Core ${icons.arrow}</a>
      </article>
      <article class="price-card featured">
        <div class="price-top"><span>Recommended</span><b>Recommended</b></div>
        <h3>Growth</h3>
        <div class="price-value"><strong>$3,000</strong><span>Monthly</span></div>
        <p>For established operators competing for meaningful share in a larger or more competitive metro.</p>
        <ul>
          <li><span class="price-check">${icons.check}</span>Everything in Core</li>
          <li><span class="price-check">${icons.check}</span>Expanded local execution</li>
          <li><span class="price-check">${icons.check}</span>Revenue-driven content + CRO</li>
          <li><span class="price-check">${icons.check}</span>Competitive intelligence</li>
        </ul>
        <a class="price-primary" href="mailto:info@serphic.com?subject=Growth%20SEO%20Plan">Discuss Growth ${icons.arrow}</a>
      </article>
      <article class="price-card">
        <div class="price-top"><span>Complex footprint</span></div>
        <h3>Multi-Market</h3>
        <div class="price-value"><strong>$5,000+</strong><span>Starting monthly</span></div>
        <p>For multiple genuine locations, multiple metros or a substantially larger operating footprint.</p>
        <ul>
          <li><span class="price-check">${icons.check}</span>Multi-location governance</li>
          <li><span class="price-check">${icons.check}</span>Market-by-market strategy</li>
          <li><span class="price-check">${icons.check}</span>Expanded implementation capacity</li>
          <li><span class="price-check">${icons.check}</span>Advanced attribution support</li>
        </ul>
        <a class="price-secondary" href="mailto:info@serphic.com?subject=Multi-Market%20SEO%20Plan">Discuss Multi-Market ${icons.arrow}</a>
      </article>
    </div>
    <div class="pricing-foot"><span>No rank guarantees.</span><span>No fake link quotas.</span><span>No setup fee for normal onboarding.</span></div>`;
  if (terms) terms.remove();
}

function restoreArrowIcons() {
  document.querySelectorAll('a span').forEach(span => {
    if (span.textContent.trim() === '↗') span.outerHTML = icons.arrow;
  });
}

restorePricingCards();
restoreHeroIcons();
renderFocus('plumbing');
renderReview('maps');
restoreArrowIcons();
activateTabs('[data-focus]', 'focus', renderFocus);
activateTabs('[data-review]', 'review', renderReview);
animateCounters();
