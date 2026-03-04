(function () {
  'use strict';

  // Ano no footer
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Menu mobile
  var menuToggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.nav');
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', isOpen);
      menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Abrir menu');
      });
    });
  }

  // Reveal on scroll
  var revealEls = document.querySelectorAll('.reveal');
  var revealObserver = null;

  function initReveal() {
    if (typeof IntersectionObserver === 'undefined') {
      revealEls.forEach(function (el) { el.classList.add('revealed'); });
      return;
    }
    revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          if (revealObserver) revealObserver.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -60px 0px', threshold: 0.1 });

    revealEls.forEach(function (el) { revealObserver.observe(el); });
  }

  initReveal();

  // Contador do stat (opcional)
  var statNum = document.querySelector('.stat-num[data-target]');
  if (statNum) {
    var target = parseInt(statNum.getAttribute('data-target'), 10);
    var duration = 2000;
    var startTime = null;

    function easeOutQuart(t) {
      return 1 - (--t) * t * t * t;
    }

    function animateStat(timestamp) {
      if (!startTime) startTime = timestamp;
      var elapsed = timestamp - startTime;
      var progress = Math.min(elapsed / duration, 1);
      var eased = easeOutQuart(progress);
      var current = Math.floor(eased * target);
      statNum.textContent = current;
      if (progress < 1) requestAnimationFrame(animateStat);
      else statNum.textContent = target;
    }

    var statObserver = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting && !statNum.classList.contains('counted')) {
        statNum.classList.add('counted');
        requestAnimationFrame(animateStat);
      }
    }, { threshold: 0.5 });

    statObserver.observe(statNum.closest('.hero-stats'));
  }

  // Formulário
  var form = document.querySelector('.form-contato');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Mensagem enviada! Em breve entraremos em contato.');
      form.reset();
    });
  }
})();