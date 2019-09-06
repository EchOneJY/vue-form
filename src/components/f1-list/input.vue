<template>
  <div v-if="item.type === 'input'">
    <el-input
      v-model="item.options.defaultValue"
      :style="{ width: item.options.width }"
      :placeholder="item.options.placeholder"
      :disabled="item.options.disabled"
    ></el-input>
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
