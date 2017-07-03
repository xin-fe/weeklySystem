var router = require('koa-router')();

module.exports = router.get('/',async function (ctx, next) {
    ctx.state = {
        style:['stylesheets/banner.css','stylesheets/common/swiper-3.4.2.min.css','stylesheets/advertising.css'],
        script:['scripts/common/swiper.min.js','scripts/common/swiper.animate1.0.2.min.js','scripts/index.js']
    };
    
    await ctx.render('index', {});
})