<template>
  <div v-if="item.type === 'time'">
    <template v-if="models">
      <el-time-select
        v-model="models[item.param]"
        :style="{ width: item.options.width }"
        :placeholder="item.options.placeholder"
        :editable="item.options.editable"
        :clearable="item.options.clearable"
        :start-placeholder="item.options.startPlaceholder"
        :end-placeholder="item.options.endPlaceholder"
        :is-range="item.options.isRange"
        :disabled="item.options.disabled"
        :size="item.options.size"
      ></el-time-select>
    </template>
    <template v-else>
      <el-time-select
        v-model="item.options.defaultValue"
        :style="{ width: item.options.width }"
        :placeholder="item.options.placeholder"
        :editable="item.options.editable"
        :clearable="item.options.clearable"
        :start-placeholder="item.options.startPlaceholder"
        :end-placeholder="item.options.endPlaceholder"
        :is-range="item.options.isRange"
        :disabled="item.options.disabled"
        :size="item.options.size"
      ></el-time-select>
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
