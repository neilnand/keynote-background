<template lang="pug">
  div(id="golden-blockchain")
    canvas(ref="canvas")
</template>

<script>

class Point {
  constructor (x, y) {
    this.x = x
    this.y = y
  }
}

function createPointNode (ctx, pt, nodes, depth, spread, ptArray) {
  for (var i = 0; i < nodes; i++) {
    ctx.moveTo(pt.x, pt.y)
    var r = spread + Math.random() * spread * 0.8
    var shift = i / nodes + Math.random() * 0.1
    var x = r * 1.6 * Math.cos(2 * Math.PI * shift)
    var y = r * Math.sin(2 * Math.PI * shift)
    var nPt = new Point(pt.x + x, pt.y + y)
    ptArray.push(nPt)
    ctx.lineTo(nPt.x, nPt.y)

    if (depth > 0) {
      createPointNode(ctx, nPt, 3, depth - 1, spread * 0.8, ptArray)
    }
  }
  depth--
}

function createNodeCircles (ctx, ptArray) {

}

export default {
  mounted () {
    const canvas = this.$refs.canvas
    const w = canvas.offsetWidth << 1
    const h = canvas.offsetHeight << 1

    var ctx = canvas.getContext('2d')
    ctx.canvas.width = w
    ctx.canvas.height = h

    var gradient = ctx.createLinearGradient(0, 0, w, h)
    gradient.addColorStop(0, '#E7A10E')
    gradient.addColorStop(1, '#F5D123')

    var gradient2 = ctx.createLinearGradient(0, 0, w, h)
    gradient2.addColorStop(0, '#F5D123')
    gradient2.addColorStop(1, '#E7A10E')

    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, w, h)

    var ptArray = [new Point(w >> 1, h >> 1)]

    ctx.beginPath()
    var depth = 3
    createPointNode(ctx, ptArray[0], 3, depth, 200, ptArray)
    ctx.lineWidth = 1
    ctx.strokeStyle = gradient2
    ctx.strokeStyle = '#ff0000'
    ctx.stroke()
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
