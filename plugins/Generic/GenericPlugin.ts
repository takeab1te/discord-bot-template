import { DefinePlugin, Plugin } from "../../DefinePlugin";
import { DefineCommand } from "../../DefineCommand";
import { ApplicationCommandType } from "@antibot/interactions";
import { Context } from "../../Context";
import { ChatInputCommandInteraction, Interaction } from "discord.js";
export = DefinePlugin({
	name: "Generic",
	description: "test",
	commands: [
		DefineCommand({
			command: {
				name: "test",
				type: ApplicationCommandType.CHAT_INPUT,
				description: "test",
				options: [],
			},
			on: (ctx, interaction) => {
				if (!interaction.isCommand()) {
					return;
				}

				console.log(ctx.interactions)
				return interaction.reply("Ping!")
			},
		}),
	],
	public_plugin: true
}) as Plugin;
