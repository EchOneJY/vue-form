export default {
  namespaced: true,
  state: {
    //state
    formData: {
      list: []
    }
  },
  mutations: {
    setFormData(state, val) {
      state.formData = val
    }
  }
}
