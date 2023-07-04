export default {
  state: {
    userInfo: {
      test:"yok tes"
    },
  },
  getters: {},
  actions: {
    async getUserInfo({ commit }) {
      const response = await fetch('https://api.example.com/userinfo');
      const data = await response.json();

      commit('setUserInfo', data);
    },
  },
  mutations: {
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    },
  },
};