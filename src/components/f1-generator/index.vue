<template>
  <el-dialog class="f1-generator" :visible.sync="dialogVisible">
    <el-form
      :style="{ width: config.width }"
      :model="models"
      :rules="rules"
      :label-width="config.labelWidth + 'px'"
      :label-position="config.labelPosition"
      :size="config.size"
    >
      <el-form-item
        :label="item.name"
        :prop="item.param"
        v-for="(item, index) in this.selectedList"
        :key="item.type + index"
        :required="item.options.required"
        :label-width="
          item.options.labelWidth.custom
            ? item.options.labelWidth.value + 'px'
            : config.labelWidth + 'px'
        "
      >
        <!-- Input -->
        <input-item :item="item" :models="models"></input-item>
        <!-- TextArea -->
        <textarea-item :item="item" :models="models"></textarea-item>
        <!-- Radio -->
        <radio-item :item="item" :models="models"></radio-item>
        <!-- CheckboxItem -->
        <checkbox-item :item="item" :models="models"></checkbox-item>
        <!-- InputNumber -->
        <input-number-item
          :item="item"
          :models="models"
        ></input-number-item>
        <!-- SelectItem -->
        <select-item :item="item" :models="models"></select-item>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
import { mapState } from 'vuex'
import InputItem from '../f1-items/input'
import TextareaItem from '../f1-items/textarea'
import RadioItem from '../f1-items/radio'
import CheckboxItem from '../f1-items/checkbox'
import InputNumberItem from '../f1-items/number'
import SelectItem from '../f1-items/select'
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
      } else {
        this.createFormData()
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
  },
  methods: {
    createFormData() {
      if (this.selectedList.length > 0) {
        this.selectedList.map(item => {
          this.$set(
            this.models,
            item.param,
            item.options.defaultValue
          )
          if (item.hasOwnProperty('rules') && item.rules.length > 0) {
            this.rules[item.param] = item.rules
          }
        })
      }
    },
    toggleChange(e) {
      console.log(1)
      console.log(e)
    }
  }
}
</script>
