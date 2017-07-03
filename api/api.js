'use strict'


const router = require('koa-router')()
const save = require('./save')

router.use('/api', save.routes(), save.allowedMethods())




module.exports = router