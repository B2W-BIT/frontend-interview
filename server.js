import fs from 'fs'
import path from 'path'
import express from 'express'
import webpack from 'webpack'
import http from 'http'
import axios from 'axios'

import config from './webpack.config'
import * as tconfigs from './twitter.config'

const app = express()
const compiler = webpack(config)
const request = axios.create({
  baseURL: 'https://api.twitter.com',
  timeout: 10000,
  headers: {
    Authorization: `Bearer ${ tconfigs.AF_BEARER_TOKEN }`,
  },
  params: {
    screen_name: 'americanascom'
  }
})

const handleError = (res, reason, message, code) => {
  console.log("ERROR: " + reason)
  res.status(code || 500).json({"error": message})
}

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.use(require('webpack-hot-middleware')(compiler))

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Request-Headers", "*")
  res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS')
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
  res.header("Access-Control-Allow-Credentials", "true")
  next()
})


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/api/tweets', (req, res) => {
  request.get('/1.1/statuses/user_timeline.json').then(
    (tweets) => {
      res.status(200).json(tweets.data)
    }).catch(
      (err) => {
        handleError(res, err.response.data.errors, 'unable to fetch tweets')
      }
    )
})

const server = http.createServer(app).listen(
  3000,
  console.log('Listening at http://localhost:3000')
)

// request.get('/1.1/statuses/user_timeline.json')
//   .then((response) => {
//     fs.writeFile('./data/db.json', JSON.stringify(response.data, null, 2), (err) => {
//       if (err) throw err
//       console.log('JSON db created')
//     })
//   })
//   .catch(error => console.log(error.response.data.errors))
