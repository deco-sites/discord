import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 411,
  site: "discord",
  domains: ["discord.deco.site"],
});