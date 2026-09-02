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
    label: 'Maps & Local', eyebrow: 'LOCAL VISIBILITY', icon: '⌖',
    headline: 'Coverage weakens outside the core radius.',
    insight: 'The business appears competitive near its location, but priority suburbs show wider competitor coverage.',
    action: 'Validate GBP relevance, service-area pages, review velocity and local authority before expanding content.',
    metric: '3 priority zones', metricLabel: 'to validate first'
  },
  organic: {
    label: 'Commercial Pages', eyebrow: 'ORGANIC OWNERSHIP', icon: '⌕',
    headline: 'High-value service intent is split across weak page owners.',
    insight: 'Several valuable queries do not have one clear commercial landing page with enough topical and local relevance.',
    action: 'Consolidate intent, strengthen internal links and expand only where the service deserves a dedicated page.',
    metric: '5 service intents', metricLabel: 'with ownership gaps'
  },
  technical: {
    label: 'Technical', eyebrow: 'TECHNICAL CONTROL', icon: '</>',
    headline: 'Crawl paths are making important pages work harder than they should.',
    insight: 'Indexation, internal linking and site architecture are creating avoidable friction around commercial pages.',
    action: 'Fix the path to money pages first: crawlability, redirects, canonicals, schema and internal link depth.',
    metric: '12 signals', metricLabel: 'grouped by impact'
  },
  reviews: {
    label: 'Reviews', eyebrow: 'TRUST & PROMINENCE', icon: '★',
    headline: 'Review strength is good, but velocity trails the local leaders.',
    insight: 'Competitors are creating fresher proof while the business relies more heavily on older review volume.',
    action: 'Build a compliant request workflow tied to completed jobs, then measure velocity and response quality.',
    metric: '2.1× gap', metricLabel: 'in recent review pace'
  },
  conversion: {
    label: 'Conversion', eyebrow: 'CALL PATH', icon: '☎',
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
  return `<div class="map-visual"><div class="map-grid">${levels.map(level => `<i data-level="${level}"></i>`).join('')}</div><span class="map-pin">⌖</span><b class="map-ring"></b><b class="map-ring ring2"></b></div>`;
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
  return `<div class="conversion-visual"><div><strong>⌕</strong><span>Search</span></div><b>→</b><div><strong>▤</strong><span>Service page</span></div><b>→</b><div class="good"><strong>☎</strong><span>Qualified call</span></div></div>`;
}

function renderReview(key) {
  const item = reviewData[key];
  document.getElementById('review-icon').textContent = item.icon;
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

renderFocus('plumbing');
renderReview('maps');
activateTabs('[data-focus]', 'focus', renderFocus);
activateTabs('[data-review]', 'review', renderReview);
animateCounters();
