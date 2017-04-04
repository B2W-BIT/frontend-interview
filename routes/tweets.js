import express, { Router } from 'express'
import request, { handleError } from '../utils/request'
const tweetsRouter = Router()

const TIMELINE_URL = '/1.1/statuses/user_timeline.json'

tweetsRouter.get('/tweets', (req, res) => {
  request.get(TIMELINE_URL).then(tweets => {
      res.status(200).json(tweets.data)
  }).catch(err => {
    handleError(res, err.response.data.errors, 'unable to fetch tweets')
  })
})

tweetsRouter.post('/tweets', (req, res) => {
  if(!req.body) return res.sendStatus(400)
  const { id, count } = req.body

  request.get(`${TIMELINE_URL}?max_id=${id}&count=${count}`).then(tweets => {
    res.status(200).json(tweets.data)
  }).catch(err => {
    handleError(res, err.response.data.errros, 'unable to fetch tweets')
  })
})

export default tweetsRouter
