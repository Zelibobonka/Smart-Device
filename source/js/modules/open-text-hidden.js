const btn = document.querySelector('.about__button');
const text = document.querySelectorAll('.about__description--hidden');
const textMobile = document.querySelector('.about__description--mobile-hidden');
const mobileQuery = '(max-width: 767px)';
const mobileMedia = window.matchMedia(mobileQuery);

const showTextHidden = () => {
  if (btn !== null) {
    btn.addEventListener('click', () => {
      text.forEach((e) => {
        if (e.hasAttribute('hidden')) {
          e.removeAttribute('hidden');
          btn.textContent = 'Свернуть';
          if (mobileMedia.matches) {
            textMobile.style.display = 'block';
          }
        } else {
          e.setAttribute('hidden', 'hidden');
          btn.textContent = 'Подробнее';
          if (mobileMedia.matches) {
            textMobile.style.display = 'none';
          }
        }
      });
    });
  }
};

export {showTextHidden};
