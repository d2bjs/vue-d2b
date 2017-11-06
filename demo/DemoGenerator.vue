<template>
  <div class = 'legend'>
    <div class = 'note'>
      The Generator component is a one size fits all d2b generator wrapper. It can be used in place of the other chart components or for some of the other d2b utility generators like the d2b legend generator.
    </div>

    <!-- import font awesome for legend icons -->
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">

    <generator :generator = 'legendGenerator' :data = 'legendData' :config = 'legendConfig'></generator>
  </div>
</template>

<script>
  import { legend } from 'd2b'
  import { Generator } from '../src/'

  export default {
    data () {
      return {
        legendGenerator: legend(),
        legendData: [
          { html: 'Lemon' },
          { html: 'Lime' },
          { html: 'Grapefruit' },
          { html: 'Orange' }
        ],
        legendConfig (legend) {
          legend
            .clickable(true)
            .dblclickable(true)
        }
      }
    },

    components: {
      Generator
    }
  }
</script>

<style scoped>
  .legend{
    padding: 20px;
    text-align: center;
  }

  .note {
    padding: 20px 0px;
    color: #777;
  }
</style>
