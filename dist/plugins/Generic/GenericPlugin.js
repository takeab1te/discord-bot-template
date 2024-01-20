"use strict";
const DefinePlugin_1 = require("../../DefinePlugin");
const DefineCommand_1 = require("../../DefineCommand");
const interactions_1 = require("@antibot/interactions");
module.exports = (0, DefinePlugin_1.DefinePlugin)({
	name: "Generic",
	description: "test",
	commands: [
		(0, DefineCommand_1.DefineCommand)({
			command: {
				name: "ping",
				type: interactions_1.ApplicationCommandType.CHAT_INPUT,
				description: "Get the ping of Anti-Bot",
				options: [],
			},
			on: (ctx, interaction) => {
				if (!interaction.isCommand()) {
					return;
				}
				return interaction.reply("Ping!");
			},
		}),
	],
});
