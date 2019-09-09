<template>
  <div v-if="item.type === 'number'">
    <template v-if="models">
      <el-input-number
        v-model="models[item.param]"
        :min="item.options.min"
        :max="item.options.max"
        :step="item.options.step"
        :style="{ width: item.options.width }"
        :disabled="item.options.disabled"
        :size="item.options.size"
      ></el-input-number>
    </template>
    <template v-else>
      <el-input-number
        v-model="item.options.defaultValue"
        :min="item.options.min"
        :max="item.options.max"
        :step="item.options.step"
        :style="{ width: item.options.width }"
        :disabled="item.options.disabled"
        :size="item.options.size"
      ></el-input-number>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    },
    models: {
      type: Object
    }
  }
}
</script>
