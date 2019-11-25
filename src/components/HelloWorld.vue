<template>
  <div class="hello">
    
    {{tip}}<br/>
    {{msg}}<br/>
    <button @click="handleClick">子button</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    value: String
  },
  model:{
    prop:'msg',
    event:'changeMsg'
  },
  data(){
    return {
      tip: "我是子组件的数据，谁能改变我？"
    }
  },
  created(){
    this.$bus.$on('toBrother',(params)=>{
      console.log(params,'params')
    })
  },
  methods:{
    handleClick(){
      this.$emit('changeMsg','我是child 这是我传给父组件的新值')
      this.$emit('update:msg1',333)
      this.$emit('update:msg2',444)
      //this.$parent.msg = "我是子组件，我用 $parent 改变了父组件中 msg 的值";
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
