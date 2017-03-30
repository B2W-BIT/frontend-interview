import express, { Router } from 'express'
import request from '../utils/request'
const tweetsRouter = Router()

tweetsRouter.get('/tweets', (req, res) => {
  request.get('/1.1/statuses/user_timeline.json').then(
    (tweets) => {
      res.status(200).json(tweets.data)
    }).catch(
      (err) => {
        handleError(res, err.response.data.errors, 'unable to fetch tweets')
      }
    )
})

tweetsRouter.post('/tweets', (req, res) => {
  if(!req.body) return res.sendStatus(400)
  const { id, count } = req.body
  console.log(`received data: ${id}, ${count}`)
})

export default tweetsRouter
