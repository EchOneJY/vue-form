import config from '@/config/form'
export default {
  namespaced: true,
  state: {
    selectedList: [],
    config,
    setLabelWidth: false //自定义修改字段labelWidth状态
  },
  mutations: {
    setFormData(state, val) {
      state.selectedList = val
    },
    setConfig(state, val) {
      state.config = val
    },
    toggleSetLabelWidth(state, val) {
      state.setLabelWidth = val
    }
  }
}
