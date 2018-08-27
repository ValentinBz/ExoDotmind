import { combineReducers } from 'redux';
import reducerTotalList from './reducerTotalList';
import reducerDetailsId from './reducerDetailsId';
import reducerHistory from './reducerHistory';
import reducerSlicedList from './reducerSlicedList';
import reducerBoolStorage from './reducerBoolStorage';

const rootReducer = combineReducers({
	DetailsId:reducerDetailsId,
	HistoryTab:reducerHistory,
	SlicedList: reducerSlicedList,
	BoolStorage: reducerBoolStorage,
	TotalList:reducerTotalList,
});

export default rootReducer;
