import { DefinePlugin, Plugin } from "../../DefinePlugin";
import { Command, DefineCommand } from "../../DefineCommand";
import { ApplicationCommandType } from "@antibot/interactions";
import { Context } from "../../Context";
import { ChatInputCommandInteraction, Interaction } from "discord.js";
import { GetCommands } from "../../GetCommands";


export = DefinePlugin({
	name: "Generic",
	description: "Generic",
	commands: [
		DefineCommand({
			command: {
				name: "ping",
				type: ApplicationCommandType.CHAT_INPUT,
				description: "ping",
				options: []
			},
			on: (ctx, interaction) => {
				if (!interaction.isCommand()) {
					return;
				}

				interaction.reply("test")
			}
		})
	],
	public_plugin: false
});
