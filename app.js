var Koa = require('koa');
var router = require('koa-router')();
var app = new Koa();
// var views = require('koa-views');
// var bodyParser = require("koa-bodyparser");
// var KoaStatic = require('koa-static');
// const session = require('koa-session');
var Db = require("./module/db.js");

// MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("koa");
//     console.log("数据库已创建!");
//     var myobj = { name: "菜鸟教程", url: "www.runoob" };
//     dbo.collection("site").insertOne(myobj, function(err, res) {
//         if (err) throw err;
//         console.log("文档插入成功");
//         db.close();
//     });
//   });

// app.keys = ['some secret hurr'];
// const CONFIG = {
//    key: 'koa:sess',   //cookie key (default is koa:sess)
//    maxAge: 86400000,  // cookie的过期时间 maxAge in ms (default is 1 days)
//    overwrite: true,  //是否可以overwrite    (默认default true)
//    httpOnly: true, //cookie是否只有服务器端可以访问 httpOnly or not (default true)
//    signed: true,   //签名默认true
//    rolling: false,  //在每次请求时强行设置cookie，这将重置cookie过期时间（默认：false）
//    renew: false,  //(boolean) renew session when session is nearly expired,
// };
// app.use(session(CONFIG, app));

// app.use(KoaStatic('./'));
// app.use(bodyParser);

// app.use(views(__dirname+'/views',{
//     extension:'ejs'
// }))

// app.use(async (ctx,next)=>{
//     ctx.body = '中间件';
//     await next();
// })

router.get('/',async(ctx)=>{
    ctx.body = '你好 koa2.x22';
    // let title='ejsss';
    let kaodata =await Db.find('user',{});
    console.log(kaodata)
    // await ctx.render('index',{
    //     title
    // })
})
// .get('/user/:opt',async(ctx) =>{
//     var aid = ctx.query;
//     // console.log(ctx.params)
    
//     var opt = ctx.params.opt;
//     if(opt == 'getUser'){
//         ctx.body = ctx.requset.bod;
//     }else if(opt == 'getUserList'){
//         ctx.body = 'koa is user';
//     }
// })

app.use(router.routes())
.use(router.allowedMethods());
app.listen(3000)