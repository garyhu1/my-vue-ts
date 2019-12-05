<template>
  <div class="about">
    <div v-colorDirective="{color: '#FFF', backgroundColor: '#DE9531'}">{{ message }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import colorDirective from '../directive/color-directive'

@Component({
  directives: {
    colorDirective
  }
})
export default class About extends Vue {
  private message: string = 'this is about vue-ts'

  created() {
    console.log(this.$message);
  }
}
</script>
