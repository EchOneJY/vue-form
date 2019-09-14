<template>
  <div v-if="item.type === 'date'">
    <template v-if="models">
      <el-date-picker
        v-model="models[item.param]"
        :style="{ width: item.options.width }"
        :placeholder="item.options.placeholder"
        :type="item.options.type"
        :editable="item.options.editable"
        :clearable="item.options.clearable"
        :start-placeholder="item.options.startPlaceholder"
        :end-placeholder="item.options.endPlaceholder"
        :disabled="item.options.disabled"
        :size="item.options.size"
      ></el-date-picker>
    </template>
    <template v-else>
      <el-date-picker
        v-model="item.options.defaultValue"
        :style="{ width: item.options.width }"
        :placeholder="item.options.placeholder"
        :type="item.options.type"
        :editable="item.options.editable"
        :clearable="item.options.clearable"
        :start-placeholder="item.options.startPlaceholder"
        :end-placeholder="item.options.endPlaceholder"
        :disabled="item.options.disabled"
        :size="item.options.size"
      ></el-date-picker>
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
