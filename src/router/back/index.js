const back = r => require.ensure([], () => r(require('@/views/back/index.vue')), 'back');
const test = r => require.ensure([], () => r(require('@/views/back/test.vue')), 'test');
export default [
  {
    path:'/',
    redirect:'/back',
    component:back
  },
  {
    path:'/back/(modal)?',
    component: back,
    meta:{
      title:'back'
    }
  },
  {
    path:'/test',
    component: test,
    meta:{
      title:'test'
    }
  }
]