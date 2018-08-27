import {
	GET_TOTAL_LIST_REQUEST,
	GET_INFO_FROM_API_REQUEST,
	LIST_SLICED,
	LOCAL_STORAGE,
} from '../constants/actions';

export function getTotalList() {
	return { type: GET_TOTAL_LIST_REQUEST }
};

export function getId(obj) {
	return { type: GET_INFO_FROM_API_REQUEST, payload: obj }
};

export function slicedList(list, debut, fin) {
	return { type: LIST_SLICED, payload: { list, debut, fin } }
};

export function getLocalStorage(bool, id) {
	return { type: LOCAL_STORAGE, payload: { bool: bool, id: id } }
}
