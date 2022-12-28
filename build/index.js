"use strict";
const koa = require("koa");
const routers = require("./server");
const app = new koa();
app.use(routers.routes());
app.listen(3000, () => {
    console.log("Server is started");
});
