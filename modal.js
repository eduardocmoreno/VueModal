/*
* Vue modal plugin v.1.0.0
* @author Eduardo Moreno - eduardocmoreno[at]gmail[dot]com
* Code under MIT License - http://en.wikipedia.org/wiki/MIT_License
*/

import Modal from './Modal.vue';

const modal = {
  install(Vue, options) {
    Vue.component("modal", Modal);

    Vue.mixin({
      methods: {
        //Emit modal event
        modal(options) {
          this.$root.$emit('modalEvent', options);
        }
      }
    });
  }
};

export default modal;