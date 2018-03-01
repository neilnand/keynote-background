<template lang="pug">
  div(id="golden-blockchain")
    canvas(ref="canvas")
    img(ref="img")
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
    var r = spread + Math.random() * spread * 0.7
    var shift = i / nodes + Math.random() * 0.2
    var x = r * Math.cos(2 * Math.PI * shift)
    var y = r * Math.sin(2 * Math.PI * shift)
    var nPt = new Point(pt.x + x, pt.y + y)
    ptArray.push(nPt)
    ctx.lineTo(nPt.x, nPt.y)

    if (depth > 0) {
      createPointNode(ctx, nPt, Math.ceil(Math.random() * 5), depth - 1, spread * 0.7, ptArray)
    }
  }
  depth--
}

function createNodeCircles (ctx, ptArray) {
  for (var i = 0; i < ptArray.length; i++) {
    var pt = ptArray[i]
    ctx.moveTo(pt.x, pt.y)
    ctx.arc(pt.x, pt.y, 2, 0, 2 * Math.PI)
  }
}

export default {
  mounted () {
    const canvas = this.$refs.canvas
    const img = this.$refs.img
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
    var depth = 9
    var spread = 1200
    createPointNode(ctx, ptArray[0], 3, depth, spread, ptArray)
    ctx.lineWidth = 1
    ctx.strokeStyle = gradient2
    ctx.stroke()
    ctx.closePath()

    ctx.fillStyle = gradient2
    createNodeCircles(ctx, ptArray)
    ctx.fill()

    img.src = canvas.toDataURL('image/png')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="sass" rel="stylesheet/sass" scoped>
  div#golden-blockchain
    canvas, img
      position: absolute
      top: 0
      left: 0
      width: 1600px
      height: 900px
</style>
