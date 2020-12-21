const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-parser');
const _ = require('lodash');

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

})

//GET /posts/:id
router.get('/posts/:id', ctx => {
    ctx.body = posts.find(post => post.id === ctx.params.id);
});

///DLETE /posts/:id
router.delete('/posts/:id', ctx => {
    ctx.body = _.remove(posts, p => p.id === ctx.params.id);
});

//PUT /posts/:id
router.put('/posts/:id', ctx => {

    let { id, name, content } = ctx.request.body;
    const index = posts.findIndex(p => p.id === ctx.params.id)
    if (id) {
        posts[index].id = id;
    }
    if (name) {
        posts[index].name = name;
    }
    //update the name of the current post

    //if user wants to update the contnet
    if (content) {
        posts[index].content = content;
    }
    //update the content

    //return all the posts to the response
    const post = posts.find(post => post.id === ctx.params.id);

    ctx.body = posts;
})

app.use(router.routes());

app.listen(PORT);
console.log(`Server is listening on PORT ${PORT}`);