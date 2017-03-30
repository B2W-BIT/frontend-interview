import fs from 'fs'
import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'
import webpack from 'webpack'
import http from 'http'
import tweetsRouter from './routes/tweets'

import config from './webpack.config'
const app = express()
const compiler = webpack(config)

const handleError = (res, reason, message, code) => {
  console.log(reason)
  res.status(code || 500).json({'error': message})
}

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
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


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.use('/api', tweetsRouter)

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
