const defaultState = {
	bool: false,
	id:1
}

const reducerBoolStorage = (state = defaultState, action) => {
	switch (action.type) {
		case 'LOCAL_STORAGE':
			return action.payload
		default:
			return state;
	}
};

export default reducerBoolStorage;
