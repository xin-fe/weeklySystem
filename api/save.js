'use strict'


const router = require('koa-router')()
const url = '47.93.224.33:27017/weeklyData';
const db = require('monk')(url);
const collection = db.get('document');

router
	.post('/save', async (ctx, next) =>{
		let data = JSON.parse(ctx.request.body)

		let listAll = await collection.find();
        let num = 0;
		listAll.map((item,index)=>{
			if(item.dataSource.length === data.dataSource.length) {

                num++;
                return
            }
		})
        if(num>0) {
            ctx.body = {code: -2, msg: '已保存此数据，无需重复保存！'};
        } else {
            let status = await collection.insert(data)
            if(status == data) {
                ctx.body = {code:0, msg:'保存成功'}
            } else {
                ctx.body = {code:-1, msg:'保存失败，请重新保存'}
            }
        }
	})
	.get('/findList', async (ctx, next)=>{
		ctx.body = await collection.find()
		db.close()
	})
    .get('/getDetail', async (ctx, next)=>{
        let key = ctx.query.id;
        let data = await collection.find({key});
        console.log(data)
        if(data.length==0) {
            ctx.body = {
                code:-1
            }
        } else {
            ctx.body = {code:0,data:data[0]}
        }
    })
	.get('/delete', async (ctx, next) =>{
		// 清除数据
		ctx.body = await collection.remove()
		db.close()
	})



module.exports = router