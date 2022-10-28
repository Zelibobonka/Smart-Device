const input = document.querySelector('.modal__control--focus');
const modal = document.querySelector('.modal');

const settingFocus = () => {
  modal.addEventListener('mouseover', () => {
    input.focus();
  });
};

export {settingFocus};
