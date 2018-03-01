<template lang="pug">
  div(id="golden-blockchain")
    span {{ msg }}
    canvas(ref="renderCanvas")
</template>

<script>
import Vue from 'vue'
import * as PIXI from 'pixi.js'

const EventBus = new Vue()

function getProviders () {
  return {
    // These need to be contained in an object because providers are not reactive.
    PIXIWrapper: {
      // Expose PIXI and the created app to all descendants.
      PIXI,
      PIXIApp: null
    },
    // Expose the event bus to all descendants so they can listen for the app-ready event.
    EventBus: EventBus
  }
}

export default {
  // Allows descendants to inject everything.
  provide: getProviders,
  // We have to inject into this component as well, so we can instantiate the objects.
  inject: ['PIXIWrapper', 'EventBus'],
  mounted () {
    // Determine the width and height of the renderer wrapper element.
    const renderCanvas = this.$refs.renderCanvas
    const w = renderCanvas.offsetWidth
    const h = renderCanvas.offsetHeight

    // Create a new PIXI app.
    this.PIXIWrapper.PIXIApp = new PIXI.Application(w, h, {
      view: renderCanvas,
      backgroundColor: 0x1099bb
    })

    this.EventBus.$emit('ready')
  },
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

    canvas
      width: 500px
      height: 300px
</style>
