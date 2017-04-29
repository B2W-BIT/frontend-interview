import { INSERT_POST } from './timelineType';
import { APITWITTER } from '../config';
import axios from 'axios';

export function addPost(textPost) {
    return {
        type: INSERT_POST,
        text: textPost
    }
}

export function getTweets(){
    return dispatch => {
        return axios.get(APITWITTER + '/tweets');
    }
}

export function getBio(){
    return dispatch => {
        return axios.get(APITWITTER + '/bio');
    }
}

export function getSeguidores(){
    return dispatch => {
        return axios.get(APITWITTER + '/seguidores');
    }
}

export function getSeguindo(){
    return dispatch => {
        return axios.get(APITWITTER + '/seguindo');
    }
}

export function fotoCapa(){
    return dispatch => {
        return axios.get(APITWITTER + '/fotoCapa');
    }
}
