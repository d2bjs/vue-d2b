<script lang="ts">
  import Generator from './Generator.vue';
  import { Component, Vue, Prop } from 'vue-property-decorator';
  import { chartAxis } from 'd2b';
  import { ChartAxisData } from 'd2b/src/types';

  @Component({})
  export default class ChartAxis extends Generator {
    @Prop({ required: true }) public data!: ChartAxisData;
    @Prop({ default: chartAxis }) public generator: any;
  }
</script>
