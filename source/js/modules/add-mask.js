/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const tel = document.querySelectorAll('[type="tel"]');

const addMask = () => {
  tel.forEach((element) => {

    element.oninput = function(event) {
      event.target.setCustomValidity('');
    };

    element.oninvalid = function(event) {
      event.target.setCustomValidity('Количество цифр номера телефона должно быть 10');
    };

    const maskOptions = {
      mask: '+{7}(000)000-00-00'
    };
    const mask = IMask(element, maskOptions);
  });
};
export {addMask};
