export default {
  namespaced: true,
  state: {
    selectedList: [],
    config: {
      labelPosition: 'left',
      size: 'small',
      labelWidth: '80'
    }
  },
  mutations: {
    setFormData(state, val) {
      state.selectedList = val
    },
    setConfig(state, val) {
      state.config = val
    }
  }
}
