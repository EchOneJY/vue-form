<template>
  <div v-if="item.type == 'textarea'">
    <template v-if="models">
      <el-input
        type="textarea"
        :rows="item.options.rows"
        v-model="models[item.param]"
        :style="{ width: item.options.width }"
        :disabled="item.options.disabled"
        :placeholder="item.options.placeholder"
        :size="item.options.size"
      ></el-input>
    </template>
    <template v-else>
      <el-input
        type="textarea"
        :rows="item.options.rows"
        v-model="item.options.defaultValue"
        :style="{ width: item.options.width }"
        :disabled="item.options.disabled"
        :placeholder="item.options.placeholder"
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
