"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const glob_1 = __importDefault(require("glob"));
const path_1 = __importDefault(require("path"));
function default_1(ctx) {
    let commands = glob_1.default.sync("./dist/plugins/**/**/*.js");
    for (let i = 0; i < commands.length; i++) {
        let file = require(path_1.default.resolve(commands[i]));
        if (!file.name || !file.commands) {
            return;
        }
        //@ts-ignore
        if (file.name) {
            //@ts-ignore
            ctx.plugin.set(file.name, file);
            for (let i = 0; i < file.commands.length; i++) {
                const command = file.commands[i];
                ctx.interactions.set(command.command.name, command);
            }
            ctx.interactions.forEach((x) => {
                console.log(x);
                ctx.interact.createGuildCommand("845605014663856158", x.command);
            });
        }
    }
}
exports.default = default_1;
