import TwitterService from '../services/twitter.service'

const defaultComunicationErrorFactory = res => {
    return err => {
        if (err) {
            console.log(err)
            res.status(500).send(err);
        }
    }
}

const twitter = new TwitterService()

const TwitterController = {
    getUserInfo: (req, res) => {
        const { userId } = req.params
        twitter.getUserData(userId)
            .then(resp => {
                res.json(resp)
            })
            .catch(defaultComunicationErrorFactory(res))
    },
    getUserMedia: (req, res) => {
        const { userId } = req.params
        twitter.getMedia(userId)
            .then((resp, raw) => {

                console.log("raw", raw)

                const media = resp.statuses.reduce((stack, tweetData) => {
                    if(!!tweetData.entities.media) {
                        stack.push(...tweetData.entities.media)
                    }
                    return stack
                }, [])

                res.json(media)
            })
            .catch(defaultComunicationErrorFactory(res))
    },
    getUserFriends: (req, res) => {
        const { userId } = req.params
        twitter.getFriends(userId)
            .then(resp => {
                res.json(resp)
            })
            .catch(defaultComunicationErrorFactory(res))
    },
    getUserTweets: (req, res) => {
        const { userId } = req.params
        const { since_id = 0, max_id = 0, count = 9, exclude_replies = "true" } =  req.query

        twitter.getTweets(userId, since_id, max_id, count, exclude_replies)
            .then((resp, raw) => {
                res.json(resp)
            })
            .catch(defaultComunicationErrorFactory(res))
    },
    getTrends: (req, res) => {
        const { userId } = req.params
        twitter.getTrends(userId)
            .then(resp => {
                res.json(resp)
            })
            .catch(defaultComunicationErrorFactory(res))
    },
    getWhoToFollow: (req, res) => {
        twitter.getWhoToFollow()
            .then(resp => {
                res.json(resp)
            })
            .catch(defaultComunicationErrorFactory(res))
    },
    getTweetsSearch: (req, res) => {
        const { userId, query } = req.params
        const { max_id, count = 9 } =  req.query

        twitter.getTweetsSearch(userId, query, max_id, count)
            .then(resp => {
                res.json(resp)
            })
            .catch(defaultComunicationErrorFactory(res))
    }
}

export default TwitterController
