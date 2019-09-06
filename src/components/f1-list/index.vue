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
          :key="item.key"
          @click.native.stop="handleSelect(index)"
        >
          <!-- Input -->
          <input-item :item="item"></input-item>
          <!-- TextArea -->
          <textarea-item :item="item"></textarea-item>

          <div
            class="form-item-action"
            v-if="item.key === select.key"
          >
            <i
              class="el-icon-document-copy"
              @click.stop="handleClone(index)"
            ></i>
            <i
              class="el-icon-delete"
              @click.stop="handleDelete(index)"
            ></i>
          </div>

          <div class="form-item-drag" v-if="item.key === select.key">
            <i class="el-icon-rank drag-widget"></i>
          </div>
        </el-form-item>
      </template>
    </draggable>
  </el-form>
</template>

<script>
import draggable from 'vuedraggable'
import { mapState, mapMutations } from 'vuex'
import InputItem from './input'
import TextareaItem from './textarea'
export default {
  components: {
    // 调用组件
    draggable,
    InputItem,
    TextareaItem
  },
  props: ['select'],
  data() {
    return {}
  },
  computed: {
    ...mapState('formData', ['selectedList', 'config'])
  },
  methods: {
    ...mapMutations('formData', ['setFormData']),
    //添加到form-list
    handleAdd(evt) {
      const newIndex = evt.newIndex
      //为拖拽到容器的元素添加唯一 key
      const key =
        Date.parse(new Date()) +
        '_' +
        Math.ceil(Math.random() * 11111)
      const newFormData = JSON.parse(
        JSON.stringify(this.selectedList)
      )
      newFormData[newIndex].key = key
      this.setFormData(newFormData)
      this.$emit('update:select', newFormData[newIndex])
    },
    //选择form-item
    handleSelect(idx) {
      this.$emit('update:select', this.selectedList[idx])
    },
    //复制form-item
    handleClone(idx) {
      let newFormData = JSON.parse(JSON.stringify(this.selectedList))
      const key =
        Date.parse(new Date()) +
        '_' +
        Math.ceil(Math.random() * 11111)
      const cloneData = { ...newFormData[idx], key }
      newFormData.splice(idx, 0, cloneData)
      this.setFormData(newFormData)
      this.$emit('update:select', newFormData[idx + 1])
    },
    //删除form-item
    handleDelete(idx) {
      if (idx === 0) {
        this.$emit('update:select', {})
      } else {
        this.$emit('update:select', this.selectedList[idx - 1])
      }

      let newFormData = JSON.parse(JSON.stringify(this.selectedList))
      newFormData.splice(idx, 1)
      this.setFormData(newFormData)
    }
  }
}
</script>
