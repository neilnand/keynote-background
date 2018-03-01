<template lang="pug">
  div(id="pixijs-demo")
    canvas(ref="bgCanvas")
    canvas(ref="renderCanvas")
</template>

<script>
  import * as PIXI from 'pixi.js'

  function getProviders () {
    return {
      // These need to be contained in an object because providers are not reactive.
      PIXIWrapper: {
        // Expose PIXI and the created app to all descendants.
        PIXI,
        PIXIApp: null
      }
    }
  }

  export default {
    provide: getProviders,
    inject: ['PIXIWrapper', 'EventBus'],

    mounted () {
      const bgCanvas = this.$refs.bgCanvas
      const renderCanvas = this.$refs.renderCanvas
      const w = renderCanvas.offsetWidth
      const h = renderCanvas.offsetHeight

      var ctx = bgCanvas.getContext('2d')
      var gradient = ctx.createLinearGradient(0, 0, 200, 0)
      gradient.addColorStop(0, 'green')
      gradient.addColorStop(1, 'white')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, 10, 10)

      var app = new PIXI.Application(w, h, {
        view: renderCanvas,
        transparent: true
      })

      var container = new PIXI.Container()
      container.scale.x = 1
      container.scale.y = 1

      var graphics = new PIXI.Graphics()

      // set a fill and line style
      graphics.beginFill(0xFF3300)
      graphics.lineStyle(10, 0xffd900, 1)

      // draw a shape
      graphics.moveTo(50, 50)
      graphics.lineTo(250, 50)
      graphics.lineTo(100, 100)
      graphics.lineTo(250, 220)
      graphics.lineTo(50, 220)
      graphics.lineTo(50, 50)
      graphics.endFill()

      // set a fill and line style again
      graphics.lineStyle(10, 0xFF0000, 0.8)
      graphics.beginFill(0xFF700B, 1)

      // draw a second shape
      graphics.moveTo(210, 300)
      graphics.lineTo(450, 320)
      graphics.lineTo(570, 350)
      graphics.quadraticCurveTo(600, 0, 480, 100)
      graphics.lineTo(330, 120)
      graphics.lineTo(410, 200)
      graphics.lineTo(210, 300)
      graphics.endFill()

      // draw a rectangle
      graphics.lineStyle(2, 0x0000FF, 1)
      graphics.drawRect(50, 250, 100, 100)

      // draw a circle
      graphics.lineStyle(0)
      graphics.beginFill(0xFFFF0B, 0.5)
      graphics.drawCircle(470, 200, 100)
      graphics.endFill()

      graphics.lineStyle(20, 0x33FF00)
      graphics.moveTo(30, 30)
      graphics.lineTo(600, 300)

      // Add Elements
      container.addChild(graphics)
      app.stage.addChild(container)

      this.PIXIWrapper.PIXIApp = app
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="sass" rel="stylesheet/sass" scoped>
  div#pixijs-demo
    canvas
      position: absolute
      top: 0
      left: 0
      width: 1600px
      height: 900px
</style>
