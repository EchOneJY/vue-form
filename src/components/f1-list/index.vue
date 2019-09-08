<template>
  <el-form
    class="f1-list"
    :label-position="config.labelPosition"
    :label-width="config.labelWidth + 'px'"
    :size="config.size"
  >
    <draggable
      class="form-box"
      element="div"
      :list="selectedList"
      :group="{ name: 'f1-form' }"
      ghostClass="ghost"
      :swapThreshold="0.5"
      :animation="100"
      @add="handleAdd"
      handle=".drag-widget"
    >
      <template v-for="(item, index) in selectedList">
        <el-form-item
          class="form-item"
          :class="{ selected: item.key === select.key }"
          :label="item.name"
          :label-width="item.options.labelWidth + 'px'"
          :key="item.key"
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
          <!-- SelectItem -->
          <select-item :item="item"></select-item>
          <div
            class="form-item-action"
            v-if="item.key === select.key"
          >
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
        </el-form-item>
      </template>
    </draggable>
  </el-form>
</template>

<script>
import draggable from 'vuedraggable'
import { mapState, mapMutations } from 'vuex'
import InputItem from './components/input'
import TextareaItem from './components/textarea'
import RadioItem from './components/radio'
import CheckboxItem from './components/checkbox'
import InputNumberItem from './components/number'
import SelectItem from './components/select'
export default {
  components: {
    // 调用组件
    draggable,
    InputItem,
    TextareaItem,
    RadioItem,
    CheckboxItem,
    InputNumberItem,
    SelectItem
  },
  props: ['select'],
  data() {
    return {}
  },
  computed: {
    ...mapState('formData', [
      'selectedList',
      'config',
      'setLabelWidth'
    ])
  },
  methods: {
    ...mapMutations('formData', [
      'setFormData',
      'toggleSetLabelWidth'
    ]),
    //添加到form-list
    handleAdd(evt) {
      const newIndex = evt.newIndex
      this.selectedList[newIndex] = this.handleData(
        this.selectedList[newIndex]
      )
      this.setFormData(this.selectedList)
      this.$emit('update:select', this.selectedList[newIndex])
    },
    //选择form-item
    handleSelect(idx) {
      this.$emit('update:select', this.selectedList[idx])
      this.toggleSetLabelWidth(false)
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
        this.$emit('update:select', {})
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
        Date.parse(new Date()) +
        '_' +
        Math.ceil(Math.random() * 11111)
      newObj.key = key
      return newObj
    }
  }
}
</script>
