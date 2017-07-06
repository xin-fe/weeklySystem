'use strict'


const router = require('koa-router')()
const url = '127.0.0.1:27017/myProjectDb';
const db = require('monk')(url);
const collection = db.get('document');

router
	.post('/save', async (ctx, next) =>{
		let data = JSON.parse(ctx.request.body)
		console.log(data)
		let status = await collection.insert(data)
		if(status == data) {
			ctx.body = {code:0, msg:'保存成功'}
		} else {
			ctx.body = {code:-1, msg:'保存失败，请重新保存'}
		}
	})
	.get('/findList', async (ctx, next)=>{
		ctx.body = await collection.find()
		db.close()
	})
	.get('/delete', async (ctx, next) =>{
		// 清除数据
		ctx.body = await collection.remove()
		db.close()
	})



module.exports = router