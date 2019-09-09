<template>
  <div v-if="item.type === 'checkbox'">
    <template v-if="models">
      <el-checkbox-group
        :class="{ block: item.options.block }"
        v-model="models[item.param]"
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
    </template>
    <template v-else>
      <el-checkbox-group
        :class="{ block: item.options.block }"
        v-model="item.options.defaultValue"
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
