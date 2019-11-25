<template>
  <div>
    <button v-on:click="clicked('you just clicked on button  2')">Button 2</button>
  </div>
</template>
<script>
import clickMixin from '@/Mixins/clickMixin'
export default {
  name: "modal",
  mixins: [clickMixin],
  // methods: {
  //   clicked(value){
  //     alert(value)
  //   }
  // }
};
</script>