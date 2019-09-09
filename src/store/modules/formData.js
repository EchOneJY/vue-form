import config from '@/config/form'
export default {
  namespaced: true,
  state: {
    selectedList: [],
    config
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
