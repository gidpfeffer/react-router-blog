import * as actionTypes from './actionTypes'
import axios from 'axios';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
const API_KEY = '?key=randomkeygoeshere'

export function fetchPosts(){
	const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

	return {
		type: actionTypes.FETCH_POSTS,
		payload: request
	};
}

export function createPost(values, redirect_callback){
	const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
		.then(() => redirect_callback())

	return {
		type: actionTypes.CREATE_POST,
		payload: request
	};
}