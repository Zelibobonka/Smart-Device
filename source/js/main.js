import './vendor.js';
import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {showTextHidden} from './modules/open-text-hidden';
import {scroll} from './modules/scroll';
import {realizationAccordion} from './modules/accordion';
import {addMask} from './modules/add-mask';

window.addEventListener('DOMContentLoaded', () => {

  // Utils

  iosVhFix();

  // Modules

  showTextHidden();
  scroll();
  realizationAccordion();
  addMask();

  window.addEventListener('load', () => {
    initModals();
  });
});
