<script>
import { AniX } from 'anix'
import { isEmpty } from './utils'

export default {
  name: 'vue-anix',
  props: {
    appear: {
      type: Object,
      default: {}
    },
    disappear: {
      type: Object,
      default: {}
    }
  },
  date () {
    return {
      elCopy: null
    }
  },
  render (h) {
    if (isEmpty(this.$slots)) {
      return h()
    }
    return h(
      this.$slots.default[0].tag,
      this.$slots.default[0].data,
      this.$slots.default[0].children
    )
  },
  beforeUpdate () {
    // 保存将销毁元素的副本
    this.elCopy = this.$el
  },
  updated () {
    if (this.$el.nodeType === 1) {
      setTimeout(() => {
        AniX.to(this.$el, .5, this.calcAppear(this.appear))
      }, 0)
    } else {
      this.$el.parentNode.insertBefore(this.elCopy, this.$el)
      setTimeout(() => {
        AniX.to(this.elCopy, .5, this.calcAppear(this.disappear, _ => {
          this.elCopy.parentNode.removeChild(this.elCopy)
        }))
      }, 0)
    }
  },
  mounted () {
    if (isEmpty(this.$slots)) return
    setTimeout(() => {
      AniX.to(this.$el, .5, this.calcAppear(this.appear))
    }, 0)
  },
  methods: {
    calcAppear (appear, cb) {
      return Object.assign({
        onComplete: () => {
          cb && cb()
          this.$emit('on-complete')
        }
      }, appear)
    }
  },
  watch: {
    appear: {
      deep: true,
      handler () {
        if (isEmpty(this.$slots)) return
        AniX.to(this.$el, .5, this.calcAppear(this.appear))
      }
    }
  }
}
</script>