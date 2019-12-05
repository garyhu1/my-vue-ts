<template>
    <div>
        <Button @click="changeParent" style="margin-bottom: 5px;">change</Button>
        <Button @click="fetchData" style="margin-bottom: 5px; margin-left: 8px;">拉取数据</Button>
        <div v-if="isNodata">暂无数据</div>
        <div style="margin: 10px 0;">
          <div v-for="(item,index) in items" :key="index">{{ item.name }}</div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue} from 'vue-property-decorator'
import Http from '../api'

interface Resp<T> {
  items: T[]
}

interface PP {
  name: string
}

@Component({})
export default class List extends Vue {

  private isNodata: boolean = true;
  private items: PP[] = [];

  changeParent(): void {
    this.$mybus.$emit("change");
  }

  fetchData(): void {
    new Http().getUser().then((data: any) => {
      console.log(data);
      this.isNodata = false;
      this.items = data.items;
    });
  }
}
</script>
