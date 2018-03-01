<template lang="pug">
  div(id="app")
    router-view
    nav
      ul
        li
          router-link(to="/template") Template
        li
          router-link(to="/golden-blockchain") Golden Blockchain
        li
          router-link(to="/pixijsdemo") PixiJS Demo
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="sass" rel="stylesheet/sass">
  body
    margin: 0
    padding: 0
    font-family: 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    color: #2c3e50

  #app
    nav
      position: fixed
      bottom: 10px
      left: 10px

</style>
