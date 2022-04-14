'use babel';

import createCardAlert from './inkdrop-alert-render';
import { markdownRenderer } from 'inkdrop'

module.exports = {
  origPComponent: null,

  activate() {
    inkdrop.components.registerClass(createCardAlert); 
    if (markdownRenderer) {
      const origP = markdownRenderer.remarkReactComponents.p;
      const cardAlert = createCardAlert(origP);
      markdownRenderer.remarkReactComponents.p = cardAlert;
      this.origPComponent = origP;
    }
  },

  deactivate() {
    inkdrop.components.deleteClass(createCardAlert);
    if (markdownRenderer) {
      if (this.origPComponent !== undefined) {
        markdownRenderer.remarkReactComponents.p = this.origPComponent;
      } else {
        delete markdownRenderer.remarkReactComponents.p;
      }
    }
  },
};
