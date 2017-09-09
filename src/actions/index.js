import * as actionTypes from './actionTypes'
import axios from 'axios';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
const API_KEY = '?key=randomkeygoeshere'

export function fetchPosts(){
	const request = axios.request(`${ROOT_URL}/posts${API_KEY}`);

	return {
		type: actionTypes.FETCH_POSTS,
		payload: request
	};
}