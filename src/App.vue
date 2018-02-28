<template lang="pug">
  div(id="app")
    router-view
    nav
      ul
        li
          router-link(to="/template") Template
        li
          router-link(to="/golden-blockchain") Golden Blockchain
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss" rel="stylesheet/scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin: 0;
    padding: 0;

    nav {
      position: absolute;
      bottom: 10px;
      left: 10px;
    }
  }
</style>
