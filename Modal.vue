<template>
  <div v-if="activeModal" class="modal" @click.stop="close">
    <div class="modal-container" ref="modal" :class="{'modal-deactive': deactiveModal}">
      <div class="container-header">
        <div v-if="options.title" class="header-title">{{options.title}}</div>
        <button v-if="!options.lock" class="header-close" @click.stop="close"></button>
      </div>
      <div class="container-body">
        <div v-if="options.content" v-html="options.content"></div>
        <component v-else-if="options.component" :is="options.component" v-bind="options.props"></component>
        <div v-else class="body-alert">Empty content or component value in options!</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeModal: false,
        deactiveModal: false,
        options: {
          title: '',
          content: '',
          component: {},
          props: {},
          lock: false
        }
      }
    },
    methods: {
      close(e) {
        let classes = e.target.classList;
        if ((classes.contains('modal') || classes.contains('header-close')) && !this.deactiveModal && !this.options.lock) {
          this.deactiveModal = true;
          this.$refs.modal.addEventListener('animationend', () => {
            this.$root.$emit('modalEvent');
            this.deactiveModal = false;
          });
        }
      }
    },
    created() {
      //Modal Event listener
      this.$root.$on('modalEvent', options => {
        if (options && !this.activeModal) {
          this.options = { ...options };
        }
        this.activeModal = options ? true : false;
      });
    },
    watch: {
      options: function () {
        typeof this.options.onOpen === 'function' && this.options.onOpen();
      }
    }
  }
</script>

<style lang="scss">
  @import 'modal';
</style>