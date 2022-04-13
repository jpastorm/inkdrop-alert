'use babel';

import createCardAlert from './inkdrop-alert-render';
import { markdownRenderer } from 'inkdrop'

module.exports = {
  origDivComponent: null,

  activate() {
    inkdrop.components.registerClass(createCardAlert); 
    if (markdownRenderer) {
      const OrigDiv = markdownRenderer.remarkReactComponents.p;
      const cardAlert = createCardAlert(OrigDiv);
      markdownRenderer.remarkReactComponents.p = cardAlert;
      this.origDivComponent = OrigDiv;
    }
  },

  deactivate() {
    inkdrop.components.deleteClass(createCardAlert);
    if (markdownRenderer) {
      markdownRenderer.remarkReactComponents.p = this.origDivComponent;
    }
  },
};
