<template>
  <div v-if="item.type === 'select'">
    <template v-if="models">
      <el-select
        v-model="models[item.param]"
        :placeholder="item.options.placeholder"
        :disabled="item.options.disabled"
        :multiple="item.options.multiple"
      >
        <el-option
          v-for="(item, index) in item.items"
          :key="item.label + index"
          :label="item.value"
          :value="item.label"
        ></el-option>
      </el-select>
    </template>
    <template v-else>
      <el-select
        v-model="item.options.defaultValue"
        :placeholder="item.options.placeholder"
        :disabled="item.options.disabled"
        :multiple="item.options.multiple"
      >
        <el-option
          v-for="(item, index) in item.items"
          :key="item.label + index"
          :label="item.value"
          :value="item.label"
        ></el-option>
      </el-select>
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
