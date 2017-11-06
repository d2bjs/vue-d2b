import generatorMixin from '../mixins/generatorMixin'

export default {
  mixins: [generatorMixin],

  props: {
    generator: {
      required: true,
      type: Function
    },

    name: {
      type: String,
      default: 'generator'
    }
  }
}
