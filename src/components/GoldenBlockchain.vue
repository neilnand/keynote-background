<template lang="pug">
  div(id="golden-blockchain")
    canvas(ref="canvas")
</template>

<script>

export default {
  mounted () {
    const canvas = this.$refs.canvas
    const w = canvas.offsetWidth
    const h = canvas.offsetHeight

    var ctx = canvas.getContext('2d')
    var gradient = ctx.createLinearGradient(0, 0, 1, 0)
    gradient.addColorStop(0, 'green')
    gradient.addColorStop(1, 'white')
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, w, h)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="sass" rel="stylesheet/sass" scoped>
  div#golden-blockchain
    canvas
      position: absolute
      top: 0
      left: 0
      width: 800px
      height: 400px
</style>
