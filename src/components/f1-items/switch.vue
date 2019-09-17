<template>
  <div v-if="item.type === 'switch'">
    <template v-if="models">
      <el-switch
        v-model="models[item.param]"
        :disabled="item.options.disabled"
        :size="item.options.size"
        :active-text="item.options.activeText"
        :inactive-text="item.options.InactiveText"
      ></el-switch>
    </template>
    <template v-else>
      <el-switch
        v-model="item.options.defaultValue"
        :disabled="item.options.disabled"
        :size="item.options.size"
        :active-text="item.options.activeText"
        :inactive-text="item.options.InactiveText"
      ></el-switch>
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
