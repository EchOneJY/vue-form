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
        v-if="
          data.options.hasOwnProperty('defaultValue') &&
            (data.type === 'input' ||
              data.type === 'textarea' ||
              data.type === 'number')
        "
      >
        <el-input
          v-if="data.type === 'input'"
          v-model="data.options.defaultValue"
        ></el-input>
        <el-input
          v-if="data.type === 'textarea'"
          type="textarea"
          :rows="4"
          v-model="data.options.defaultValue"
        ></el-input>
        <el-input-number
          v-if="data.type === 'number'"
          v-model="data.options.defaultValue"
        ></el-input-number>
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
      <!-- rows -->
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
      <!-- multiple -->
      <el-form-item
        label="多选"
        v-if="data.options.hasOwnProperty('multiple')"
      >
        <el-switch
          v-model="data.options.multiple"
          @change="toggleDefaultValue"
        ></el-switch>
      </el-form-item>
      <!-- 选项 -->
      <el-form-item label="选项" v-if="data.hasOwnProperty('items')">
        <!-- radio -->
        <el-radio-group
          class="block"
          v-if="
            data.type === 'radio' ||
              (data.type === 'select' && !data.options.multiple)
          "
          v-model="data.options.defaultValue"
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
          v-if="
            data.type === 'checkbox' ||
              (data.type === 'select' && data.options.multiple)
          "
          v-model="data.options.defaultValue"
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
        <el-checkbox v-model="data.options.labelWidth.custom"
          >自定义</el-checkbox
        >
        <el-input-number
          class="label-width"
          :disabled="!data.options.labelWidth.custom"
          v-model="data.options.labelWidth.value"
          :step="10"
        ></el-input-number>
      </el-form-item>
      <!-- 字段宽度 -->
      <el-form-item
        label="宽度"
        v-if="data.options.hasOwnProperty('width')"
      >
        <el-input v-model="data.options.width"></el-input>
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
        <el-checkbox
          v-model="data.options.required"
          @change="validateRequired"
          >必填</el-checkbox
        >
        <el-input
          class="f1-pattern"
          v-model="data.options.pattern"
          placeholder="无需加双斜杠"
          v-if="data.options.hasOwnProperty('pattern')"
          @blur="validatePattern"
        >
          <template slot="prepend"
            >正则</template
          >
        </el-input>
        <el-select
          class="type-select"
          v-model="data.options.dataType"
          placeholder="数据类型"
          v-if="data.options.hasOwnProperty('dataType')"
          @change="validateDataType"
        >
          <el-option
            v-for="item in dataTypeOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
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
          label: '无',
          value: ''
        },
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
      radioStyles: ['normal', 'button'],
      validator: {
        type: null,
        required: null,
        pattern: null
      }
    }
  },
  watch: {
    'data.key': function(val) {
      if (val) {
        this.validator = {
          type: null,
          required: null,
          pattern: null
        }
        if (this.data.options.hasOwnProperty('dataType')) {
          this.validateDataType(this.data.options.dataType)
        }
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
    },
    toggleDefaultValue(state) {
      this.data.options.defaultValue = state ? [] : ''
      this.data.items = [
        {
          value: '选项1',
          label: '00'
        },
        {
          value: '选项2',
          label: '01'
        },
        {
          value: '选项3',
          label: '02'
        }
      ]
    },
    //添加rules
    addRules() {
      this.data.rules = []
      Object.keys(this.validator).map(key => {
        if (this.validator[key]) {
          this.data.rules.push(this.validator[key])
        }
      })
    },
    //必填校验
    validateRequired(val) {
      console.log(val)
      if (val) {
        this.validator.required = {
          required: true,
          message: `${this.data.name}必须填写`
        }
      } else {
        this.validator.required = null
      }

      this.$nextTick(() => {
        this.addRules()
      })
    },
    //正则校验
    validatePattern(val) {
      console.log(val)
      if (val) {
        this.validator.pattern = {
          pattern: val,
          message: this.data.name + '格式不匹配'
        }
      } else {
        this.validator.pattern = null
      }
      this.$nextTick(() => {
        this.addRules()
      })
    },
    //数据类型校验
    validateDataType(val) {
      if (val) {
        this.validator.type = {
          type: val,
          message: this.data.name + '格式不正确'
        }
      } else {
        this.validator.type = null
      }
      this.$nextTick(() => {
        this.addRules()
      })
    }
  }
}
</script>
