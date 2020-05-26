const Koa = require('koa');
const app = new Koa();
const PORT = 4000;


app.use(async ctx => {
    ctx.body = 'Hello world!!';
})

app.listen(PORT);
console.log(`Server is listening on PORT ${PORT}`);