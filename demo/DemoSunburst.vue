<template>
  <div class = 'chart'>
    <!-- import font awesome for breadcrumb icons -->
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <chart-sunburst :data = 'chartData' :config = 'chartConfig'></chart-sunburst>
  </div>
</template>

<script>
  import chartData from './sunburstData'
  import { ChartSunburst } from '../src/'

  export default {
    // add resize event to enable / disable breadcrumbs based on body width
    created () {
      window.addEventListener('resize', () => {
        this.breadcrumbsEnabled = document.body.clientWidth > 500
      })
    },

    components: {
      ChartSunburst
    },

    computed: {
      chartConfig () {
        // declare config dependencies so that the callback function will be
        // updated when they change
        this.breadcrumbsEnabled

        // return the computed callback chart configuration
        return chart => {
          chart.chartFrame().breadcrumbsEnabled(this.breadcrumbsEnabled)
        }
      }
    },

    data () {
      return {
        breadcrumbsEnabled: document.body.clientWidth > 500,
        chartData
      }
    }
  }
</script>

<style scoped>
  .chart{
    height: 100vw;
    max-height: 500px;
    margin-top: 40px;
  }
</style>
