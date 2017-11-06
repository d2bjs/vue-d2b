import { chartSankey } from 'd2b'
import generatorMixin from '../mixins/generatorMixin'

export default {
  mixins: [generatorMixin],
  props: {
    generator: {
      type: Function,
      default: chartSankey()
    }
  },
  data () {
    return { name: 'sankey-chart' }
  }
}
