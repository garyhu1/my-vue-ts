import { Component, Vue } from 'vue-property-decorator'

// 首先需要声明下
declare module 'vue/types/vue' {
  interface Vue {
    cusMixinMethod(value: number | string): void
  }
}

@Component
export default class CusMixin extends Vue {
  cusMixinMethod(value: number | string): void {
    // console.log(`this is a cus method of mixins: ${value}`)
  }
}
