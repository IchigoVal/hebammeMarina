// Import styles for Vite bundling
import './styles.css';
import { setLanguage, t } from './i18n.js';

// Progressive enhancement flag
document.documentElement.classList.add('js');
// Language: read persisted or default to de
const persistedLang = (typeof localStorage !== 'undefined' && localStorage.getItem('lang')) || 'de';
setLanguage(persistedLang);

// Current year in footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Mobile Navigation Toggle
const toggle = document.getElementById('nav-toggle');
const menu = document.getElementById('nav-menu');
if (toggle && menu) {
  const setCollapsed = (collapsed) => {
    menu.classList.toggle('collapsed', collapsed);
    toggle.setAttribute('aria-expanded', String(!collapsed));
    toggle.setAttribute('aria-label', collapsed ? t('nav.menu_open') : t('nav.menu_close'));
  };
  setCollapsed(true);
  toggle.addEventListener('click', () => setCollapsed(menu.classList.contains('collapsed') ? false : true));
  // Close on link click (mobile)
  menu.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', () => setCollapsed(true));
  });
}

const langButtons = Array.from(document.querySelectorAll('.lang-btn'));

const syncLanguageButtons = (lang) => {
  if (!langButtons.length) return;
  langButtons.forEach((button) => {
    const isActive = button.dataset.lang === lang;
    button.classList.toggle('lang-btn--active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
};

const applySiteLanguage = (lang) => {
  const nextLang = lang === 'ru' ? 'ru' : 'de';
  try { localStorage.setItem('lang', nextLang); } catch (_) {}
  setLanguage(nextLang);
  syncLanguageButtons(nextLang);
};

if (langButtons.length) {
  syncLanguageButtons(document.documentElement.getAttribute('lang') === 'ru' ? 'ru' : 'de');
  langButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const lang = button.dataset.lang || 'de';
      applySiteLanguage(lang);
    });
  });
}

// Smooth scroll enhancement for same-page anchors (CSS handles most)
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    if (!id || id === '#') return;
    const target = document.querySelector(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.pushState(null, '', id);
    }
  });
});

// Contact form handling with inline success toast
const form = document.getElementById('contact-form');
const toast = document.getElementById('toast');
if (form && toast) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Basic validation
    const fd = new FormData(form);
    const name = (fd.get('name') || '').toString().trim();
    const email = (fd.get('email') || '').toString().trim();
    const message = (fd.get('message') || '').toString().trim();
    if (!name || !email || !message) {
      showToast(t('form.error_fill_all'));
      return;
    }
    // Simulate success, clear fields
    form.reset();
    showToast(t('form.success'));
  });

  let toastTimer;
  function showToast(text) {
    toast.textContent = text;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 3500);
  }
}

// Expose language switcher for later usage
// Example in console: setSiteLanguage('ru') or setSiteLanguage('de')
window.setSiteLanguage = (lang) => applySiteLanguage(lang);

