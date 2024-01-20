import { Context } from "../Context";
import glob from "glob";
import path from "path";
export default function (ctx: Context): void {
  let events: string[] = glob.sync("./dist/plugins/**/**/*.js");
  for (let i = 0; i < events.length; i++) {
    let file: any = require(path.resolve(events[i]));
    if (!file.name || !file.events) {
      return;
    }
    if (file.events) {
      file.events.forEach((x) => {
        if (x.once !== true) {
            console.log(x)
          ctx.on(x.event.name, (...args) => x.on(...args, ctx));
        } else {
            console.log("test2")
          ctx.once(x.event.name, (...args) => x.on(...args, ctx));
        }
      });
    }
  }
}
