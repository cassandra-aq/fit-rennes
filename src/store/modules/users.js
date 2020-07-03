export default {
	state: {
		user: null
	},
	getters: {
		user: (state) => {
			return state.user;
		}
	},
	mutations: {
		updateUser(state, payload) {
			state.user = payload;
		},
		updateUserDay(state, payload) {
			const todayDateTime = new Date();
			const today = todayDateTime.getYear() + "-" + (todayDateTime.getMonth() + 1) + "-" + todayDateTime.getDate()
			const day = state.user.days.filter(day => day.date === today)
			if(day) {
				state.user.days[day.id] = payload;
			}
		}
	},
	actions: {
		updateUser({ commit }, payload) {
			commit('updateUser', payload);
		}
	}
};
