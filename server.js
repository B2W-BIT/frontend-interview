import fs from 'fs'
import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'
import webpack from 'webpack'
import http from 'http'
import tweetsRouter from './routes/tweets'
import userRouter from './routes/users'

import config from './webpack.config'
const app = express()
const compiler = webpack(config)

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true, publicPath: config.output.publicPath
}))

app.use(require('webpack-hot-middleware')(compiler))

app.use(bodyParser.json())

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Request-Headers', '*')
  res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  res.header('Access-Control-Allow-Credentials', 'true')
  next()
})

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/'))
})

app.use('/api', tweetsRouter)
app.use('/api', userRouter)

const server = http.createServer(app).listen(
  3000,
  console.log('Listening at http://localhost:3000')
)
