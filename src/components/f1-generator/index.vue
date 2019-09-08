<template>
  <el-dialog :visible.sync="dialogVisible">
    <el-form
      :model="models"
      :rules="rules"
      :label-width="config.labelWidth + 'px'"
      :label-position="config.labelPosition"
      :size="config.size"
    >
      <el-form-item
        :label="item.name"
        v-for="(item, index) in this.selectedList"
        :key="item.name + index"
      >
        <!-- Input -->
        <input-item :item="item"></input-item>
        <!-- TextArea -->
        <textarea-item :item="item"></textarea-item>
        <!-- Radio -->
        <radio-item :item="item"></radio-item>
        <!-- CheckboxItem -->
        <checkbox-item :item="item"></checkbox-item>
        <!-- InputNumber -->
        <input-number-item :item="item"></input-number-item>
        <!-- SelectItem -->
        <select-item :item="item"></select-item>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
import { mapState } from 'vuex'
import InputItem from '../f1-list/components/input'
import TextareaItem from '../f1-list/components/textarea'
import RadioItem from '../f1-list/components/radio'
import CheckboxItem from '../f1-list/components/checkbox'
import InputNumberItem from '../f1-list/components/number'
import SelectItem from '../f1-list/components/select'
export default {
  props: ['visible'],
  components: {
    // 调用组件
    InputItem,
    TextareaItem,
    RadioItem,
    CheckboxItem,
    InputNumberItem,
    SelectItem
  },
  watch: {
    visible(val) {
      this.dialogVisible = val
    },
    dialogVisible(val) {
      if (!val) {
        this.$emit('close')
      }
    }
  },
  data() {
    return {
      dialogVisible: this.visible,
      models: {},
      rules: {}
    }
  },
  computed: {
    ...mapState('formData', ['selectedList', 'config'])
  }
}
</script>
