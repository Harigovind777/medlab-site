/* Medlab Enterprises — site behaviour
   Kept deliberately small: nav toggle, scroll reveal, enquiry form handoff. */
(function () {
  'use strict';

  /* --- Mobile navigation ------------------------------------------------ */
  var burger = document.querySelector('.burger');
  var mobileNav = document.querySelector('.mobile-nav');

  if (burger && mobileNav) {
    burger.addEventListener('click', function () {
      var open = burger.getAttribute('aria-expanded') === 'true';
      burger.setAttribute('aria-expanded', String(!open));
      mobileNav.classList.toggle('is-open', !open);
    });

    mobileNav.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        burger.setAttribute('aria-expanded', 'false');
        mobileNav.classList.remove('is-open');
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileNav.classList.contains('is-open')) {
        burger.setAttribute('aria-expanded', 'false');
        mobileNav.classList.remove('is-open');
        burger.focus();
      }
    });
  }

  /* --- Scroll reveal ---------------------------------------------------- */
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var targets = document.querySelectorAll('.reveal');

  if (reduced || !('IntersectionObserver' in window)) {
    targets.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var delay = parseInt(el.dataset.delay || '0', 10);
        setTimeout(function () { el.classList.add('is-in'); }, delay);
        io.unobserve(el);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

    targets.forEach(function (el) { io.observe(el); });
  }

  /* --- Enquiry form ------------------------------------------------------
     No backend is wired up. The form composes a formatted email and hands it
     to the visitor's mail client, so enquiries reach Medlab from day one.
     Replace with a real endpoint (Formspree, Google Forms, PHP) when hosting
     is chosen — see README.                                                */
  var form = document.querySelector('[data-enquiry-form]');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var data = new FormData(form);
      var get = function (k) { return (data.get(k) || '').toString().trim(); };

      var lines = [
        'Name        : ' + get('name'),
        'Organisation: ' + (get('org') || '—'),
        'District    : ' + (get('district') || '—'),
        'Phone       : ' + get('phone'),
        'Email       : ' + (get('email') || '—'),
        'Interest    : ' + (get('category') || '—'),
        '',
        'Requirement:',
        get('message') || '—',
        '',
        '— Sent from the Medlab Enterprises website'
      ];

      var subject = 'Product enquiry — ' + (get('category') || 'General') +
                    ' — ' + (get('org') || get('name'));

      window.location.href =
        'mailto:' + form.dataset.enquiryForm +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(lines.join('\n'));

      var note = form.querySelector('.form-note');
      if (note) {
        note.textContent = 'Opening your email app. If nothing happens, call 99465 09400 directly.';
        note.style.color = '#C94E10';
      }
    });
  }

  /* --- Footer year ------------------------------------------------------ */
  var year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();
})();
