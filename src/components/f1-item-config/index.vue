<template>
  <div class="f1-config" v-if="Object.keys(this.data).length > 0">
    <el-form label-position="top" size="small">
      <el-form-item label="参数名">
        <el-input v-model="data.param"></el-input>
      </el-form-item>
      <el-form-item
        label="标签名"
        v-if="this.data.hasOwnProperty('name')"
      >
        <el-input v-model="data.name"></el-input>
      </el-form-item>
      <el-form-item
        label="默认值"
        v-if="this.data.options.hasOwnProperty('defaultValue')"
      >
        <el-input v-model="data.options.defaultValue"></el-input>
      </el-form-item>
      <el-form-item
        label="宽度"
        v-if="this.data.options.hasOwnProperty('width')"
      >
        <el-input v-model="data.options.width"></el-input>
      </el-form-item>
      <el-form-item
        label="placeholder"
        v-if="this.data.options.hasOwnProperty('placeholder')"
      >
        <el-input v-model="data.options.placeholder"></el-input>
      </el-form-item>
      <!-- <el-form-item
        label="标签宽度"
        v-if="this.data.options.hasOwnProperty('setLabelWidth')"
      >
        <el-checkbox v-model="setLabelWidth">自定义</el-checkbox>
        <el-input-number
          class="label-width"
          :disabled="!setLabelWidth"
          v-model="data.options.labelWidth"
          :step="10"
        ></el-input-number>
      </el-form-item>-->
      <el-form-item
        label="disabled"
        v-if="this.data.options.hasOwnProperty('disabled')"
      >
        <el-checkbox v-model="data.options.disabled"
          >禁用</el-checkbox
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: ['data'],
  data() {
    return {
      setLabelWidth: false
    }
  }
}
</script>
