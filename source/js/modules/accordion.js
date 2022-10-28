const mainFooterTextWrapper = document.querySelector('.main-footer__text-wrapper');
const footerNavTitleHolder = mainFooterTextWrapper.querySelector('.footer-nav__title-holder');
const contactsTitleHolder = mainFooterTextWrapper.querySelector('.contacts__title-holder');
const footerNavButtonOpen = mainFooterTextWrapper.querySelector('.footer-nav__button-open');
const footerNavButtonClose = mainFooterTextWrapper.querySelector('.footer-nav__button-close');
const contactsButtonOpen = mainFooterTextWrapper.querySelector('.contacts__button-open');
const contactsButtonClose = mainFooterTextWrapper.querySelector('.contacts__button-close');
const footerNavList = mainFooterTextWrapper.querySelector('.footer-nav__list');
const contactsList = mainFooterTextWrapper.querySelector('.contacts__list');



const realizationAccordion = () => {
  if (window.matchMedia("(max-width: 767px)").matches) {
    footerNavList.style.display = 'none';
    contactsList.style.display = 'none';
    footerNavTitleHolder.style.marginBottom = "0";
    contactsTitleHolder.style.marginBottom = "0";

    footerNavButtonOpen.addEventListener('click', () => {
      footerNavList.style.display = 'block';
      footerNavTitleHolder.style.marginBottom = "20px";
      contactsList.style.display = 'none';
      contactsButtonOpen.style.display = 'block';
      contactsButtonClose.style.display = 'none';
      contactsTitleHolder.style.marginBottom = "0";
      footerNavButtonClose.style.display = 'block';
      footerNavButtonOpen.style.display = 'none';
    });

    footerNavButtonClose.addEventListener('click', () => {
      footerNavList.style.display = 'none';
      footerNavTitleHolder.style.marginBottom = "0";
      footerNavButtonClose.style.display = 'none';
      footerNavButtonOpen.style.display = 'block';
    });

    contactsButtonOpen.addEventListener('click', () => {
      contactsList.style.display = 'block';
      contactsTitleHolder.style.marginBottom = "20px";
      footerNavList.style.display = 'none';
      footerNavButtonOpen.style.display = 'block';
      footerNavButtonClose.style.display = 'none';
      footerNavTitleHolder.style.marginBottom = "0";
      contactsButtonClose.style.display = 'block';
      contactsButtonOpen.style.display = 'none';
    });

    contactsButtonClose.addEventListener('click', () => {
      contactsList.style.display = 'none';
      contactsTitleHolder.style.marginBottom = "0";
      contactsButtonClose.style.display = 'none';
      contactsButtonOpen.style.display = 'block';
    });
  }
}

export {realizationAccordion};
