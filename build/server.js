"use strict";
const koarouter = require("koa-router");
const router = new koarouter();
router.get('/', (ctx) => {
    ctx.body = "This is a sample response!";
});
module.exports = router;
