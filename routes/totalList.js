'use strict'

const Router=require('koa-router');
const router=new Router();

router
    .get('/',function (ctx,next) {
    return ctx.render('index').then(function () {
        next()
    })
})
    .get('/index',function (ctx,next) {
    ctx.body='this is index'
})



module.exports=router;