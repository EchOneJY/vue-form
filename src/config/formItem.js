import config from './form'
export default [
  {
    type: 'input',
    name: 'Input',
    options: {
      param: '',
      width: '100%',
      placeholder: '',
      defaultValue: '',
      required: false,
      dataType: 'string',
      pattern: '',
      disabled: false,
      labelWidth: config.labelWidth
    }
  },
  {
    type: 'textarea',
    name: 'TextArea',
    options: {
      width: '100%',
      defaultValue: '',
      required: false,
      disabled: false,
      pattern: '',
      placeholder: '',
      rows: '5',
      labelWidth: config.labelWidth
    }
  },
  {
    type: 'radio',
    name: '单选框组',
    options: {
      block: false,
      radioDefaultValue: '',
      required: false,
      disabled: false,
      style: 'normal',
      labelWidth: config.labelWidth
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
    options: {
      block: false,
      checkboxDefaultValue: [],
      required: false,
      disabled: false,
      style: 'normal',
      labelWidth: config.labelWidth
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
    type: 'time',
    name: '时间选择器',
    icon: 'icon-time'
  },
  {
    type: 'date',
    name: '日期选择器',
    icon: 'icon-date'
  }
]
