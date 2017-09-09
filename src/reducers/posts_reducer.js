import * as actionTypes from '../actions/actionTypes';
import _ from 'lodash';

export default function(state = {}, action){
	switch(action.type){
		case actionTypes.FETCH_POSTS:
			return _.mapKeys(action.payload.data, 'id')
		default:
			return state;
	}
}