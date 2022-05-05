import axios from "axios";

const state = () => ({
    loginApiStatus: "",
  });
   
  const getters = {
    getLoginApiStatus(state) {
      return state.loginApiStatus;
    },
  };
   
  const actions = {
    async loginApi({ commit }, payload) {
      const response = await axios
        .post("http://localhost:8080/login", 
        payload,{withCredentials: true, credentials: 'include'})
        .catch((err) => {
          console.log(err);
        });
   
      if (response && response.data) {
        commit("setLoginApiStatus", "success");
      } else {
        commit("setLoginApiStatus", "failed");
      }
    },
  };
   
  const mutations = {
    setLoginApiStatus(state, data) {
      state.loginApiStatus = data;
    },
  };
   
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
  };