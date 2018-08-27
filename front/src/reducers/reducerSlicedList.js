function getSlicedList(action) {
	return action.list.slice(action.debut, action.fin)
}

const reducerSlicedList = (state = [], action) => {
	switch (action.type) {
		case 'LIST_SLICED':
			return getSlicedList(action.payload)
		default:
			return state;
	}
};

export default reducerSlicedList;
