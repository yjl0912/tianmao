const koa = require("koa");
const koaRouter = require("koa-router");

const app = new koa();
const router = new koaRouter();
//允许使用路由
app.use(router.routes()).use(router.allowedMethods());

let indexdata = require("./datas/index.json");

router.get("/navScrollviewData", (ctx, next) => {
  ctx.body = indexdata;
});

app.listen("3002", (err) => {
  if (err) {
    console.log("服务器启动失败");
  } else {
    console.log("服务器启动成功");
  }
});