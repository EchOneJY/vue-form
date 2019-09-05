export default [
  {
    type: 'input',
    name: 'Input',
    icon: 'icon-input',
    options: {
      width: '100%',
      defaultValue: '',
      required: false,
      dataType: 'string',
      pattern: '',
      placeholder: '',
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
    icon: 'icon-radio-active',
    options: {
      inline: false,
      defaultValue: '',
      showLabel: false,
      options: [
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
      ],
      required: false,
      width: '',
      remote: false,
      remoteOptions: [],
      props: {
        value: 'value',
        label: 'label'
      },
      remoteFunc: '',
      disabled: false
    }
  },
  {
    type: 'checkbox',
    name: '多选框组',
    icon: 'icon-check-box',
    options: {
      inline: false,
      defaultValue: [],
      showLabel: false,
      options: [
        {
          value: '选项1'
        },
        {
          value: '选项2'
        },
        {
          value: '选项3'
        }
      ],
      required: false,
      width: '',
      remote: false,
      remoteOptions: [],
      props: {
        value: 'value',
        label: 'label'
      },
      remoteFunc: '',
      disabled: false
    }
  },
  {
    type: 'time',
    name: '时间选择器',
    icon: 'icon-time',
    options: {
      defaultValue: '21:19:56',
      readonly: false,
      disabled: false,
      editable: true,
      clearable: true,
      placeholder: '',
      startPlaceholder: '',
      endPlaceholder: '',
      isRange: false,
      arrowControl: true,
      format: 'HH:mm:ss',
      required: false,
      width: ''
    }
  },
  {
    type: 'date',
    name: '日期选择器',
    icon: 'icon-date',
    options: {
      defaultValue: '',
      readonly: false,
      disabled: false,
      editable: true,
      clearable: true,
      placeholder: '',
      startPlaceholder: '',
      endPlaceholder: '',
      type: 'date',
      format: 'yyyy-MM-dd',
      timestamp: false,
      required: false,
      width: ''
    }
  }
]
