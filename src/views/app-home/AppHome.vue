<template>
  <div class="home-app flex" text="red 20px">
    首页{{ num }}
    <Demo></Demo>
  </div>
</template>
<script setup lang="ts">
import Demo from "@/components/demo"
import { useTestStore } from "@/store"
const { num } = storeToRefs(useTestStore())
console.log(import.meta.env)
</script>
<style lang="less" scoped>
.home-app {
  height: 100px;
  width: 100px;
}
</style>
