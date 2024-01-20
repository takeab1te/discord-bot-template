"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(ctx) {
    const collection = ctx.plugin;
    for (const [key, value] of collection) {
        const array = [];
        if (Array.isArray(array)) {
            array.forEach((x) => {
                for (let i = 0; i < x.commands.length; i++) {
                    ctx.interactions.set(x.commands[i].name, x);
                }
            });
        }
        else {
            ctx.interactions.set(value.commands[0].name, value);
        }
    }
}
exports.default = default_1;
