import { Context } from "../Context";
import glob from "glob";
import path from "path";
import { Command } from "../DefineCommand";
export default function (ctx: Context): void {
	const commands: string[] = glob.sync("./dist/plugins/**/**/*.js");
	for (let i = 0; i < commands.length; i++) {
		const file: any = require(path.resolve(commands[i]));
		if (!file.name || !file.commands) {
			return;
		}
		//@ts-ignore
		if (file.commands) {
			//@ts-ignore
			console.log("test")
			ctx.plugin.set(file.name, file);
			for (let i = 0; i < file.commands.length; i++) {
				const command: Command = file.commands[i];
				ctx.interactions.set(command.command.name, command);
			}
			ctx.interactions.forEach((x) => {
				ctx.interact.createGuildCommand("845605014663856158", x.command)
			})
		}
	}
}
