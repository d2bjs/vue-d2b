<template>
  <div class = 'chart'>
    <chart-sankey :data = 'chartData' :config = 'chartConfig'></chart-sankey>
  </div>
</template>

<script>
  import { ChartSankey } from '../src/'

  export default {
    data () {
      return {
        chartData: {
          nodes: [
            {name: 'Node A'},
            {name: 'Node B'},
            {name: 'Node C'},
            {name: 'Node D'},
            {name: 'Node E'}
          ],
          links: [
            {source: 'Node A', target: 'Node E', value: 2},
            {source: 'Node A', target: 'Node C', value: 2},
            {source: 'Node B', target: 'Node C', value: 2},
            {source: 'Node B', target: 'Node D', value: 2},
            {source: 'Node C', target: 'Node D', value: 2},
            {source: 'Node C', target: 'Node E', value: 2},
            {source: 'Node D', target: 'Node E', value: 4}
          ]
        },

        chartConfig (config) {
          config
            .sankey()
            .sankey()
            .nodePadding(100)

          config
            .sankey()
            .nodeDraggableY(true)
        }
      }
    },

    components: {
      ChartSankey
    }
  }
</script>

<style scoped>
  .chart{
    height: 100vw;
    max-height: 700px;
    margin-top: 40px;
  }
</style>
