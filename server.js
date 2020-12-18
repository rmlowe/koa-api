const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const Router = require('koa-router');

const app = new Koa();
app.use(bodyParser());
const PORT = 4000;
const router = new Router();

const posts = [
    {
        "id": '1',
        "name": "Nodejs Developer",
        "content": "ajkshdkjashdk ajshdkjasd"
    },
    {
        "id": '2',
        "name": "Sailsjs Developer",
        "content": "ajkshdkjashdk ajshdkjasd"
    },
    {
        "id": '3',
        "name": "Vuejs Developer",
        "content": "ajkshdkjashdk ajshdkjasd"
    }
];
router.get('/', (ctx) => {
    ctx.body = 'welcome to koa application';
})

//GET /posts
router.get('/posts', ctx => {
    ctx.body = posts;
});

//POST /posts
router.post('/posts', ctx => {
    posts.push(ctx.request.body);
    console.log(ctx.request.body);
    ctx.body = posts;
});
app.use(router.routes());

app.listen(PORT);
console.log(`Server is listening on PORT ${PORT}`);