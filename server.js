const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();
const PORT = 4000;


//create a root route
//welcome to koa application
router.get('/', (ctx, next) => {
    ctx.body = 'Welcome to Koa Application!';
});
app.use(router.routes())
    .use(router.allowedMethods());

app.listen(PORT);
console.log(`Server is listening on PORT ${PORT}`);