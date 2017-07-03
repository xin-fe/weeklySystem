const router = require('koa-router')();
const url = '127.0.0.1:27017/myProjectDb';
const db = require('monk')(url);
const collection = db.get('document');

module.exports = router.get('/get', function (ctx, next) {
	let url = ctx.url;
	let request = ctx.query;// get请求获取请求参数
	ctx.body = {
		url:url,
		data:request
	}
})
.get('/getForm',async function (ctx, next) {
	await ctx.render('formTest', {}); //返回表单；
})
.post('/post',function(ctx, next) { // 获取post请求参数；
	let post = ctx.request.body
	collection.insert([post])
	.then((docs)=>{

	})
	.catch((err)=>{
		console.log(err);
	})
	.then(()=>{
		db.close()
	})
	ctx.body = post;
})
.get('/mongo',async function (ctx, next) {
	ctx.body = await collection.find()
	db.close()
	
})