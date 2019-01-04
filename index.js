
const http = require('http')
const Koa = require('koa')

const app = new Koa()

// const html = '<!DOCTYPE html><html><head><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><meta name="viewport" content="initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"><title>Examples</title><style type="text/css"></style></head><body></body></html>'


// app.use(async (ctx, next) => {
//     await next();
//     const rt = ctx.response.get('X-Response-Time')
//     console.log(`${ctx.method} ${ctx.url} - ${rt}`)
// })
  
// app.use(async (ctx, next) => {
//     const start = Date.now()
//     await next()
//     const ms = Date.now() - start
//     ctx.set('X-Response-Time', `${ms}ms`)
// })
  
app.use(async ctx => {
    ctx.status = 200
    ctx.body = 'Hello World';
})

// app.listen(5260)
http.createServer(app.callback()).listen(5260)

