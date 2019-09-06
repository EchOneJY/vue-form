export default [
  {
    type: 'input',
    name: 'Input',
    icon: 'icon-input',
    options: {
      param: '',
      width: '100%',
      placeholder: '',
      defaultValue: '',
      required: false,
      dataType: 'string',
      pattern: '',
      disabled: false
    }
  },
  {
    type: 'textarea',
    name: 'TextArea',
    icon: 'icon-diy-com-textarea',
    options: {
      width: '100%',
      defaultValue: '',
      required: false,
      disabled: false,
      pattern: '',
      placeholder: ''
    }
  },
  {
    type: 'radio',
    name: '单选框组',
    icon: 'icon-radio-active'
  },
  {
    type: 'checkbox',
    name: '多选框组',
    icon: 'icon-check-box'
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
