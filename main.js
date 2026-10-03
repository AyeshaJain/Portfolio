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
})();