// Lazy-load Elfsight reviews script when testimonials embed enters viewport
const reviewsEmbed = document.getElementById('reviews-embed');
if (reviewsEmbed) {
  const ELFSIGHT_SRC = 'https://elfsightcdn.com/platform.js';
  const SCRIPT_SELECTOR = `script[src="${ELFSIGHT_SRC}"]`;
  const KEY = 'elfsight_last_load';
  const TTL_MS = 24 * 60 * 60 * 1000;
  const RENDER_TIMEOUT_MS = 9000;
  const MAX_RETRIES = 2;
  const LIMIT_TEXT_PATTERN = /\b(upgrade|limit|plan|subscription)\b/i;
  const widgetEl = reviewsEmbed.querySelector('.elfsight-app-6e2e4c6f-ebc0-4005-93a9-b414b24ac284');
  let renderTimer = 0;
  let widgetObserver = null;
  let retryCount = 0;
  let hasRenderedOutput = false;

  const getLastLoad = () => {
    try {
      const raw = localStorage.getItem(KEY);
      const ts = Number.parseInt(raw || '', 10);
      return Number.isFinite(ts) ? ts : 0;
    } catch (_) {
      return 0;
    }
  };

  const setLastLoad = () => {
    try {
      localStorage.setItem(KEY, Date.now().toString());
    } catch (_) {}
  };

  const shouldLoad = () => {
    const last = getLastLoad();
    return !last || (Date.now() - last) >= TTL_MS;
  };

  const removeFallback = () => {
    const fallback = reviewsEmbed.querySelector('.reviews-fallback');
    if (fallback) fallback.remove();
  };

  const clearWatchers = () => {
    if (renderTimer) {
      window.clearTimeout(renderTimer);
      renderTimer = 0;
    }
    if (widgetObserver) {
      widgetObserver.disconnect();
      widgetObserver = null;
    }
  };

  const hideWidget = () => {
    if (widgetEl) widgetEl.classList.add('is-hidden');
  };

  const showWidget = () => {
    if (widgetEl) widgetEl.classList.remove('is-hidden');
  };

  const clearFallback = () => {
    removeFallback();
    showWidget();
  };

  const hasRenderMarkers = () => Boolean(widgetEl && widgetEl.querySelector('iframe, [class*="eapps"], [id*="eapps"]'));

  const hasVisibleContent = () => {
    if (!widgetEl) return false;
    const hasNodes = widgetEl.childElementCount > 0 && widgetEl.offsetHeight > 160;
    const hasMarkers = hasRenderMarkers() && widgetEl.offsetHeight > 120;
    return hasNodes || hasMarkers;
  };

  const hasRenderedNodes = () => Boolean(widgetEl && widgetEl.childNodes.length > 0 && widgetEl.offsetHeight > 0);

  const hasLimitHint = () => {
    if (!widgetEl) return false;
    const text = (widgetEl.textContent || '').replace(/\s+/g, ' ').trim();
    return LIMIT_TEXT_PATTERN.test(text);
  };

  const renderFallback = (kind) => {
    removeFallback();
    clearWatchers();
    hideWidget();

    const box = document.createElement('div');
    box.className = `reviews-fallback ${kind === 'error' ? 'reviews-fallback--error' : 'reviews-fallback--ttl'}`;

    const text = document.createElement('p');
    if (kind === 'error') {
      text.textContent = t('reviews.error_load');
      const actions = document.createElement('div');
      actions.className = 'reviews-fallback-actions';

      const mapsLink = document.createElement('a');
      mapsLink.className = 'reviews-fallback-btn reviews-fallback-btn--primary';
      mapsLink.href = 'https://maps.app.goo.gl/6Pv4GtpnrfFBWYVM6';
      mapsLink.target = '_blank';
      mapsLink.rel = 'noopener noreferrer';
      mapsLink.textContent = t('reviews.open_maps');

      const retryBtn = document.createElement('button');
      retryBtn.type = 'button';
      retryBtn.className = 'reviews-fallback-btn reviews-fallback-btn--secondary';
      retryBtn.textContent = t('reviews.retry');
      if (retryCount >= MAX_RETRIES) {
        retryBtn.disabled = true;
      } else {
        retryBtn.addEventListener('click', () => {
          if (retryCount >= MAX_RETRIES) return;
          retryCount += 1;
          injectScriptOnce({ force: true });
        });
      }

      actions.append(mapsLink, retryBtn);
      box.append(text, actions);
    } else {
      text.textContent = t('reviews.cached_notice');
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'reviews-fallback-btn reviews-fallback-btn--secondary';
      button.textContent = t('reviews.load');
      button.addEventListener('click', () => injectScriptOnce({ force: true }));
      box.append(text, button);
    }

    reviewsEmbed.appendChild(box);
  };

  const watchWidgetRender = () => {
    if (!widgetEl) return;
    clearWatchers();
    hasRenderedOutput = false;

    widgetObserver = new MutationObserver(() => {
      if (hasVisibleContent() || hasRenderedNodes() || hasRenderMarkers()) {
        hasRenderedOutput = true;
      }

      if (hasRenderedOutput && hasLimitHint()) {
        renderFallback('error');
        return;
      }

      if (hasVisibleContent()) {
        clearFallback();
        clearWatchers();
      }
    });

    widgetObserver.observe(widgetEl, {
      childList: true,
      subtree: true,
      characterData: true
    });

    renderTimer = window.setTimeout(() => {
      const rendered = hasVisibleContent() || hasRenderMarkers();
      const limitBlocked = (hasRenderedOutput || hasRenderedNodes()) && hasLimitHint();
      if (!rendered || limitBlocked) {
        renderFallback('error');
        return;
      }
      clearFallback();
      clearWatchers();
    }, RENDER_TIMEOUT_MS);
  };

  const bindScriptEvents = (script) => {
    if (!script || script.dataset.elfsightBound === '1') return;
    script.dataset.elfsightBound = '1';

    script.onload = () => {
      script.dataset.elfsightLoaded = '1';
      script.dataset.elfsightFailed = '0';
      window.__elfsightPlatformLoaded = true;
      clearFallback();
      watchWidgetRender();
    };

    script.onerror = () => {
      script.dataset.elfsightFailed = '1';
      window.__elfsightPlatformRequested = false;
      renderFallback('error');
    };
  };

  const injectScriptOnce = ({ force = false } = {}) => {
    if (!force && !shouldLoad()) {
      renderFallback('ttl');
      return;
    }

    clearFallback();
    hasRenderedOutput = false;

    const existingScript = document.querySelector(SCRIPT_SELECTOR);
    if (existingScript && existingScript.dataset.elfsightFailed === '1') {
      existingScript.remove();
      window.__elfsightPlatformRequested = false;
    }

    const activeScript = document.querySelector(SCRIPT_SELECTOR);
    if (activeScript) {
      bindScriptEvents(activeScript);
      setLastLoad();
      watchWidgetRender();
      return;
    }

    if (window.__elfsightPlatformRequested) {
      setLastLoad();
      watchWidgetRender();
      return;
    }

    window.__elfsightPlatformRequested = true;
    const script = document.createElement('script');
    script.src = ELFSIGHT_SRC;
    script.async = true;
    bindScriptEvents(script);
    document.head.appendChild(script);
    setLastLoad();
    watchWidgetRender();
  };

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        if (shouldLoad()) {
          injectScriptOnce();
        } else {
          renderFallback('ttl');
        }
        obs.disconnect();
      }
    }, { threshold: 0.2 });
    observer.observe(reviewsEmbed);
  } else if (shouldLoad()) {
    injectScriptOnce();
  } else {
    renderFallback('ttl');
  }
}
