<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.jpg" class="logo" />
    <p>{{ name }}</p>
    <div class="btn" @click="addCounter">click</div>
    <p>Counter: {{ counter }}</p>
    <!-- 展示计算属性 -->
    <p>{{ profile }}</p>
    <Button type="primary" @click="goMain">GO MAIN</Button>
    <p style="margin: 10px 0;">显示store数据{{ ID }}</p>
    <!-- 子组件 -->
    <Message
      msg="Vue-TS"
      @handleSub="decreaseCounter"
      @addToCount="handleAddToCount"
      @reset="handleReset"
      @returnValue="handleReturnValue"
      @promise="handlePromise"
    ></Message>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Message from '../components/Message.vue'
import CusMixin from '../mixins/mixins'

import { Component, Watch, Vue } from 'vue-property-decorator'

@Component({
  components: { Message },
  mixins: [CusMixin]
})
export default class Home extends Vue {
  private name: string = 'garyhu'
  private counter: number = 0

  // 计算属性
  get profile(): string {
    let message: string = `this is a ${this.counter} years `
    return message
  }

  get ID(): string {
    return this.$store.state.ID;
  }

  // 监听
  @Watch('counter')
  changeCounter(newVal: number, oldVal: number): void {
    // console.log(`counter change : ${this.counter}`)
  }

  // methods
  addCounter(): void {
    this.counter++
  }

  decreaseCounter(): void {
    this.counter--
  }

  goMain(): void {
    this.$router.push("/main")
  }

  handleAddToCount(params: number): void {
    // console.log('handleAddToCount>>Message组件传递的值: ' + params)
  }

  handleReset(): void {
    // console.log('handleReset>>Message组件>>不传递值')
  }

  handleReturnValue(params: number): void {
    // console.log('handleReturnValue>>Message组件传递的值: ' + params)
  }

  handlePromise(params: number): void {
    // console.log('handlePromise>>Message组件传递的值: ' + params)
  }

  handleChange(): void {
    // console.log('孙子组件改变了')
  }

  // 生命周期函数
  beforeCreate() {
    // console.log('Call beforeCreate()')
  }

  created() {
    // console.log('Call created()')
  }

  beforeMount() {
    // console.log('Call beforeMount()')
  }

  mounted() {
    // console.log('Call mounted()')
    this.cusMixinMethod('hello')
    // 监听孙子组件的改变
    this.$mybus.$on('change',this.handleChange)
  }
}
</script>

<style scoped>
.logo {
  width: 80px;
  height: 80px;
  border-radius: 3px;
}

.btn {
  width: 80px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 3px;
  background: rgb(77, 102, 245);
  cursor: pointer;
  color: #ffffff;
  margin: 0 auto;
  box-shadow: 0 3px 5px #111;
}

.btn:hover {
  background: rgb(103, 73, 238);
}

.btn:active {
  background: rgb(94, 51, 247);
}
</style>
