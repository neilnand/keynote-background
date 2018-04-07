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

function createPointNode (countStart, ctx, pt, nodes, depth, radius, ptArray, initstep = Math.random()) {
  for (var i = countStart; i < nodes; i++) {
    ctx.moveTo(pt.x, pt.y)
    var step = initstep + (i / nodes) + 0.5 + (Math.random() * 0.2 - 0.1)
    radius += radius * Math.random() * 0.15
    var x = Math.cos(Math.PI * 2 * step) * radius
    var y = Math.sin(Math.PI * 2 * step) * radius
    var nPt = new Point(pt.x + x, pt.y + y)
    ptArray.push(nPt)
    ctx.lineTo(nPt.x, nPt.y)
    if (depth > 0) {
      createPointNode(1, ctx, nPt, nodes, depth - 1, radius * 0.7, ptArray, step)
    }
  }
}

function createNodeCircles (ctx, ptArray) {
  for (var i = 0; i < ptArray.length; i++) {
    var pt = ptArray[i]
    ctx.moveTo(pt.x, pt.y)
    ctx.arc(pt.x, pt.y, 1.5, 0, 2 * Math.PI)
  }
}

export default {
  mounted () {
    const canvas = this.$refs.canvas
    const img = this.$refs.img
    const w = canvas.offsetWidth << 1
    const h = canvas.offsetHeight << 1

    var colourSet = ['#E7A10E', '#F5D123']

    var ctx = canvas.getContext('2d')
    ctx.canvas.width = w
    ctx.canvas.height = h

    var gradient = ctx.createLinearGradient(0, 0, w, h)
    for (var i = 0; i < colourSet.length; i++) {
      gradient.addColorStop(i, colourSet[i])
    }

    colourSet.reverse()

    var gradient2 = ctx.createLinearGradient(0, 0, w, h)
    for (i = 0; i < colourSet.length; i++) {
      gradient2.addColorStop(i, colourSet[i])
    }

    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, w, h)

    var ptArray = [new Point(w >> 1, h >> 1)]

    ctx.beginPath()
    var depth = 14
    var size = 500
    var nodes = 3
    createPointNode(0, ctx, ptArray[0], nodes, depth, size, ptArray)
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
