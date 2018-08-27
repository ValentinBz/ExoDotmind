const reducerTotalList = (state = [], action) => {
	switch (action.type) {
		case 'GET_INFO_FROM_API_SUCCESS':
			return action.payload;
		case 'GET_INFO_FROM_API_FAILURE':
			return state;
		default:
			return state;
	}
};

export default reducerTotalList;
