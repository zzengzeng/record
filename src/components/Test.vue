<template>
  <div>
    <button v-on:click="clicked('you just clicked on button  1')">Button 1</button>
  </div>
</template>
<script>
import clickMixin from '@/Mixins/clickMixin'
export default {
  name: "test",
  mixins: [clickMixin],
  // methods:{
  //   clicked(value) {
  //     alert(value);
  //   }
  // }
};
</script>