const button = document.querySelector('.promo__button');
const buttonMobile = document.querySelector('.promo__button-mobile');

const form = document.querySelector('.feedback');

const scroll = () => {
  function handleButtonClick() {
    form.scrollIntoView({block: 'center', behavior: 'smooth'});
  }
  if (button !== null || buttonMobile !== null) {
    button.addEventListener('click', handleButtonClick);
    buttonMobile.addEventListener('click', handleButtonClick);
  }
};

export {scroll};
