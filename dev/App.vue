<template>
  <div id="app">
    <h1>Vue-AniX</h1>
    <h4 class="mt10">Transitioning-Single-Elements-Components</h4>
    <div class="btn-wrapper">
      <button @click="handleShowEl">Show El</button>
      <button @click="handleHideEl">Hide El</button>
      <button @click="changeColor">Change Color</button>
      <button @click="changeRotate">Change Rotate</button>
    </div>
    <anix :appear="appearStyle" :disappear="disappearStyle"  @on-complete="msg('done')">
      <div v-if="show" class="single">singe-el</div>
    </anix>
    <h4 class="mt10">List Transitions (TODO)</h4>
    <div class="btn-wrapper">
      <button @click="addItem">Add Item</button>
      <button @click="removeItem">Remove Item</button>
    </div>
    <anix-group tag="div" :item-appear="listAppearStyle" :item-disappear="listDisappearStyle">
      <div v-for="item in items" class="item">Item</div>
    </anix-group>
  </div>
</template>

<script>
import { getRandomColor } from '../src/utils'
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
        width: '100px',
        opacity: 0
      },
      items: [1, 1],
      listAppearStyle: {
        opacity: 1
      },
      listDisappearStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleShowEl () {
      this.show = true
    },
    handleHideEl () {
      this.show = false
    },
    changeColor () {
      this.$set(this.appearStyle, 'backgroundColor', getRandomColor())
    },
    changeRotate () {
      let rotate = Math.random() * 360;
      this.$set(this.appearStyle, 'transform', `rotate(${rotate}deg)`)
    },
    addItem () {
      this.items.push(1)
    },
    removeItem () {
      this.items.pop()
    },
    msg (msg) {
      console.log(msg)
    }
  }
}
</script>

<style lang="less">
#app{
  padding: 10px;
}
*{
  margin: 0;
  padding: 0;
}
.mt10{
  margin-top: 10px;
}
.single{
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  color: #fff;
  background-color: #777;
}
.btn-wrapper{
  padding: 10px 0;
  button{
    padding: 5px 10px;
  }
}
.item{
  width: 100px;
}
</style>
