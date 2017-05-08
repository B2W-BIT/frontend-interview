/* Custom Imports */
import express, { Router } from 'express'
import TwitterController from './controllers/twitter.controller.js'


export const twitter_routes = app => {
    app.get('/api/twitter/user/:userId', TwitterController.getUserInfo)
    app.get('/api/twitter/user/:userId/timeline', TwitterController.getUserTweets)
    app.get('/api/twitter/user/:userId/media', TwitterController.getUserMedia)
    app.get('/api/twitter/user/:userId/friends', TwitterController.getUserFriends)
    app.get('/api/twitter/trends', TwitterController.getTrends)
    app.get('/api/twitter/who-to-follow', TwitterController.getWhoToFollow)

}
