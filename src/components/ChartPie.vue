<script lang="ts">
  import Generator from './Generator.vue';
  import { Component, Vue, Prop } from 'vue-property-decorator';
  import { chartPie } from 'd2b';
  import { ChartPieData } from 'd2b/src/types';

  @Component({})
  export default class ChartPie extends Generator {
    @Prop({ required: true }) public data!: ChartPieData;
    @Prop({ default: chartPie }) public generator: any;
  }
</script>
