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
		.then(() => redirect_callback());

	return {
		type: actionTypes.CREATE_POST,
		payload: request
	};
}

export function fetchPost(id){
	const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

	return {
		type: actionTypes.FETCH_POST,
		payload: request
	};
}

export function deletePost(id, redirect_callback){
	const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
		.then(() => redirect_callback())

	return {
		type: actionTypes.DELETE_POST,
		payload: id
	};
}