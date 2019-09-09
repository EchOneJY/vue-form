<template>
  <div class="f1-config">
    <el-form label-position="top" size="small">
      <el-form-item label="对齐方式">
        <el-radio-group
          v-model="config.labelPosition"
          @change="toggleLabelPosition"
        >
          <el-radio-button label="left">左对齐</el-radio-button>
          <el-radio-button label="right">右对齐</el-radio-button>
          <el-radio-button label="top">顶部对齐</el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="表单宽度">
        <el-input
          class="form-width"
          v-model="config.width"
        ></el-input>
      </el-form-item>
      <el-form-item label="标签宽度">
        <el-input-number
          v-model="config.labelWidth"
          :step="10"
        ></el-input-number>
      </el-form-item>
      <el-form-item label="表单尺寸">
        <el-radio-group v-model="config.size" @change="toggleSize">
          <el-radio-button label="mini">mini</el-radio-button>
          <el-radio-button label="small">small</el-radio-button>
          <el-radio-button label="medium">medium</el-radio-button>
        </el-radio-group>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapState('formData', ['config'])
  },
  methods: {
    ...mapMutations('formData', ['setConfig']),
    toggleLabelPosition(labelPosition) {
      this.setConfig({ ...this.config, labelPosition })
    },
    toggleSize(size) {
      this.setConfig({ ...this.config, size })
    }
  }
}
</script>
