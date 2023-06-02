const yearEl = document.querySelector('.copyright--time');

const loGo = document.querySelector('.logo');
const sayHello = document.querySelectorAll('.same');

const section1El = document.querySelector('.section--1');
const section2El = document.querySelector('.section--2');
const section3El = document.querySelector('.section--3');
const section4El = document.querySelector('.section--4');
const section5El = document.querySelector('.section--5');

const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('header');

const scrollToTop = document.querySelector('.scroll--top');

const allLinks = document.querySelectorAll('a:link');

// parallel year setting
const copyrightTime = new Date().getFullYear();
yearEl.textContent = copyrightTime;

// Logo Reload function
loGo.addEventListener('click', function () {
  window.location.reload();
});

// Navigation to SayHello Page
sayHello.forEach(function (btn) {
  btn.addEventListener('click', function () {
    window.location.replace('sayhello.html');
  });
});

btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open');
});

// Sticky navigation
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add('sticky');
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove('sticky');
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: '-80px',
  }
);
obs.observe(section1El);

// Scroll To Top
// When the user scrolls down 20px from the top of the document, show the button
scrollToTop.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
});

window.onscroll = () => {
  window.scrollY > 540
    ? (scrollToTop.style.display = 'block')
    : (scrollToTop.style.display = 'none');
};

// Smooth Scrolling Functions
allLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const href = link.getAttribute('href');

    // Scroll back to top
    if (href === '#')
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

    // Scroll to other links
    if (href !== '#' && href.startsWith('#')) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: 'smooth' });
    }

    // Close mobile naviagtion
    if (link.classList.contains('main-nav-link'))
      headerEl.classList.toggle('nav-open');
  });
});

// Dark and Light Mode
const switchMode = document.querySelector('.checkbox');

const container = document.querySelector('html', 'body');

const modes = document.querySelector('.light');

const colrIcon = document.querySelectorAll('.samme');

const sameClr = document.querySelectorAll('.hh--same');

const labelEl = document.querySelector('.label');
const footerEl = document.querySelector('.footer--1');

const naV = document.querySelector('.nav');

const headingEl = document.querySelectorAll('.h--same');

switchMode.addEventListener('change', () => {
  document.body.classList.toggle('dark');
  container.classList.toggle('dark');
  labelEl.classList.toggle('dark');
  headerEl.classList.toggle('dark');

  section1El.classList.toggle('dark');
  section2El.classList.toggle('dark');
  section3El.classList.toggle('dark');
  section4El.classList.toggle('dark');
  section5El.classList.toggle('dark');

  naV.classList.toggle('dark');

  footerEl.classList.toggle('dark');

  sameClr.forEach(element => element.classList.toggle('dark'));

  colrIcon.forEach(element => element.classList.toggle('dark'));

  headingEl.forEach(element => element.classList.toggle('dark'));

  if (modes.classList.toggle('dark') === true) {
    modes.textContent = ``;
  } else {
    modes.textContent = `AmberTheme`;
  }
});
