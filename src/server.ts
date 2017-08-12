import * as Koa from 'koa';
import * as Router from 'koa-router';
import { IRouterContext } from 'koa-router';

const koa = new Koa();
const app = new Router();

app.get('/:name', async (ctx: IRouterContext) => {
  ctx.body = `Hello, ${ctx.params.name}!\n`;
});

koa.use(app.routes());
koa.listen(3300);
