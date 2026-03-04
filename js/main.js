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

  // Carrossel de portfólio
  var portfolioModal = document.querySelector('.portfolio-modal');
  var portfolioCards = document.querySelectorAll('.portfolio-card[data-images]');

  if (portfolioModal && portfolioCards.length) {
    var modalBackdrop = portfolioModal.querySelector('.portfolio-modal-backdrop');
    var modalDialog = portfolioModal.querySelector('.portfolio-modal-dialog');
    var modalClose = portfolioModal.querySelector('.portfolio-modal-close');
    var mainImage = portfolioModal.querySelector('.portfolio-main-image');
    var thumbsContainer = portfolioModal.querySelector('.portfolio-thumbs');
    var arrowLeft = portfolioModal.querySelector('.portfolio-arrow-left');
    var arrowRight = portfolioModal.querySelector('.portfolio-arrow-right');

    var images = [];
    var currentIndex = 0;

    function updateMainImage() {
      if (!images.length || !mainImage) return;
      mainImage.src = images[currentIndex];

      if (!thumbsContainer) return;
      var buttons = thumbsContainer.querySelectorAll('.portfolio-thumb');
      buttons.forEach(function (btn, idx) {
        btn.classList.toggle('is-active', idx === currentIndex);
      });
    }

    function buildThumbs() {
      if (!thumbsContainer) return;
      thumbsContainer.innerHTML = '';

      images.forEach(function (src, idx) {
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'portfolio-thumb';

        var img = document.createElement('img');
        img.src = src;
        img.alt = 'Miniatura do projeto ' + (idx + 1);

        btn.appendChild(img);

        btn.addEventListener('click', function () {
          currentIndex = idx;
          updateMainImage();
        });

        thumbsContainer.appendChild(btn);
      });
    }

    function openModal(list) {
      images = list || [];
      if (!images.length) return;

      currentIndex = 0;
      buildThumbs();
      updateMainImage();

      portfolioModal.classList.add('is-open');
      portfolioModal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('no-scroll');
    }

    function closeModal() {
      portfolioModal.classList.remove('is-open');
      portfolioModal.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('no-scroll');

      if (thumbsContainer) {
        thumbsContainer.innerHTML = '';
      }
    }

    function showNext() {
      if (!images.length) return;
      currentIndex = (currentIndex + 1) % images.length;
      updateMainImage();
    }

    function showPrev() {
      if (!images.length) return;
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateMainImage();
    }

    portfolioCards.forEach(function (card) {
      card.addEventListener('click', function () {
        var raw = card.getAttribute('data-images') || '';
        var list = raw
          .split('|')
          .map(function (s) { return s.trim(); })
          .filter(Boolean)
          .slice(0, 6);

        openModal(list);
      });
    });

    if (modalBackdrop) {
      modalBackdrop.addEventListener('click', closeModal);
    }

    if (modalClose) {
      modalClose.addEventListener('click', closeModal);
    }

    if (arrowLeft) {
      arrowLeft.addEventListener('click', showPrev);
    }

    if (arrowRight) {
      arrowRight.addEventListener('click', showNext);
    }

    document.addEventListener('keydown', function (e) {
      if (!portfolioModal.classList.contains('is-open')) return;

      if (e.key === 'Escape' || e.key === 'Esc') {
        closeModal();
      } else if (e.key === 'ArrowRight') {
        showNext();
      } else if (e.key === 'ArrowLeft') {
        showPrev();
      }
    });
  }
})();