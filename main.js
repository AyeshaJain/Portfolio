// Hash router: #/, #/brick-rodeo, #/yygs, #/anblicks, #/model-un, #/updraft, #/dior, #/art, #/about, #/contact
(function () {
  const views = document.querySelectorAll('[data-view]');
  const navLinks = document.querySelectorAll('[data-nav]');
  const titles = {
    home: 'Ayesha Jain · Marketing Portfolio',
    'brick-rodeo': 'Brick Rodeo · Ayesha Jain',
    yygs: 'Yale Young Global Scholars · Ayesha Jain',
    anblicks: 'Anblicks · Ayesha Jain',
    'model-un': 'Model UN · Ayesha Jain',
    updraft: 'Updraft Engineering · Ayesha Jain',
    dior: 'Dior Mockups · Ayesha Jain',
    art: 'Art · Ayesha Jain',
    about: 'About · Ayesha Jain',
    contact: 'Contact · Ayesha Jain',
  };

  function route() {
    let name = location.hash.replace(/^#\/?/, '') || 'home';
    if (!titles[name]) name = 'home';

    views.forEach((v) => { v.hidden = v.dataset.view !== name; });
    navLinks.forEach((a) => {
      if (a.dataset.nav === name) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
    document.title = titles[name];
    window.scrollTo(0, 0);
  }

  window.addEventListener('hashchange', route);
  route();

  // Pop pictures and cards in as they scroll into view.
  // Elements start with .reveal (hidden + shrunk); removing it lets the CSS transition pop them in.
  if (!('IntersectionObserver' in window)) return;
  document.documentElement.classList.add('js');

  const popIn = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      popIn.unobserve(el);
      // Stagger siblings in the same row a little
      const index = [...el.parentElement.children].indexOf(el);
      setTimeout(() => el.classList.remove('reveal'), (index % 4) * 80);
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.polaroid, .card').forEach((el) => {
    el.classList.add('reveal');
    popIn.observe(el);
  });
})();
