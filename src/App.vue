<template>
  <div id="app">
    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
    font-family: "Century Gothic", CenturyGothic, AppleGothic, sans-serif !important;
}
body {
  background-color: #09A3DB;
}
</style>
