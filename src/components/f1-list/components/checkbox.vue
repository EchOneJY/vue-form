<template>
  <div v-if="item.type === 'checkbox'">
    <el-checkbox-group
      :class="{ block: item.options.block }"
      v-model="item.options.checkboxDefaultValue"
      :disabled="item.options.disabled"
      :size="item.options.size"
    >
      <template v-if="item.options.style === 'normal'">
        <el-checkbox
          :label="cItem.label"
          v-for="(cItem, index) in item.items"
          :key="index"
          >{{ cItem.value }}</el-checkbox
        >
      </template>
      <template v-if="item.options.style === 'button'">
        <el-checkbox-button
          :label="cItem.label"
          v-for="(cItem, index) in item.items"
          :key="index"
          >{{ cItem.value }}</el-checkbox-button
        >
      </template>
    </el-checkbox-group>
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
