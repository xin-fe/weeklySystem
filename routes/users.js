var router = require('koa-router')();

module.exports = router.get('/', function (ctx, next) {
  ctx.body = 'this a users response!';
})
