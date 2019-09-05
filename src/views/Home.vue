<template>
  <div class="home">
    <!-- 调用组件  -->
    <draggable element="ul" :list="formConfig">
      <li v-for="(item, index) in formConfig" :key="index">
        {{ item.name }}
      </li>
    </draggable>
    <!-- 输出list数据 -->
    {{ list }}
  </div>
</template>

<script>
// 引入拖拽组件
import draggable from 'vuedraggable'
import FormConfig from '../config/form'
export default {
  name: 'home',
  components: {
    // 调用组件
    draggable
  },
  data() {
    return {
      formConfig: FormConfig
    }
  }
}
</script>
