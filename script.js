(function () {
  var btn = document.querySelector('.hamburger');
  var nav = document.querySelector('#main-nav');

  if (!btn || !nav) {
    return;
  }

  function setMenu(open) {
    btn.classList.toggle('open', open);
    nav.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.classList.toggle('menu-open', open);
  }

  function toggleMenu() {
    setMenu(!nav.classList.contains('open'));
  }

  function closeMenu(restoreFocus) {
    setMenu(false);
    if (restoreFocus) {
      btn.focus();
    }
  }

  btn.addEventListener('click', toggleMenu);

  nav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      closeMenu(false);
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeMenu(true);
    }
  });
})();
