# vue-anix

> A very simple animation library for Vue2, power by [AniX](https://github.com/a-jie/AniX)

> [Live Demo](http://geoffzhu.cn/vue-anix/)

[![npm version](https://img.shields.io/npm/v/vue-anix.svg)](https://www.npmjs.com/package/vue-anix)


## Requirements
- vue: ^2.0.0

## Usage
#### install

``` sh
 npm install vue-anix --save
 yarn add vue-anix
```

#### main.js

```javascript
import anix from 'vue-anix'
Vue.use(anix)
```

#### App.vue

```vue
<template>
  <div id="app">
    <anix :appear="appearStyle" :disappear="disappearStyle"  @on-complete="">
      <div v-if="show">single el</div>
    </anix>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      show: false,
      appearStyle: {
        backgroundColor: 'red',
        width: '200px',
        opacity: 1
      },
      disappearStyle: {
        backgroundColor: 'red',
        width: '100px',
        opacity: 0
      }
    }
  },
}
</script>
```


## Develop
```
npm run dev  //develop
npm run build //production
```

## Todo

- anix-group


