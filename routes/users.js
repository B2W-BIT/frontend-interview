import express, { Router } from 'express'
import request, { handleError } from '../utils/request'
const userRouter = Router()

const USER_URL = '/1.1/users/show.json'

userRouter.get('/user', (req, res) => {
  request.get(USER_URL).then(user => {
    res.status(200).json(user.data)
  }).catch(err => {
    handleError(res, err.response.data.erros, 'unable to fetch user')
  })
})

export default userRouter
