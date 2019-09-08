<template>
  <div class="f1-config" v-if="Object.keys(data).length > 0">
    <el-form label-position="top" size="small">
      <!-- 参数名 -->
      <el-form-item label="参数名">
        <el-input v-model="data.param"></el-input>
      </el-form-item>
      <!-- 标签名 -->
      <el-form-item label="标签名" v-if="data.hasOwnProperty('name')">
        <el-input v-model="data.name"></el-input>
      </el-form-item>
      <!-- 默认值 -->
      <el-form-item
        label="默认值"
        v-if="data.options.hasOwnProperty('defaultValue')"
      >
        <el-input v-model="data.options.defaultValue"></el-input>
      </el-form-item>
      <!-- 最小 -->
      <el-form-item
        label="min"
        v-if="data.options.hasOwnProperty('min')"
      >
        <el-input-number v-model="data.options.min"></el-input-number>
      </el-form-item>
      <!-- 最大 -->
      <el-form-item
        label="max"
        v-if="data.options.hasOwnProperty('max')"
      >
        <el-input-number v-model="data.options.max"></el-input-number>
      </el-form-item>
      <!-- 最大 -->
      <el-form-item
        label="step"
        v-if="data.options.hasOwnProperty('step')"
      >
        <el-input-number
          v-model="data.options.step"
        ></el-input-number>
      </el-form-item>
      <!-- 宽度 -->
      <el-form-item
        label="宽度"
        v-if="data.options.hasOwnProperty('width')"
      >
        <el-input v-model="data.options.width"></el-input>
      </el-form-item>
      <el-form-item
        label="rows"
        v-if="data.options.hasOwnProperty('rows')"
      >
        <el-input-number
          v-model="data.options.rows"
        ></el-input-number>
      </el-form-item>
      <!-- placeholder -->
      <el-form-item
        label="placeholder"
        v-if="data.options.hasOwnProperty('placeholder')"
      >
        <el-input v-model="data.options.placeholder"></el-input>
      </el-form-item>
      <!-- 选项 -->
      <el-form-item label="选项" v-if="data.hasOwnProperty('items')">
        <!-- radio -->
        <el-radio-group
          class="block"
          v-if="data.type === 'radio'"
          v-model="data.options.radioDefaultValue"
        >
          <li
            v-for="(rItem, index) in data.items"
            :key="rItem.label + index"
          >
            <el-radio :label="rItem.label">
              <el-input v-model="rItem.value"></el-input>
            </el-radio>
            <i
              class="el-icon-delete"
              @click="deleteOption(index)"
              title="删除"
            ></i>
          </li>
        </el-radio-group>
        <!-- checkbox -->
        <el-checkbox-group
          class="block"
          v-if="data.type === 'checkbox'"
          v-model="data.options.checkboxDefaultValue"
          :disabled="data.options.disabled"
        >
          <li
            v-for="(cItem, index) in data.items"
            :key="cItem.label + index"
          >
            <el-checkbox :label="cItem.label">
              <el-input v-model="cItem.value"></el-input>
            </el-checkbox>
            <i
              class="el-icon-delete"
              @click="deleteOption(index)"
              title="删除"
            ></i>
          </li>
        </el-checkbox-group>
        <!-- select -->
        <el-checkbox-group
          class="block"
          v-if="data.type === 'select'"
          v-model="data.options.selectDefaultValue"
          :disabled="data.options.disabled"
        >
          <li
            v-for="(sItem, index) in data.items"
            :key="sItem.value + index"
          >
            <el-checkbox :label="sItem.value">
              <el-input v-model="sItem.label"></el-input>
            </el-checkbox>
            <i
              class="el-icon-delete"
              @click="deleteOption(index)"
              title="删除"
            ></i>
          </li>
        </el-checkbox-group>
        <el-button type="text" @click="addOption">新增选项</el-button>
      </el-form-item>
      <!-- 样式 -->
      <el-form-item
        label="样式"
        v-if="data.options.hasOwnProperty('style')"
      >
        <el-select v-model="data.options.style" placeholder="请选择">
          <el-option
            v-for="item in radioStyles"
            :key="item"
            :label="item"
            :value="item"
          ></el-option>
        </el-select>
      </el-form-item>
      <!-- display -->
      <el-form-item
        label="布局"
        v-if="
          data.options.hasOwnProperty('block') &&
            data.options.style === 'normal'
        "
      >
        <el-radio-group v-model="data.options.block">
          <el-radio-button :label="false">inline</el-radio-button>
          <el-radio-button :label="true">block</el-radio-button>
        </el-radio-group>
      </el-form-item>
      <!-- 标签宽度 -->
      <el-form-item
        label="标签宽度"
        v-if="data.options.hasOwnProperty('labelWidth')"
      >
        <el-checkbox v-model="setLabelWidth">自定义</el-checkbox>
        <el-input-number
          class="label-width"
          :disabled="!setLabelWidth"
          v-model="data.options.labelWidth"
          :step="10"
        ></el-input-number>
      </el-form-item>
      <!-- 字段尺寸 -->
      <el-form-item label="字段尺寸">
        <el-radio-group v-model="data.options.size" size="small">
          <el-radio-button label="mini">mini</el-radio-button>
          <el-radio-button label="small">small</el-radio-button>
          <el-radio-button label="medium">medium</el-radio-button>
        </el-radio-group>
      </el-form-item>
      <!-- 禁用 -->
      <el-form-item
        label="操作"
        v-if="data.options.hasOwnProperty('disabled')"
      >
        <el-checkbox v-model="data.options.disabled"
          >禁用</el-checkbox
        >
      </el-form-item>
      <!-- 校验 -->
      <el-form-item
        label="校验"
        v-if="data.options.hasOwnProperty('required')"
      >
        <el-checkbox v-model="data.options.required"
          >必填</el-checkbox
        >
        <el-select
          v-model="data.options.dataType"
          placeholder="请选择"
          v-if="data.options.hasOwnProperty('dataType')"
        >
          <el-option
            v-for="item in dataTypeOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <el-input
          class="f1-pattern"
          v-model="data.options.pattern"
          placeholder="正则"
          v-if="data.options.hasOwnProperty('pattern')"
        ></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: ['data'],
  data() {
    return {
      dataTypeOptions: [
        {
          label: '字符串',
          value: 'string'
        },
        {
          label: '布尔值',
          value: 'boolean'
        },
        {
          label: '数字',
          value: 'number'
        },
        {
          label: '整数',
          value: 'integer'
        },
        {
          label: '浮点',
          value: 'float'
        },
        {
          label: '邮箱',
          value: 'email'
        }
      ],
      radioStyles: ['normal', 'button']
    }
  },
  computed: {
    setLabelWidth: {
      get() {
        return this.$store.state.formData.setLabelWidth
      },
      set(val) {
        this.$store.state.formData.setLabelWidth = val
      }
    }
  },
  methods: {
    addOption() {
      this.data.items.push({
        value: '新选项',
        label: '新选项'
      })
    },
    deleteOption(idx) {
      this.data.items.splice(idx, 1)
    }
  }
}
</script>
