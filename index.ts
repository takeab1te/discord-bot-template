import { Context } from "./Context";
import { config } from "dotenv";
import { SetMongo } from "./SetupMongo";
config();
const ctx: Context = new Context();

["Command", "Event"].forEach(async (x) => {
    await require(`./handlers/${x}`).default(ctx);
});

SetMongo({
	uri: process.env.MONGODB,
});

ctx.login(process.env.TOKEN);