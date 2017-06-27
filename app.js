'use strict'

const Koa = require('koa')
const views = require('koa-views')
const co = require('co')
const convert = require('koa-convert')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')()
const logger = require('koa-logger')
const ejs = require('ejs')
const app = new Koa();



const router = require('./routes/index')


app.use(convert(bodyparser))
app.use(convert(json()))
app.use(convert(logger()))
app.use(require('koa-static')(__dirname+'/public'))

app.use(views(__dirname+'/views', {
	map:{html:'ejs'}
}))

//log
app.use(function* (ctx, next) {
  const start = new Date();
  yield next()
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
});


app.use(router.routes(), router.allowedMethods())


app.on('error', function(err, ctx){
  console.log(err)
  logger.error('server error', err, ctx)
})


app.listen('3000')
console.log('the server running at 3000')