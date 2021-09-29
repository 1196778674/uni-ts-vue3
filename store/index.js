// 引入
import { createStore } from "vuex";

export default createStore({
  state: {
	  system: null
  },
  mutations: {
	  setSystem: (state, data) => {
		  state.system = data
	  }
  },
  actions: {},
  modules: {},
});