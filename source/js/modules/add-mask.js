const tel = document.querySelectorAll('[type="tel"]')

  const addMask = () => {
    tel.forEach(element => {
      const maskOptions = {
        mask: '+{7}(000)000-00-00'
      };
      const mask = IMask(element, maskOptions);
    });
  };
export {addMask};
