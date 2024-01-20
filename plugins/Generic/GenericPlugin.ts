import { DefinePlugin, Plugin } from "../../DefinePlugin";
import { DefineCommand, Command } from "../../DefineCommand";
import { ApplicationCommandType } from "@antibot/interactions";
import { Interaction } from "discord.js";
import { Context } from "../../Context";
import { DefineEvent } from "../../DefineEvent";

export = DefinePlugin({
  name: "Generic",
  description: "test",
  commands: [
    DefineCommand({
      command: {
        name: "ping",
        type: ApplicationCommandType.CHAT_INPUT,
        description: "Get the ping of Anti-Bot",
        options: [],
      },
      on: (ctx, interaction) => {
        if (!interaction.isCommand()) {
            return;
        }

        return interaction.reply("Ping!")
      },
    }),
  ],
});
