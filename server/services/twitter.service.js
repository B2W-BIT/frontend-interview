import Twitter from 'twitter'

function TwitterService (){

    this.client = new Twitter({
        bearer_token: process.env.TWITTER_BEARER_TOKEN
    })

    const defaultCallbackFactory = (resolve, reject) => {
        console.log("defaultCallbackFactory is being triggered")
        return (err, resp, raw) => {
            if (err) {
                console.log("is rejecting")
                reject(err)
            }
            resolve(resp, raw)
        }
    }

    return {
        getUserData: screen_name => {
            return new Promise((resolve, reject) => {
                this.client.get('/users/show.json', { screen_name }, defaultCallbackFactory(resolve, reject))
            })
        },
        getMedia: screen_name => {
            return new Promise((resolve, reject) => {
                this.client.get('/search/tweets.json', {"q": `filter:media`, screen_name}, defaultCallbackFactory(resolve, reject))
            })
        },
        getFriends: screen_name => {
            return new Promise((resolve, reject) => {
                this.client.get('/friends/list.json', { screen_name }, defaultCallbackFactory(resolve, reject))
            })
        },
        getTweets: (screen_name, since_id, max_id, count, exclude_replies) => {
            let params = { screen_name, count, exclude_replies }

            if (since_id) {
                params.since_id = since_id
            }
            if (max_id) {
                params.max_id = max_id
            }

            return new Promise((resolve, reject) => {
                this.client.get('/statuses/user_timeline.json', params, defaultCallbackFactory(resolve, reject))
            })
        },
        getTrends: () => {
            return new Promise((resolve, reject) => {
                this.client.get('/trends/place.json', { "id": 1 }, defaultCallbackFactory(resolve, reject))
            })
        },
        getWhoToFollow: () => {
            return new Promise((resolve, reject) => {
                this.client.get('/users/suggestions/oficiais-do-twitter.json', {}, defaultCallbackFactory(resolve, reject))
            })
        },
        getTweetsSearch: (screen_name, query, max_id, count) => {
            return new Promise((resolve, reject) => {
                this.client.get('/search/tweets.json', {"q": `filter:media`, screen_name, max_id, count}, defaultCallbackFactory(resolve, reject))
            })
        },

    }
}

export default TwitterService
