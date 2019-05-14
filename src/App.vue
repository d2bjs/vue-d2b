<template>
  <div id="app">
    <ChartAxis :data='chartData'/>
  </div>
</template>

<script lang="ts">
import ChartAxis from './components/ChartAxis.vue';
import { Component, Vue } from 'vue-property-decorator';
import { svgArea, svgLine, svgScatter } from 'd2b';
import { ChartAxisData } from 'd2b/src/types';

@Component({
  components: {
    ChartAxis,
  },
})
export default class App extends Vue {
  private chartData: ChartAxisData = {
    sets: [
      {
        generators: [{
          types: ['area', 'line', 'scatter'],
        }],
        graphs: [
          {
            label: 'area 1',
            values: [
              {x: 1, y: 25},
              {x: 2, y: 38},
              {x: 3, y: 24},
              {x: 4, y: 60},
              {x: 5, y: 22},
            ],
          },
          {
            label: 'area 2',
            values: [
              {x: 1, y: 15},
              {x: 2, y: 8},
              {x: 3, y: 54},
              {x: 4, y: 22},
              {x: 5, y: 20},
            ],
          },
        ],
      },
    ],
  };

  private mounted() {
    setTimeout(() => {
      this.chartData = {
        sets: [
          {
            generators: [{
              types: ['area', 'line', 'scatter'],
            }],
            graphs: [
              {
                label: 'area 1',
                values: [
                  {x: 1, y: 15},
                  {x: 2, y: 48},
                  {x: 3, y: 64},
                  {x: 4, y: 20},
                  {x: 5, y: 2},
                ],
              },
              {
                label: 'area 2',
                values: [
                  {x: 1, y: 45},
                  {x: 2, y: 108},
                  {x: 3, y: 34},
                  {x: 4, y: 52},
                  {x: 5, y: 20},
                ],
              },
            ],
          },
        ],
      };
    }, 2000);
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
</style>
