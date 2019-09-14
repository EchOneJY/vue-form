<template>
  <div v-if="item.type === 'time'">
    <template v-if="models">
      <template v-if="item.options.type === 'select'">
        <el-time-select
          v-model="models[item.param]"
          :style="{ width: item.options.width }"
          :placeholder="item.options.placeholder"
          :editable="item.options.editable"
          :clearable="item.options.clearable"
          :piker-options="item.options.selectOptions"
          :disabled="item.options.disabled"
          :size="item.options.size"
        ></el-time-select>
      </template>
      <template v-else>
        <el-time-picker
          v-model="models[item.param]"
          :style="{ width: item.options.width }"
          :placeholder="item.options.placeholder"
          :editable="item.options.editable"
          :clearable="item.options.clearable"
          :piker-options="item.options.pikerOptions"
          :disabled="item.options.disabled"
          :size="item.options.size"
        ></el-time-picker>
      </template>
    </template>
    <template v-else>
      <template v-if="item.options.type === 'select'">
        <el-time-select
          v-model="item.options.defaultValue"
          :style="{ width: item.options.width }"
          :placeholder="item.options.placeholder"
          :editable="item.options.editable"
          :clearable="item.options.clearable"
          :piker-options="item.options.selectOptions"
          :disabled="item.options.disabled"
          :size="item.options.size"
        ></el-time-select>
      </template>
      <template v-else>
        <el-time-picker
          v-model="item.options.defaultValue"
          :style="{ width: item.options.width }"
          :placeholder="item.options.placeholder"
          :editable="item.options.editable"
          :clearable="item.options.clearable"
          :piker-options="item.options.pikerOptions"
          :disabled="item.options.disabled"
          :size="item.options.size"
        ></el-time-picker>
      </template>
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
