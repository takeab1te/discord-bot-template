"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const glob_1 = __importDefault(require("glob"));
const path_1 = __importDefault(require("path"));
function default_1(ctx) {
    let events = glob_1.default.sync("./dist/plugins/**/**/*.js");
    for (let i = 0; i < events.length; i++) {
        let file = require(path_1.default.resolve(events[i]));
        if (!file.name || !file.events) {
            return;
        }
        if (file.events) {
            file.events.forEach((x) => {
                if (x.once !== true) {
                    console.log(x);
                    ctx.on(x.event.name, (...args) => x.on(...args, ctx));
                }
                else {
                    console.log("test2");
                    ctx.once(x.event.name, (...args) => x.on(...args, ctx));
                }
            });
        }
    }
}
exports.default = default_1;
