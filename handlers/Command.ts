import { Context } from "../Context";
import glob from "glob";
import path from "path";
import { Command } from "../DefineCommand";
export default function (ctx: Context): void {
	let commands: string[] = glob.sync("./dist/plugins/**/**/*.js");
	for (let i = 0; i < commands.length; i++) {
		let file: any = require(path.resolve(commands[i]));
		if (!file.name || !file.commands) {
			return;
		}
		//@ts-ignore
		if (file.name) {
			//@ts-ignore
			ctx.plugin.set(file.name, file);
			for (let i = 0; i < file.commands.length; i++) {
				const command: Command = file.commands[i];
				ctx.interactions.set(command.command.name, command);
			}
			ctx.interactions.forEach((x) => {
				console.log(x)
				ctx.interact.createGuildCommand("845605014663856158", x.command)
			})
		}
	}
}
