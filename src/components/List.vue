<template>
    <div>
        <Button @click="changeParent" style="margin-bottom: 5px;">change</Button>
        <Button @click="fetchData" style="margin-bottom: 5px;">拉取数据</Button>
    </div>
</template>

<script lang="ts">
import { Component, Vue} from 'vue-property-decorator'
import Http from '../api'

interface Resp<T> {
  personal: T
}

interface PP {
  name: string
}

@Component({})
export default class List extends Vue {

  changeParent(): void {
    this.$mybus.$emit("change");
  }

  fetchData(): void {
    new Http().getUser().then((data) => {
      console.log(data);
    });
  }
}
</script>
