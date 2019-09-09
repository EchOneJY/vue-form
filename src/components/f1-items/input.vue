<template>
  <div v-if="item.type === 'input'">
    <template v-if="models">
      <el-input
        v-model="models[item.param]"
        :style="{ width: item.options.width }"
        :placeholder="item.options.placeholder"
        :disabled="item.options.disabled"
        :size="item.options.size"
      ></el-input>
    </template>
    <template v-else>
      <el-input
        v-model="item.options.defaultValue"
        :style="{ width: item.options.width }"
        :placeholder="item.options.placeholder"
        :disabled="item.options.disabled"
        :size="item.options.size"
      ></el-input>
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
