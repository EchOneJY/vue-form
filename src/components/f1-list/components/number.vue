<template>
  <div v-if="item.type === 'number'">
    <el-input-number
      v-model="item.options.defaultValue"
      :min="item.options.min"
      :max="item.options.max"
      :step="item.options.step"
      :style="{ width: item.options.width }"
      :disabled="item.options.disabled"
      :size="item.options.size"
    ></el-input-number>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
