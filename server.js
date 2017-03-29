import path from 'path'
import express from 'express'
import webpack from 'webpack'
import http from 'http'
import axios from 'axios'
import * as tconfigs from './twitter.config'

import config from './webpack.config'

const app = express()
const compiler = webpack(config)

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.use(require('webpack-hot-middleware')(compiler))

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'))
})

const server = http.createServer(app).listen(
  3000,
  console.log('Listening at http://localhost:3000')
)

// const request = axios.create({
//   baseURL: 'https://api.twitter.com',
//   timeout: 10000,
//   headers: {
//     Authorization: `Bearer ${ tconfigs.AF_BEARER_TOKEN }`
//   },
//   params: {
//     count: 1,
//     screen_name: 'americanascom'
//   }
// })
//
// request.get('/1.1/statuses/user_timeline.json')
//   .then(response => console.log(response))
//   .catch(error => console.log(error.response.data.errors))
