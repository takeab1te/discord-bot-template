import { ApplicationCommandType, ICommand } from "@antibot/interactions";
import { Command, DefineCommand } from "./DefineCommand";
import { Event } from "./DefineEvent"

export interface Plugin {
  name: string;
  description: string;
  commands?: Command[];
  events?: Event[]
}

export function DefinePlugin(options: Plugin): Plugin {
  return options;
}
