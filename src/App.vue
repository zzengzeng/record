<template>
  <div id="app">
    <keep-alive>
      <router-view 
      :key="this.$router.history.current.path" v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view/>
  </div>
</template>

