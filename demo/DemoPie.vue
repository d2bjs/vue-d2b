<template>
  <div class = 'chart'>
    <!-- import font awesome for legend icons -->
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <chart-pie :data = 'chartData' :config = 'chartConfig'></chart-pie>
  </div>
</template>

<script>
  import { ChartPie } from '../src/'

  export default {
    data () {
      return {
        chartData: [
          {label: 'arc 1', value: 23},
          {label: 'arc 2', value: 31},
          {label: 'arc 3', value: 80},
          {label: 'arc 4', value: 8}
        ],

        chartConfig (chart) {
          chart.donutRatio(0.5)
        }
      }
    },

    components: {
      ChartPie
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
