// The Map — Shared JS

(function () {

  // ── 1. Theme Toggle ──────────────────────────────────────────────────────
  const html = document.documentElement;
  const btn  = document.getElementById('themeToggle');
  const icon = document.getElementById('toggleIcon');
  const text = document.getElementById('toggleText');

  const themes = {
    dark:  { icon: '☀️', label: 'Light mode', next: 'light' },
    light: { icon: '🌙', label: 'Dark mode',  next: 'dark'  },
  };

  function applyTheme(t) {
    html.setAttribute('data-theme', t);
    localStorage.setItem('the-map-theme', t);
    if (icon) icon.textContent = themes[t].icon;
    if (text) text.textContent = themes[t].label;
  }

  applyTheme(localStorage.getItem('the-map-theme') || 'dark');
  if (btn) btn.addEventListener('click', () => applyTheme(themes[html.getAttribute('data-theme')].next));


  // ── 2. Scroll Fade-In ────────────────────────────────────────────────────
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 70);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));


  // ── 3. Search ────────────────────────────────────────────────────────────
  try {

  // Modal HTML is baked directly into each page's HTML (not injected dynamically)
  const overlay   = document.getElementById('searchOverlay');
  const input     = document.getElementById('searchInput');
  const results   = document.getElementById('searchResults');
  const closeBtn  = document.getElementById('searchClose');

  // Detect how many directories deep we are relative to site root.
  // Strips the filename, splits remaining path, counts non-empty segments.
  // e.g. /finance/budgeting.html → ['finance'] → 1 deep → '../'
  // e.g. /index.html             → []           → 0 deep → ''
  function rootPrefix() {
    const parts = window.location.pathname.replace(/\/[^/]*$/, '').split('/').filter(Boolean);
    return parts.length > 0 ? '../'.repeat(parts.length) : '';
  }

  let focusedIndex = -1;

  function openSearch() {
    overlay.classList.add('open');
    input.value = '';
    focusedIndex = -1;
    renderResults('');
    setTimeout(() => input.focus(), 50);
    document.body.style.overflow = 'hidden';
  }

  function closeSearch() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    focusedIndex = -1;
  }

  // Simple relevance scoring: title match > section match > keyword match
  function score(entry, q) {
    const lq = q.toLowerCase();
    const titleLower   = entry.title.toLowerCase();
    const sectionLower = entry.section.toLowerCase();
    const allText      = (entry.title + ' ' + entry.section + ' ' + entry.desc + ' ' + entry.keywords).toLowerCase();

    if (titleLower === lq) return 100;
    if (titleLower.startsWith(lq)) return 80;
    if (titleLower.includes(lq)) return 60;
    if (sectionLower.includes(lq)) return 40;
    if (allText.includes(lq)) return 20;
    // Multi-word: all words present somewhere
    const words = lq.split(/\s+/).filter(Boolean);
    if (words.length > 1 && words.every(w => allText.includes(w))) return 15;
    return 0;
  }

  function renderResults(query) {
    focusedIndex = -1;
    const q = query.trim();

    if (!q) {
      results.innerHTML = `<div class="search-hint">
        <strong>What are you looking for?</strong>
        Try "budgeting", "credit score", "resume", "lease"…
      </div>`;
      return;
    }

    // Filter and sort by score
    const prefix = rootPrefix();
    const matched = (typeof SEARCH_INDEX !== 'undefined' ? SEARCH_INDEX : [])
      .map(entry => ({ entry, s: score(entry, q) }))
      .filter(({ s }) => s > 0)
      .sort((a, b) => b.s - a.s)
      .map(({ entry }) => entry);

    if (!matched.length) {
      results.innerHTML = `<div class="search-hint">
        <strong>No results for "${q}"</strong>
        Try a different keyword, or browse all topics from the home page.
      </div>`;
      return;
    }

    results.innerHTML = matched.map((entry, i) => `
      <a class="search-result"
         href="${prefix}${entry.path}"
         role="option"
         data-index="${i}">
        <div class="search-result-section">${entry.section}</div>
        <div class="search-result-title">${entry.title}</div>
        <div class="search-result-desc">${entry.desc}</div>
      </a>`).join('');
  }

  function getResultItems() {
    return Array.from(results.querySelectorAll('.search-result'));
  }

  function setFocus(idx) {
    const items = getResultItems();
    items.forEach(el => el.classList.remove('focused'));
    if (idx < 0 || idx >= items.length) { focusedIndex = -1; return; }
    focusedIndex = idx;
    items[idx].classList.add('focused');
    items[idx].scrollIntoView({ block: 'nearest' });
  }

  // Events
  input.addEventListener('input', () => renderResults(input.value));

  input.addEventListener('keydown', (e) => {
    const items = getResultItems();
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setFocus(Math.min(focusedIndex + 1, items.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setFocus(Math.max(focusedIndex - 1, 0));
    } else if (e.key === 'Enter') {
      if (focusedIndex >= 0 && items[focusedIndex]) {
        items[focusedIndex].click();
      }
    } else if (e.key === 'Escape') {
      closeSearch();
    }
  });

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeSearch();
  });

  closeBtn.addEventListener('click', closeSearch);

  // Global keyboard shortcut: / or Cmd+K / Ctrl+K
  document.addEventListener('keydown', (e) => {
    const tag = document.activeElement?.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA') return;
    if (e.key === '/' && !e.metaKey && !e.ctrlKey) {
      e.preventDefault();
      openSearch();
    }
    if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      openSearch();
    }
    if (e.key === 'Escape' && overlay.classList.contains('open')) {
      closeSearch();
    }
  });

  // Wire up search button — try both querySelector and direct ID
  document.querySelectorAll('.search-btn').forEach(b => {
    b.addEventListener('click', openSearch);
  });
  // Belt-and-suspenders: also bind by ID in case class selector misses
  const searchBtnById = document.getElementById('searchBtn');
  if (searchBtnById) searchBtnById.addEventListener('click', openSearch);

  } catch(e) { console.error('The Map search error:', e); }

})();
