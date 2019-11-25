<template>
  <div class="physics-back">
    <button @click="changeVisible">展示 modal</button>
    <Modal :visible="visible"/>
    <transition name="mask-fade">
      <div class="mask" v-if="visible" @click="changeVisible"></div>
    </transition>
  </div>
</template>
<script>
import Modal from "./components/modal.vue";
export default {
  components: {
    Modal
  },
  data() {
    return {
      visible: false
    };
  },
  methods: {
    changeVisible() {
      if (this.visible) {
        this.visible = false;
      } else {
        this.visible = true;
      }
    }
  }
};
</script>

<style scoped>
.mask-fade-enter-active,
.mask-fade-leave-active {
  transition: opacity 0.36s;
}
.mask-fade-enter,
.mask-fade-leave-to {
  opacity: 0;
}
.mask {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 6;
}
</style>