var router = require('koa-router')();

const home = require('./home');
const users = require('./users');
const get = require('./get');

router.use('/index', home.routes(), home.allowedMethods());
router.use('/users', users.routes(), users.allowedMethods());
router.use('/getData',get.routes(), get.allowedMethods())

module.exports = router