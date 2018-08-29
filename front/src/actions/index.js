// @flow

import {
	GET_TOTAL_LIST_REQUEST,
	GET_INFO_FROM_API_REQUEST,
	LIST_SLICED,
	LOCAL_STORAGE,
} from '../constants/actions';

export function getTotalList() {
	return { type: GET_TOTAL_LIST_REQUEST }
};

export function getId(id:number) {
	return { type: GET_INFO_FROM_API_REQUEST, payload: {id: id} }
};

export function slicedList(list: Object, debut: number, fin: number) {
	return { type: LIST_SLICED, payload: { list, debut, fin } }
};

export function getLocalStorage(bool: boolean, id: number) {
	return { type: LOCAL_STORAGE, payload: { bool: bool, id: id } }
}
