const reducerTotalList = (state = [], action) => {
	switch (action.type) {
		case 'GET_TOTAL_LIST_SUCCESS':
			return action.payload;
		case 'GET_TOTAL_LIST_FAILURE':
			return state;
		default:
			return state;
	}
};

export default reducerTotalList;
