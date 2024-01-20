"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Context = void 0;
const discord_js_1 = require("discord.js");
const zilla_1 = require("@antibot/zilla");
const interactions_1 = require("@antibot/interactions");
class Context extends discord_js_1.Client {
    plugin;
    cooldown;
    interactions;
    interact;
    constructor() {
        super({
            intents: ["Guilds", "GuildMessages", "GuildMembers"],
            partials: [
                discord_js_1.Partials.Channel,
                discord_js_1.Partials.GuildMember,
                discord_js_1.Partials.Message,
                discord_js_1.Partials.User,
            ],
            allowedMentions: {
                parse: [
                    "everyone"
                ]
            }
        });
        this.plugin = new zilla_1.ZillaCollection();
        this.cooldown = new zilla_1.ZillaCollection();
        this.interactions = new zilla_1.ZillaCollection();
        this.interact = new interactions_1.Interactions({
            publicKey: process.env.PUBLICKEY,
            botID: process.env.BOTID,
            botToken: process.env.TOKEN,
            debug: true
        });
    }
}
exports.Context = Context;
