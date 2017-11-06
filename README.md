# vue-d2b

> Vue components for d2b charts.

Check out the example [here](https://d2bjs.github.io/vue-d2b/).

Visit [d2bjs.org](d2bjs.org) for more examples and detailed d2b guides.

## Dependencies

If you are installing with npm the necessary javascript dependencies **d3** and **d2b** will automatically be included. Otherwise, import **d3** and **d2b** manually before **vue-d2b**.

Additionally, many charts in **d2b** make use of certain **font-awesome** icons so import those if necessary.

## Install & Basic Usage

d2b-vue adds vue convenience components for all of the d2b chart generators. Currently supported chart components:

- `ChartAxis`: An axis chart generator, with options for various types of cartesian e.g. line, bar, area.
- `ChartPie`: A pie or donut chart.
- `ChartSankey`: A sankey flow diagram.
- `ChartSunburst`: A hierarchical sunburst chart.

```html
<template>
  <div class = 'chart'>
    <!-- import font awesome for legend icons -->
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">

    <!--
      Both the :data and :chart properties are deeply reactive so any changes
      to these will cause the chart to update.
    -->
    <chart-pie :data = 'chartData' :config = 'chartConfig'></chart-pie>
  </div>
</template>

<script>
  import { ChartPie } from 'vue-d2b'

  export default {
    data () {
      return {
        // Describe the pie-chart data for more information on this checkout
        // the d2bjs.org docs.
        chartData: [
          {label: 'arc 1', value: 23},
          {label: 'arc 2', value: 31},
          {label: 'arc 3', value: 80},
          {label: 'arc 4', value: 8}
        ],

        // The chart config property is a callback function that is executed
        // any time the chart undergoes an update. The function receives the
        // d2b chart generator as an argument and can be configured as described
        // as described by the d2bjs.org docs.
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
  /*
    The chart dimensions is bound by the outer container in this case '.chart'.
  */
  .chart{
    height: 100vw;
    max-height: 500px;
    margin-top: 40px;
  }
</style>
```

The other chart types are rendered in the same way, except they use their own respective component. For example, a sankey chart:

```html

<template>
  <div class = 'chart'>
    <sankey-pie :data = 'chartData' :config = 'chartConfig'></sankey-pie>
  </div>
</template>

<script>
  import { ChartSankey } from 'vue-d2b'

  export default {
    data () {
      return {
        // The chart data varies from chart to chart. To see what type of data
        // to provide each chart type head over to the d2bjs.org docs.
        chartData: { /* ... */ },

        // There are many configuration options for each chart type, checkout
        // the d2bjs.org docs for more information.
        chartConfig (chart) {
          chart
            // returns the d2b svg sankey generator
            .sankey()
            // returns the d3 sankey generator
            .sankey()
            // now configure the d3 sankey generator through method chaining
            .nodePadding(50)
        }
      }
    },

    components: {
      chartSankey
    }
  }
</script>

<style scoped>
  .chart{
    height: 500px;
  }
</style>
```

## Generator Component

There is also a one size fits all `Generator` component. This can be used in place of any of the chart components and it can also be used for many d2b utility generators. For example, the d2b legend generator:

```html
<template>
  <div class = 'legend'>
    <!-- import font awesome for legend icons -->
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">

    <generator :generator = 'legendGenerator' :data = 'legendData' :config = 'legendConfig'></generator>
  </div>
</template>

<script>
  import { legend } from 'd2b'
  import { Generator } from 'vue-d2b'

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
```

## Caveats and Gotchas

Passing a **computed** property to the `config` prop. You must be sure to collect your dependencies outside of the returned callback function in order to make the computed property reactive.

```html
<template>
  <chart-pie :data = 'chartData' :config = 'chartConfig'></chart-pie>
</template>

<script>
  export default {
    data () {
      return {
        ratio: 0.5,
        chartData: { /* ... */ }
      }
    },

    computed: {
      chartConfig () {
        // Let's say the configured donutRatio is dependent on the data's ratio
        // attribute. Therefore we must collect this dependency outside of the
        // callback function in order to make the chartConfig computed property
        // react to the change
        this.ratio

        return chart => {
          chart.donutRatio(this.ratio)
        }
      }
    }
  }
</script>
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build demo (used to prepare for gitlab pages)
npm run build:demo

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```
