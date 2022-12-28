const koarouter = require("koa-router");
const router = new koarouter();
router.get('/',(ctx: { body: string; })=>{
    ctx.body = "This is a sample response!"
});
module.exports = router;