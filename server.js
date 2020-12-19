const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-parser');

const app = new Koa();
const PORT = 4000;
const router = new Router();

app.use(bodyParser());

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
    console.log(ctx.request.body);
    let { id, name, content } = ctx.request.body;

    if (!id) {
        ctx.throw(400, 'id is required field')
    }
    if (!name) {
        ctx.throw(400, 'name is required field')
    }
    if (!content) {
        ctx.throw(400, 'content is required field')
    }

    posts.push({ id, name, content });
    ctx.body = posts;

});

//GET /posts/:id
router.get('/posts/:id', ctx => {
    ctx.body = posts.find(post => post.id === ctx.params.id);
})

//get the id from the req params

//find the post by id

//return or send the single post in th response

app.use(router.routes());

app.listen(PORT);
console.log(`Server is listening on PORT ${PORT}`);