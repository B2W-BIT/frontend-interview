import alt from '../alt';
import TwitterActions from '../actions/Twitter.js';

@alt.createStore
export default class TwitterStore {
	constructor() {
		this.bindListeners({
			getTimeline: TwitterActions.GET_TIMELINE,
			getUserInfo: TwitterActions.GET_USER_INFO
		});
	}

	getTimeline(payload) {
		this.tweets = payload;
	}

	getUserInfo(payload) {
		this.user = payload;
	}

}