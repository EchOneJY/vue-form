<template>
  <div v-if="item.type == 'textarea'">
    <el-input
      type="textarea"
      :rows="5"
      v-model="item.options.defaultValue"
      :style="{ width: item.options.width }"
      :disabled="item.options.disabled"
      :placeholder="item.options.placeholder"
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
