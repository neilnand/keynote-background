<template lang="pug">
  div(id="golden-blockchain")
    span Hello world!
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Yellow'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="sass" rel="stylesheet/sass" scoped>
  div#golden-blockchain
    background: red
</style>
