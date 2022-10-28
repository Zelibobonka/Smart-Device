const button = document.querySelector('.promo__button');
const buttonMobile = document.querySelector('.promo__button-mobile');

const form = document.querySelector('.feedback__wrapper');

const scrolling = () => {
  function handleButtonClick() {
    form.scrollIntoView({block: "center", behavior: "smooth"});
  }

  button.addEventListener('click', handleButtonClick);
  buttonMobile.addEventListener('click', handleButtonClick);
}

export {scrolling};
