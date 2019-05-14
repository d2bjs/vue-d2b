<script lang="ts">
  import Generator from './Generator.vue';
  import { Component, Vue, Prop } from 'vue-property-decorator';
  import { chartSunburst } from 'd2b';
  import { ChartSunburstData } from 'd2b/src/types';

  @Component({})
  export default class ChartSunburst extends Generator {
    public name = 'chart-sunburst';
    @Prop({ required: true }) public data!: ChartSunburstData;
    @Prop({ default: chartSunburst }) public generator: any;
  }
</script>
