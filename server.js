const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
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
router.get('/posts', (ctx) => {
    ctx.body = posts;
})

app.use(router.routes());

app.listen(PORT);
console.log(`Server is listening on PORT ${PORT}`);