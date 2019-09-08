<template>
  <div v-if="item.type === 'select'">
    <el-select
      v-model="item.defaultValue"
      :placeholder="item.options.placeholder"
      :disabled="item.options.disabled"
    >
      <el-option
        v-for="item in item.items"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      ></el-option>
    </el-select>
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
