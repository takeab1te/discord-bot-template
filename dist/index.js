"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Context_1 = require("./Context");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const ctx = new Context_1.Context();
["Command", "Event"].forEach(async (x) => {
    await require(`./handlers/${x}`).default(ctx);
});
ctx.login(process.env.TOKEN);
