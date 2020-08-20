const initialState = {
	userData: null
};

function rootReducer(state = initialState, action) {
	if (action.type === 'logout') {
		return initialState;
	} else if (action.type === 'login') {
		return Object.assign({}, state, {
			userData: action.payload,
		});
	}
	return state;
}

export default rootReducer;
