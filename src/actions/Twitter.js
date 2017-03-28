import alt from '../alt.js';
import xhr from '../utils/xhr.js';

@alt.createActions
export default class TwitterActions {
	getTimeline(max_id = '') {
		if(max_id)
			max_id = '&max_id=' + max_id;

		return dispatch => {
			xhr('statuses/user_timeline.json?screen_name=americanascom' + max_id, dispatch);
		};
	}

	getUserInfo() {
		return dispatch => {
			xhr('users/show.json?screen_name=americanascom', dispatch);
		};
	}

}