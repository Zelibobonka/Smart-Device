import './vendor.js';
import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {showTextHidden} from './modules/open-text-hidden';
import {scrolling} from './modules/scroll';
import {realizationAccordion} from './modules/accordion';
import {settingFocus} from './modules/setting-focus';
import {addMask} from './modules/add-mask';

window.addEventListener('DOMContentLoaded', () => {

  // Utils

  iosVhFix();

  // Modules

  showTextHidden();
  scrolling();
  realizationAccordion();
  settingFocus();
  addMask();

  window.addEventListener('load', () => {
    initModals();
  });
});
