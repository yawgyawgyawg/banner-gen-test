import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';


export default createStore({
    state() {
        return {
            banners: {
                mobile: {},
                pc: {}
            }
            // 상태 정의
        };
    },
    mutations: {
        updateBannerState(state, { type, data }) {
            state.banners[type] = { ...state.banners[type], ...data };
        }
    },
    actions: {
        async saveBannerState({ commit }, { type, data }) {
            commit('updateBannerState', { type, data });
        }
    },
    getters: {
        getBannerState: (state) => (type) => {
            return state.banners[type];
        }
    },
    plugins: [createPersistedState({
        storage: window.localStorage,
    })],
});