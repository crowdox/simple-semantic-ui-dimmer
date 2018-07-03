import Component from '@ember/component';
// Relative path works since both survey and manage are in lib/...
import SSTransition from '../mixins/ss-transition';

export default Component.extend(SSTransition, {
  classNames: ['ui', 'dimmer'],
  isActive: false,

  // Transition Defaults
  transitionMode: 'fade',
  transitionDuration: 500,

  didInsertElement() {
    this._super(...arguments);
    if (!this.get('active')) {
      this._hide();
    }
    this.doTransition();
  },

  didUpdateAttrs() {
    this._super(...arguments);
    this.doTransition();
  },

  doTransition() {
    if (this.get('isActive')) {
      this.transitionIn();
    } else {
      this.transitionOut();
    }
  }
});
