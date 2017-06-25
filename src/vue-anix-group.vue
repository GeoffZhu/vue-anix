<script>
import { AniX } from 'anix'
import { isEmpty } from './utils'
// TODO
export default {
  name: 'vue-anix-group',
  props: {
    tag: {
      type: String,
      default: 'span'
    },
    itemAppear: {
      type: Object,
      default: {}
    },
    itemDisappear: {
      type: Object,
      default: {}
    }
  },
  date () {
    return {}
  },
  render (h) {
    if (isEmpty(this.$slots)) {
      return h()
    }
    return h(
      this.tag,
      this.$slots.default
    )
  },
  beforeUpdate () {},
  updated () {},
  methods: {},
  watch: {}
}
</script>