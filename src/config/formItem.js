import config from './form'
export default [
  {
    type: 'input',
    name: 'Input',
    param: '',
    options: {
      width: '100%',
      placeholder: '',
      defaultValue: '',
      required: false,
      dataType: 'string',
      pattern: '',
      disabled: false,
      visible: false,
      labelWidth: {
        custom: false,
        value: config.labelWidth
      },
      size: config.size
    }
  },
  {
    type: 'textarea',
    name: 'TextArea',
    param: '',
    options: {
      width: '100%',
      defaultValue: '',
      required: false,
      disabled: false,
      visible: false,
      pattern: '',
      placeholder: '',
      rows: '5',
      labelWidth: {
        custom: false,
        value: config.labelWidth
      },
      size: config.size
    }
  },
  {
    type: 'radio',
    name: '单选框组',
    param: '',
    options: {
      block: false,
      width: '',
      defaultValue: '',
      required: false,
      disabled: false,
      visible: false,
      style: 'normal',
      labelWidth: {
        custom: false,
        value: config.labelWidth
      },
      size: config.size
    },
    items: [
      {
        value: '选项1',
        label: '选项1'
      },
      {
        value: '选项2',
        label: '选项2'
      },
      {
        value: '选项3',
        label: '选项3'
      }
    ]
  },
  {
    type: 'checkbox',
    name: '多选框组',
    param: '',
    options: {
      block: false,
      width: '',
      defaultValue: [],
      required: false,
      disabled: false,
      visible: false,
      style: 'normal',
      labelWidth: {
        custom: false,
        value: config.labelWidth
      },
      size: config.size
    },
    items: [
      {
        value: '复选框 A',
        label: '00'
      },
      {
        value: '复选框 B',
        label: '01'
      },
      {
        value: '复选框 C',
        label: '02'
      },
      {
        value: '复选框 D',
        label: '03'
      }
    ]
  },
  {
    type: 'select',
    name: '选择器',
    param: '',
    options: {
      defaultValue: [],
      width: '',
      required: false,
      disabled: false,
      visible: false,
      labelWidth: {
        custom: false,
        value: config.labelWidth
      },
      size: config.size,
      multiple: false
    },
    items: [
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
  {
    type: 'number',
    name: '计数器',
    param: '',
    options: {
      param: '',
      defaultValue: 0,
      required: false,
      disabled: false,
      visible: false,
      min: 0,
      max: 100,
      step: 1,
      labelWidth: {
        custom: false,
        value: config.labelWidth
      },
      size: config.size
    }
  },
  {
    type: 'switch',
    name: '开关',
    param: '',
    options: {
      width: '100%',
      defaultValue: false,
      required: false,
      disabled: false,
      visible: false,
      labelWidth: {
        custom: false,
        value: config.labelWidth
      },
      size: config.size,
      activeText: '',
      InactiveText: ''
    }
  },
  {
    type: 'time',
    name: '时间选择器',
    param: '',
    options: {
      param: '',
      defaultValue: '',
      required: false,
      disabled: false,
      visible: false,
      placeholder: '',
      editable: true,
      clearable: true,
      startPlaceholder: '开始时间',
      endPlaceholder: '结束时间',
      isRange: false,
      type: 'select',
      selectOptions: {
        start: '09:00',
        end: '18:00',
        step: '00:30'
      },
      pikerOptions: {
        selectableRange: '',
        format: 'HH:mm:ss'
      },
      labelWidth: {
        custom: false,
        value: config.labelWidth
      },
      size: config.size
    }
  },
  {
    type: 'date',
    name: '日期选择器',
    param: '',
    options: {
      defaultValue: '',
      required: false,
      disabled: false,
      visible: false,
      placeholder: '',
      editable: true,
      clearable: true,
      startPlaceholder: '开始时间',
      endPlaceholder: '结束时间',
      type: 'date',
      format: 'yyyy-MM-dd',
      labelWidth: {
        custom: false,
        value: config.labelWidth
      },
      size: config.size
    }
  },
  {
    type: 'imgupload',
    name: '图片上传',
    param: '',
    options: {
      param: '',
      defaultValue: '',
      required: false,
      disabled: false,
      visible: false,
      placeholder: '',
      labelWidth: {
        custom: false,
        value: config.labelWidth
      },
      size: config.size,
      action: 'https://jsonplaceholder.typicode.com/posts/',
      multiple: false,
      accept: ''
    }
  }
]
