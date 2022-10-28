const btn = document.querySelector('.about__button');
const text = document.querySelectorAll('.about__description--hidden');
const textMobile = document.querySelector('.about__description--mobile-hidden');

const showTextHidden = () => {
  btn.addEventListener('click', () => {
    text.forEach((e) => {
      if (e.classList.contains('hidden')) {
        e.classList.remove('hidden');
        btn.textContent = 'Свернуть';
        if (window.matchMedia("(max-width: 767px)").matches) {
          textMobile.style.display = 'block';
        }
      } else {
        e.classList.add('hidden');
        btn.textContent = 'Подробнее';
        if (window.matchMedia("(max-width: 767px)").matches) {
          textMobile.style.display = 'none';
        }
      }
    });
  });
};

export {showTextHidden};
