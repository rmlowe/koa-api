const Koa = require('koa');
const app = new Koa();
const PORT = 4000;


app.use(async (ctx, next) => {
    console.log(`${ctx.request.method} ${ctx.request.url} ${new Date()}`);
    return await next();
});

app.use(async (ctx, next) => {
    console.log(`2nd middleware`);
    return await next();
});

app.use(async ctx => {
    ctx.response.body = 'Hello world!!!';
})

app.listen(PORT);
console.log(`Server is listening on PORT ${PORT}`);
