/**
 * partials/header.js
 * Fetches partials/header.html and injects it into <body>
 * Auto-detects page depth to fix relative paths.
 */
(function () {
  // ── 1. Detect how deep current page is from root ──────────────
  let prefix = './';
  const curScript = document.currentScript;
  if (curScript && curScript.getAttribute('src')) {
    const src = curScript.getAttribute('src');
    const match = src.match(/^(\.{1,2}\/)+/);
    if (match) {
      prefix = match[0];
    }
  } else {
    const pathParts = window.location.pathname.split('/').filter(Boolean);
    const depth = pathParts.length > 1 ? pathParts.length - 1 : 0;
    prefix = depth === 0 ? './' : '../'.repeat(depth);
  }

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

      // ── 5. Dropdown Click Toggle (for click / touch interaction) ──
      const coursesDropdown = header.querySelector('.courses-dropdown');
      const coursesBtn = header.querySelector('#courses-btn');
      if (coursesDropdown && coursesBtn) {
        coursesBtn.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          coursesDropdown.classList.toggle('active');
        });
      }

      const studentDropdown = header.querySelector('.dropdown');
      const studentBtn = studentDropdown ? studentDropdown.querySelector('.nav-link') : null;
      if (studentDropdown && studentBtn) {
        studentBtn.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          studentDropdown.classList.toggle('active');
        });
      }

      // Close dropdowns when clicking outside
      document.addEventListener('click', (e) => {
        if (coursesDropdown && !coursesDropdown.contains(e.target)) {
          coursesDropdown.classList.remove('active');
        }
        if (studentDropdown && !studentDropdown.contains(e.target)) {
          studentDropdown.classList.remove('active');
        }
      });
    })
    .catch(err => console.warn('Header partial error:', err));
})();
