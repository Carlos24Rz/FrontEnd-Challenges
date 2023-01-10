const copyrightEl = document.querySelector(".copyright");
const currentYear = new Date().getFullYear();
copyrightEl.textContent = `Copyright © ${currentYear} by Omnifood, Inc. All rights reserved`

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener('click', () => headerEl.classList.toggle("nav-open"));

const allLinks = document.querySelectorAll('a:link');

allLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const href = link.getAttribute('href');

    if (href === "#") window.scrollTo({ top: 0, behavior: "smooth" });

    if (href !== "#" && href.startsWith('#')) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    if (link.classList.contains('main-nav-link')) {
      headerEl.classList.toggle('nav-open');
    }
  })
}
);

const heroSectionEl = document.querySelector('.section-hero');
const observer = new IntersectionObserver((entries) => {
  const ent = entries[0];

  if (!ent.isIntersecting) document.body.classList.add('sticky');

  if (ent.isIntersecting) document.body.classList.remove('sticky');

}, {
  root: null,
  threshold: 0,
  rootMargin: "-80px"
});

observer.observe(heroSectionEl);

function checkFlexGap() {
  const flex = document.createElement('div');
  flex.style.display = "flex";
  flex.style.flexDirection = 'column';
  flex.style.rowGap = '1px';

  flex.appendChild(document.createElement('div'));
  flex.appendChild(document.createElement('div'));

  document.body.appendChild(flex);
  const isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);

  if (!isSupported) document.body.classList.add('no-flexbox-gap');
}

checkFlexGap();