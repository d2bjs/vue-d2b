<script lang="ts">
  import Generator from './Generator.vue';
  import { Component, Vue, Prop } from 'vue-property-decorator';
  import { chartSankey } from 'd2b';
  import { ChartSankeyData } from 'd2b/src/types';

  @Component({})
  export default class ChartSankey extends Generator {
    public name = 'chart-sankey';
    @Prop({ required: true }) public data!: ChartSankeyData;
    @Prop({ default: chartSankey }) public generator: any;
  }
</script>
