const Koa = require('koa');
const app = new Koa();
const views = require('koa-views');
const co = require('co');
const convert = require('koa-convert');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser')();
const logger = require('koa-logger');
const ejs = require('ejs');
const monk = require('monk');

// db
const url = '127.0.0.1:27017/myProjectDb';
const db = monk(url);
db.then(()=>{
	console.log('Connected correctly to server')
})



//const router = require('./routes/index');
const api = require('./api/api');

// middlewares
app.use(convert(bodyparser));
app.use(convert(json()));
app.use(convert(logger()));
app.use(require('koa-static')(__dirname + '/public'));

app.use(views(__dirname + '/dist', {
  map : {html:'ejs'}
}));

// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

app.use(api.routes(), api.allowedMethods());
//app.use(router.routes(), router.allowedMethods());


app.on('error', function(err, ctx){
  console.log(err)
  logger.error('server error', err, ctx);
});


module.exports = app;