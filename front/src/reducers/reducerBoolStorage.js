const reducerBoolStorage = (state = {}, action) => {
	switch (action.type) {
		case 'LOCAL_STORAGE':
			return action.payload
		default:
			return state;
	}
};

export default reducerBoolStorage;
