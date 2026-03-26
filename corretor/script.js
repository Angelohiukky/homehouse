// Scroll behavior simples / Intersection Observer
const scrollElements = document.querySelectorAll('.scroll-anim');

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;
  return (elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend);
};

const displayScrollElement = (element) => {
  element.classList.add('visible');
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.15)) {
      displayScrollElement(el);
    }
  })
}

window.addEventListener('scroll', () => { handleScrollAnimation(); });
setTimeout(() => { handleScrollAnimation(); }, 200);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    if (this.getAttribute('href') === '#') return;
    e.preventDefault();
    const dest = document.querySelector(this.getAttribute('href'));
    if (dest) {
      dest.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
