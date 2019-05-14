<template>
  <div :class="['vue-d2b-container', `vue-d2b-${name}`]"></div>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator';
  import { select, selectAll } from 'd3-selection';
  import 'd3-transition';
  import { chartAxis, id } from 'd2b';

  @Component({})
  export default class Generator extends Vue {
    public name = 'generator';

    @Prop({ required: true }) public data!: any;
    @Prop({ default: chartAxis }) public generator!: any;
    @Prop() public config!: (chart: any) => void;

    @Prop({ default: 250 }) private duration!: number;
    @Prop({ default: id }) private id!: any;
    @Prop({ default: true }) private advanced!: boolean;

    private unwatch = null;

    get properties() {
      return {
        generator: this.generator,
        data: this.data,
        config: this.config,
      };
    }

    public update(options = { skipTransition: false }) {
      this.unwatcher();
      this.$emit('beforeRender', this.$el, this.generator);

      const data = this.data;

      if (this.config) {
        this.config(this.generator);
      }

      const el = select(this.$el);
      const generator = this.advanced ? this.generator.advanced : this.generator;

      el.datum(data);
      if (options.skipTransition) {
        el.call(generator);
      } else {
        el.transition().duration(this.duration).call(generator);
      }

      this.$emit('rendered', this.$el, this.generator);
      this.watcher();
    }

    public updateNow() {
      this.update({skipTransition: true});
    }

    public updateDefer() {
      setTimeout(this.updateNow, 0);
    }

    private destroyed() {
      selectAll('.d2b-tooltip').remove();
      select(window).on(`resize.${this.id}`, null);
    }

    private mounted() {
      this.updateDefer();
      select(window).on(`resize.${this.id}`, this.updateDefer);
    }

    private unwatcher() {
      if (this.unwatch) {
        this.unwatch();
      }
    }

    private watcher() {
      this.unwatcher();
      this.unwatch = this.$watch('properties', this.update, {deep: true});
    }
  }
</script>

<style style="scss">
  .vue-d2b-container {
    height: 100%;
    width: 100%;
  }
</style>
