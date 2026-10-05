/**
 * partials/header.js
 * Fetches partials/header.html and injects it into <body>
 * Auto-detects page depth to fix relative paths.
 */
(function () {
  // ── 1. Detect how deep current page is from root ──────────────
  // e.g. /components/about.html        → depth 1 → prefix = "../"
  //      /components/student-corner/sr.html → depth 2 → prefix = "../../"
  //      /index.html                   → depth 0 → prefix = "./"
  const pathParts = window.location.pathname
    .split('/')
    .filter(Boolean); // remove empty strings

  // pathParts for /index.html = []  → depth 0
  // pathParts for /components/about.html = ['components','about.html'] → depth 1
  // pathParts for /components/student-corner/sr.html = ['components','student-corner','sr.html'] → depth 2
  const depth = pathParts.length > 1 ? pathParts.length - 1 : 0;
  const prefix = depth === 0 ? './' : '../'.repeat(depth);

  // ── 2. Build path to header partial ───────────────────────────
  const headerPath = prefix + 'partials/header.html';

  // ── 3. Fetch and inject ────────────────────────────────────────
  fetch(headerPath)
    .then(res => {
      if (!res.ok) throw new Error('Header fetch failed: ' + res.status);
      return res.text();
    })
    .then(html => {
      // Fix all relative paths in the fetched HTML
      // Replace ./ prefixed hrefs/srcs with correct prefix
      const fixed = html
        .replace(/href="\.\//g,  `href="${prefix}`)
        .replace(/src="\.\//g,   `src="${prefix}`);

      // Create a wrapper and inject before first element in body
      const wrapper = document.createElement('div');
      wrapper.innerHTML = fixed;
      const header = wrapper.firstElementChild;

      // Insert at very top of body
      document.body.insertBefore(header, document.body.firstChild);

      // ── 4. Scroll shrink (same as script.js) ──────────────────
      window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (!navbar) return;
        if (window.scrollY > 40) {
          navbar.classList.add('navbar--scrolled');
        } else {
          navbar.classList.remove('navbar--scrolled');
        }
      });
    })
    .catch(err => console.warn('Header partial error:', err));
})();
