export const DISCORD_INVITE_URL = "https://discord.com/oauth2/authorize?client_id=1397608557997854750&permissions=8&integration_type=0&scope=bot";

export const SOCIAL_LINKS = {
  discord: "https://discord.gg/sneezebot",
  twitter: "https://twitter.com/sneezebot",
  github: "https://github.com/sneeze-bot"
};

export const COMMAND_CATEGORIES = [
  { id: "server", name: "Server", icon: "server", count: 37 },
  { id: "moderation", name: "Moderation", icon: "shield", count: 18 },
  { id: "information", name: "Information", icon: "info", count: 19 },
  { id: "roleplay", name: "Roleplay", icon: "theater-masks", count: 14 },
  { id: "music", name: "Music", icon: "music", count: 18 },
  { id: "social", name: "Social", icon: "users", count: 12 },
  { id: "security", name: "Security", icon: "lock", count: 8 }
];

export const INTEGRATION_PLATFORMS = [
  {
    name: "Last.fm",
    icon: "lastfm",
    color: "bg-red-600",
    description: "Show your current track, Recent Tracks, Search Channels, Top Leaderboards, and more.",
    features: ["Play, Queue, Control", "Listen in any Voice", "Channel and Leaderboards"]
  },
  {
    name: "Spotify",
    icon: "spotify",
    color: "bg-green-500",
    description: "Play, Queue, Control your Music. Listen in any Voice Channel and Leaderboards.",
    features: ["Play, Queue, Control", "Listen in any Voice", "Channel and Leaderboards"]
  },
  {
    name: "Instagram",
    icon: "instagram",
    color: "bg-gradient-to-br from-purple-500 to-pink-500",
    description: "Search, View Profiles, Track Feeds, Notify any channel about New Posts, Retweets.",
    features: ["Search, View Profiles", "Track Feeds, Notify any", "channel about New Posts"]
  },
  {
    name: "Twitter",
    icon: "twitter",
    color: "bg-gray-800",
    description: "Search, View Profiles, Track Feeds, Notify any channel about New Posts, Retweets.",
    features: ["Search, View Profiles", "Track Feeds, Notify any", "channel about New Posts"]
  },
  {
    name: "Pinterest",
    icon: "pinterest",
    color: "bg-red-600",
    description: "Use most Search on Images, View Profiles, Embed Pins into any channel, and much more.",
    features: ["Use most Search", "Embed Pins into any channel", "and much more"]
  }
];

export const SECURITY_FEATURES = [
  {
    icon: "eye-slash",
    title: "Anti-Nuke",
    description: "Easily prevent your server from malicious attacks and griefing with a customizable threshold set by you.",
    color: "text-red-400"
  },
  {
    icon: "clock",
    title: "Auto-setup",
    description: "Speed up your setup with our one command, it's easy to go.",
    color: "text-orange-400"
  },
  {
    icon: "cog",
    title: "Configure once",
    description: "Discord server management requires setup only once.",
    color: "text-green-400"
  },
  {
    icon: "robot",
    title: "Voicemaster Setup Complete",
    description: "Discord server setup requires role creation.",
    color: "text-blue-400"
  }
];

export const VOICEMASTER_CONTROLS = [
  { icon: "lock", label: "Private" },
  { icon: "users", label: "Limit" },
  { icon: "eye", label: "Invisible" },
  { icon: "ban", label: "Kick" },
  { icon: "microphone-alt", label: "Unmute" },
  { icon: "plus", label: "Add" },
  { icon: "minus", label: "Remove" }
];
