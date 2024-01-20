<p align="center">
   <img src="https://github.com/JayyDoesDev/discord-bot-template/blob/main/.github/assets/me.png" alt="me" width="300">
</p>
<h1 align="center">My Discord Bot Template</h1>
<h2 align="left">This is my personal template for my Discord Bots!</h2>
<h2 align="center">Configuration</h2>
<h3 align="left">.env</h3>

```env
BOTID=
PUBLICKEY=
TOKEN=
MONGODB=
```

<h2 align="center">Define Plugin</h2>
<h3 align="left">plugins/CorePlugin.ts</h3>

```ts
export = DefinePlugin({
  name: "Core",
  description: "Core process.",
  commands: [],
  events: [
    DefineEvent({
      event: {
        name: "ready",
        once: true,
      },
      on: (ctx) => {
        console.log(`${ctx.user.username} has logged in!`);
      },
    }),
  ],
  public_plugin: false
});
```
<h2 align="center">Define Command</h2>
<h3 align="left">plugins/CorePlugin.ts</h3>

```ts
export = DefinePlugin({
  name: "Core",
  description: "Core process.",
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

				return interaction.reply("Ping!")
			},
		}),
  ],
  public_plugin: false
});
```