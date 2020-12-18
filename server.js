const Koa = require('koa');
const app = new Koa();
const PORT = 4000;
//import the koa-router
const Router = require('koa-router');
const router = new Router();



//create a root route
router.get('/', (ctx) => {
    ctx.body = 'welcome to koa application';
})

app.use(router.routes());

app.listen(PORT);
console.log(`Server is listening on PORT ${PORT}`);