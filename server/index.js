/*Vendor imports*/
import express from 'express'
import Http from 'http'
import util from "util"
import webpack from 'webpack'
import config from '../webpack.config'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

/*Custom imports*/
import { twitter_routes } from './routes'

/* Bootstraping */
const app = express()
const http = Http.Server(app)

import serverConfig from './config'

// Webpack Requirements
if (process.env.NODE_ENV === 'development') {
    const compiler = webpack(config)
    app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
    app.use(webpackHotMiddleware(compiler))
}

app.set('view engine', 'ejs')

app.use(express.static('build'))

app.use('/static', express.static('static'))

twitter_routes(app)

app.get('*', function (req, res){
    res.render('index', { env: process.env.NODE_ENV })
})

http.listen(process.env.PORT || 8000, () => {
  console.log('listening on *:8000')
})
