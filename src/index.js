'use strict'

import { AniX } from 'anix'
import vueAnix from './vue-anix.vue'
import vueAnixGroup from './vue-anix-group.vue'

function install (Vue, options = {}) {
  const version = Vue.version.split('.')[0]
  if (version !== '2') {
    console.error('For Vue.js 2, Version not support.')
  }
  const inBrowser = typeof window !== 'undefined'

  if (inBrowser) {
    window.AniX = AniX
  }

  Vue.component('anix', vueAnix)
  Vue.component('anix-group', vueAnixGroup)
}

export default install

if (typeof module === 'object' && module.exports) {
  module.exports.install = install
}