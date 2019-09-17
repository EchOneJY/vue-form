<template>
  <el-form
    class="f1-list"
    :label-position="config.labelPosition"
    :label-width="config.labelWidth + 'px'"
    :size="config.size"
  >
    <draggable
      class="form-box"
      element="ul"
      :list="selectedList"
      :group="{ name: 'f1-form' }"
      ghostClass="ghost"
      :swapThreshold="0.5"
      :animation="100"
      @add="handleAdd"
      handle=".drag-widget"
    >
      <li
        class="form-item"
        v-for="(item, index) in selectedList"
        :class="{ selected: item.key === select.key }"
        :key="item.key"
      >
        <el-form-item
          :class="{ hidden: item.options.visible }"
          :label="item.name"
          :label-width="
            item.options.labelWidth.custom
              ? item.options.labelWidth.value + 'px'
              : config.labelWidth + 'px'
          "
          @click.native.stop="handleSelect(index)"
          :required="item.options.required"
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
          <!-- SwitchItem -->
          <switch-item :item="item"></switch-item>
          <!-- SelectItem -->
          <select-item :item="item"></select-item>
          <!-- TimeItem -->
          <time-item :item="item"></time-item>
          <!-- DateItem -->
          <date-item :item="item"></date-item>
          <!-- ImguploadItem -->
          <imgupload-item :item="item"></imgupload-item>
        </el-form-item>
        <div class="form-item-action" v-if="item.key === select.key">
          <i
            class="el-icon-document-copy"
            @click.stop="handleClone(index)"
            title="复制"
          ></i>
          <i
            class="el-icon-delete"
            @click.stop="handleDelete(index)"
            title="删除"
          ></i>
        </div>

        <div class="form-item-drag" v-if="item.key === select.key">
          <i class="el-icon-rank drag-widget" title="拖拽"></i>
        </div>
      </li>
    </draggable>
  </el-form>
</template>

<script>
import draggable from 'vuedraggable'
import { mapState, mapMutations } from 'vuex'
import InputItem from '../f1-items/input'
import TextareaItem from '../f1-items/textarea'
import RadioItem from '../f1-items/radio'
import CheckboxItem from '../f1-items/checkbox'
import InputNumberItem from '../f1-items/number'
import SwitchItem from '../f1-items/switch'
import SelectItem from '../f1-items/select'
import TimeItem from '../f1-items/time'
import DateItem from '../f1-items/date'
import ImguploadItem from '../f1-items/imgupload'
export default {
  components: {
    draggable,
    InputItem,
    TextareaItem,
    RadioItem,
    CheckboxItem,
    InputNumberItem,
    SelectItem,
    TimeItem,
    DateItem,
    ImguploadItem,
    SwitchItem
  },
  props: ['select'],
  data() {
    return {}
  },
  computed: {
    ...mapState('formData', ['selectedList', 'config', 'setLabelWidth'])
  },
  methods: {
    ...mapMutations('formData', ['setFormData']),
    //添加到form-list
    handleAdd(evt) {
      const newIndex = evt.newIndex
      this.selectedList[newIndex] = this.handleData(this.selectedList[newIndex])
      this.setFormData(this.selectedList)
      this.$emit('update:select', this.selectedList[newIndex])
    },
    //选择form-item
    handleSelect(idx) {
      this.$emit('update:select', this.selectedList[idx])
    },
    //复制form-item
    handleClone(idx) {
      const cloneData = this.handleData(this.selectedList[idx])
      this.selectedList.splice(idx, 0, cloneData)
      this.setFormData(this.selectedList)
      this.$emit('update:select', this.selectedList[idx + 1])
    },
    //删除form-item
    handleDelete(idx) {
      if (idx === 0) {
        if (this.selectedList.length < 2) {
          this.$emit('update:select', {})
        } else {
          this.$emit('update:select', this.selectedList[idx + 1])
        }
      } else {
        this.$emit('update:select', this.selectedList[idx - 1])
      }
      this.selectedList.splice(idx, 1)
      this.setFormData(this.selectedList)
    },
    //处理数据
    handleData(obj) {
      const newObj = JSON.parse(JSON.stringify(obj))
      //为拖拽到容器的元素添加唯一 key
      const key =
        Date.parse(new Date()) + '_' + Math.ceil(Math.random() * 11111)
      newObj.key = key
      newObj.param = newObj.type + '_' + key
      // 特殊处理
      if (newObj.options.type === 'select') {
        newObj.options.defaultValue = newObj.options.multiple ? [] : ''
      }
      return newObj
    }
  }
}
</script>
