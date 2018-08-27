function makeTab(state, action) {
	let newItem = true;
	let newList = state;
	newList.find(x => {if(x.id === action.payload.id) newItem = false});
	if (newItem) newList.push(action.payload);
	console.log('typeof newlist: ', typeof newList)
	return newList
}

const reducerHist = (state = [], action) => {
	switch (action.type) {
		case 'GET_INFO_FROM_API_SUCCESS':
			return makeTab(state, action);
		case 'GET_INFO_FROM_API_FAILURE':
			return state;
		default:
			return state;
	}
};

export default reducerHist;
