import { combineReducers } from 'redux';
import reducerTotalList from './reducerTotalList';
import reducerDetailsId from './reducerDetailsId';
import reducerHist from './reducerHist';
import reducerSlicedList from './reducerSlicedList';

const rootReducer = combineReducers({
	TotalList:reducerTotalList,
	DetailsId:reducerDetailsId,
	Hist:reducerHist,
	SlicedList: reducerSlicedList
});

export default rootReducer;
