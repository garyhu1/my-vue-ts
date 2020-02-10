<template>
  <div>
    <p>{{ name }}:{{ msg }}</p>
    <p>{{ foo('demo') }}</p>
    <div class="decrease" @click="descrease">descrease</div>
    <p>count: {{ count }}</p>
    <div class="decrease bm" @click="addToCount(100)">addToCount</div>
    <div class="decrease bm" @click="resetCount">resetCount</div>
    <div class="decrease bm" @click="returnValue">returnValue</div>
    <div class="decrease bm" @click="promise">promise</div>
    <List></List>
  </div>
</template>

<script lang="ts">
import { Component, Watch, Emit, Prop, Vue } from 'vue-property-decorator'
import List from './List.vue'

@Component({
  components: { List }
})
export default class Message extends Vue {
  private name: string = 'Hello'
  private count: number = 0

  @Prop({default: ''})
  private msg!: string

  // 计算属性
  get foo() {
    return (params: any): string => {
      let val = `this is a ${params} to test msg :: ${this.msg}`
      return val
    }
  }

  // methods
  descrease(): void {
    // 触发父组件的方法
    this.$emit('handleSub')
  }

  // Emit（此处没有效果）
  @Emit("addToCount")
  addToCount(n: number) {
    this.count += n
    return n;
  }

  @Emit('reset')
  resetCount() {
    this.count = 0
  }

  // 此处也没有效果
  @Emit("returnValue")
  returnValue() {
    return 100
  }

  // 延迟执行的emit（此处触发父类方法）
  @Emit()
  promise() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(20)
      }, 0)
    })
  }
}
</script>

<style scoped>
.decrease {
  width: 100px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  margin: 0 auto;
  background: rgb(62, 59, 252);
  border-radius: 3px;
  box-shadow: 0 3px 5px #111;
  cursor: pointer;
  color: #ffffff;
}

.decrease:hover {
  background: rgb(10, 7, 150);
}

.decrease:active {
  background: rgb(18, 14, 234);
}

.bm {
  margin-bottom: 10px;
}
</style>
