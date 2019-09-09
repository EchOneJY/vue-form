<template>
  <div v-if="item.type === 'radio'">
    <template v-if="models">
      <el-radio-group
        :class="{ block: item.options.block }"
        :style="{ width: item.options.width }"
        v-model="models[item.param]"
        :disabled="item.options.disabled"
        :size="item.options.size"
      >
        <template v-if="item.options.style === 'normal'">
          <el-radio
            :label="radio.label"
            v-for="(radio, index) in item.items"
            :key="index"
            >{{ radio.value }}</el-radio
          >
        </template>
        <template v-if="item.options.style === 'button'">
          <el-radio-button
            :label="rItem.label"
            v-for="(rItem, index) in item.items"
            :key="index"
            >{{ rItem.value }}</el-radio-button
          >
        </template>
      </el-radio-group>
    </template>
    <template v-else>
      <el-radio-group
        :class="{ block: item.options.block }"
        :style="{ width: item.options.width }"
        v-model="item.options.defaultValue"
        :disabled="item.options.disabled"
        :size="item.options.size"
      >
        <template v-if="item.options.style === 'normal'">
          <el-radio
            :label="radio.label"
            v-for="(radio, index) in item.items"
            :key="index"
            >{{ radio.value }}</el-radio
          >
        </template>
        <template v-if="item.options.style === 'button'">
          <el-radio-button
            :label="rItem.label"
            v-for="(rItem, index) in item.items"
            :key="index"
            >{{ rItem.value }}</el-radio-button
          >
        </template>
      </el-radio-group>
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
