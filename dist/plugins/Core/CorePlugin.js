"use strict";
const DefinePlugin_1 = require("../../DefinePlugin");
const DefineEvent_1 = require("../../DefineEvent");
const discord_js_1 = require("discord.js");
const interactions_1 = require("@antibot/interactions");
module.exports = (0, DefinePlugin_1.DefinePlugin)({
    name: "Core",
    description: "Core process.",
    events: [
        (0, DefineEvent_1.DefineEvent)({
            event: {
                name: "ready",
                once: true,
            },
            on: (ctx, ...event) => {
                console.log(`${ctx.user.username} has logged in!`);
            },
        }),
        (0, DefineEvent_1.DefineEvent)({
            event: {
                name: "interactionCreate",
                once: false,
            },
            on: (interaction, ctx) => {
                if (!interaction.isCommand()) {
                    return;
                }
                if (interaction.channel.type === discord_js_1.ChannelType.DM) {
                    return;
                }
                const command = ctx.interactions.get(interaction.commandName);
                if (command) {
                    if (command.permissions) {
                        const perms = [];
                        let permDisplay = "";
                        if (!interaction.appPermissions.has(command.permissions)) {
                            //@ts-ignore
                            for (var i = 0; i < command.permissions.length; i++) {
                                perms.push((0, interactions_1.PermissionsToHuman)((0, interactions_1.PlantPermission)(command.permissions[i])));
                            }
                            if (perms.length <= 2) {
                                permDisplay = perms.join(" & ");
                            }
                            else {
                                permDisplay = perms.join(", ");
                            }
                            //@ts-ignore
                            return interaction.reply({
                                content: `I'm missing permissions! (${permDisplay})`,
                            });
                        }
                    }
                    command.on(ctx, interaction);
                }
            },
        }),
    ],
});
