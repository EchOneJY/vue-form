export default {
  namespaced: true,
  state: {
    //state
    selectedFormData: []
  },
  mutations: {
    setFormData(state, val) {
      state.selectedFormData = val
    }
  }
}
