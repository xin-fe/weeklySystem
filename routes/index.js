'use strict'
const Router = require('koa-router')

const totalList=require('./totalList')

var router=new Router();

router.use(totalList.routes())
      .use(totalList.allowedMethods());



module.exports = router