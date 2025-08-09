import { commands, faqItems, systemStatus, botStats, users, type User, type InsertUser, type Command, type InsertCommand, type FaqItem, type InsertFaqItem, type SystemStatus, type InsertSystemStatus, type BotStats, type InsertBotStats } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getCommands(): Promise<Command[]>;
  getCommandsByCategory(category: string): Promise<Command[]>;
  searchCommands(query: string): Promise<Command[]>;
  
  getFaqItems(): Promise<FaqItem[]>;
  
  getSystemStatus(): Promise<SystemStatus[]>;
  getBotStats(): Promise<BotStats | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private commands: Map<number, Command>;
  private faqItems: Map<number, FaqItem>;
  private systemStatus: Map<number, SystemStatus>;
  private botStats: BotStats | undefined;
  private currentId: number;

  constructor() {
    this.users = new Map();
    this.commands = new Map();
    this.faqItems = new Map();
    this.systemStatus = new Map();
    this.currentId = 1;
    this.initializeData();
  }

  private initializeData() {
    // Initialize commands data
    const commandsData: InsertCommand[] = [
      {
        name: "profile",
        description: "View guild profile",
        category: "server",
        arguments: "guild",
        permissions: "none",
        note: "Administrator",
        isPremium: false
      },
      {
        name: "profile set",
        description: "Set command prefix for server",
        category: "server",
        arguments: "text",
        permissions: "Tier 2 Only",
        note: null,
        isPremium: true
      },
      {
        name: "profile remove",
        description: "Remove command prefix for server",
        category: "server",
        arguments: "none",
        permissions: "none",
        note: "Administrator",
        isPremium: false
      },
      {
        name: "boosterrole",
        description: "Create your own booster role",
        category: "moderation",
        arguments: "color, name",
        permissions: "none",
        note: "Booster Only",
        isPremium: false
      },
      {
        name: "boosterrole rename",
        description: "Edit your booster role name",
        category: "moderation",
        arguments: "new name",
        permissions: "none",
        note: "Booster Only",
        isPremium: false
      },
      {
        name: "ban",
        description: "Ban a member from the server",
        category: "moderation",
        arguments: "member, reason",
        permissions: "Ban Members",
        note: null,
        isPremium: false
      },
      {
        name: "kick",
        description: "Kick a member from the server",
        category: "moderation",
        arguments: "member, reason",
        permissions: "Kick Members",
        note: null,
        isPremium: false
      },
      {
        name: "warn",
        description: "Warn a server member",
        category: "moderation",
        arguments: "member, reason",
        permissions: "Moderate Members",
        note: null,
        isPremium: false
      },
      {
        name: "jail",
        description: "Jail a member in isolation",
        category: "moderation",
        arguments: "member, reason",
        permissions: "Moderate Members",
        note: "Requires jail setup",
        isPremium: false
      },
      {
        name: "unjail",
        description: "Remove member from jail",
        category: "moderation",
        arguments: "member",
        permissions: "Moderate Members",
        note: null,
        isPremium: false
      },
      {
        name: "automod",
        description: "Configure automatic moderation",
        category: "moderation",
        arguments: "setting, value",
        permissions: "Administrator",
        note: null,
        isPremium: false
      },
      {
        name: "antinuke",
        description: "Configure anti-nuke protection",
        category: "security",
        arguments: "setting, threshold",
        permissions: "Administrator",
        note: "Premium feature",
        isPremium: true
      },
      {
        name: "antiraid",
        description: "Configure anti-raid protection",
        category: "security",
        arguments: "setting, value",
        permissions: "Administrator",
        note: "Premium feature",
        isPremium: true
      },
      {
        name: "voicemaster",
        description: "Setup voice channel management",
        category: "server",
        arguments: "channel",
        permissions: "Administrator",
        note: null,
        isPremium: false
      },
      {
        name: "reactionrole",
        description: "Setup reaction role system",
        category: "server",
        arguments: "message, emoji, role",
        permissions: "Manage Roles",
        note: null,
        isPremium: false
      },
      {
        name: "lastfm",
        description: "Connect your Last.fm account",
        category: "music",
        arguments: "username",
        permissions: "none",
        note: null,
        isPremium: false
      },
      {
        name: "nowplaying",
        description: "Show currently playing track",
        category: "music",
        arguments: "user",
        permissions: "none",
        note: null,
        isPremium: false
      },
      {
        name: "spotify",
        description: "View Spotify profile",
        category: "music",
        arguments: "user",
        permissions: "none",
        note: null,
        isPremium: false
      },
      {
        name: "instagram",
        description: "View Instagram profile",
        category: "social",
        arguments: "username",
        permissions: "none",
        note: null,
        isPremium: false
      },
      {
        name: "twitter",
        description: "View Twitter profile",
        category: "social",
        arguments: "username",
        permissions: "none",
        note: null,
        isPremium: false
      }
    ];

    commandsData.forEach(cmd => {
      const id = this.currentId++;
      const command: Command = {
        ...cmd,
        id,
        arguments: cmd.arguments || null,
        permissions: cmd.permissions || null,
        note: cmd.note || null,
        isPremium: cmd.isPremium || false
      };
      this.commands.set(id, command);
    });

    // Initialize FAQ data
    const faqData: InsertFaqItem[] = [
      {
        question: "Is sneeze available for free and public use?",
        answer: "sneeze offers both free and premium features. Basic moderation and utility commands are available for free, while advanced security features and premium integrations require a one-time payment of $30 for lifetime access.",
        order: 1
      },
      {
        question: "How can I pay for sneeze?",
        answer: "We accept all major payment methods including credit cards, PayPal, and cryptocurrency. Payment is processed securely through our payment partners and you'll receive instant access to premium features upon successful payment.",
        order: 2
      },
      {
        question: "How much does sneeze cost?",
        answer: "sneeze premium costs $30 for a one-time lifetime purchase. This includes all premium features, priority support, and access to future updates. No recurring fees or subscriptions required.",
        order: 3
      },
      {
        question: "Can I transfer sneeze to another server?",
        answer: "Yes! Your sneeze premium access is tied to your Discord account, not to a specific server. You can invite sneeze to unlimited servers and configure it independently for each community you manage.",
        order: 4
      },
      {
        question: "What if I want the bot to leave a server, but transfer later?",
        answer: "No problem! You can remove sneeze from any server and re-invite it later. All your premium features and configurations can be restored. Server-specific settings will need to be reconfigured, but your premium access remains active.",
        order: 5
      },
      {
        question: "If I've already transferred the bot once, can I transfer it again?",
        answer: "Absolutely! There are no limits on how many times you can move sneeze between servers. Your premium license allows unlimited server transfers and multiple simultaneous server installations.",
        order: 6
      },
      {
        question: "I didn't buy the bot but I have it in my server, can I transfer it?",
        answer: "If you have the free version of sneeze, you can invite it to any server. However, premium features will only be available if someone in your server has purchased premium access. The premium license is tied to the purchaser's Discord account.",
        order: 7
      },
      {
        question: "What happens if I do not want to continue paying monthly?",
        answer: "Great news! sneeze doesn't have monthly payments. It's a one-time $30 purchase for lifetime access. You'll never need to worry about recurring payments or losing access to premium features.",
        order: 8
      },
      {
        question: "Where can I receive help if I'm confused or have any questions?",
        answer: "Join our Discord support server where our team and community are ready to help! You can also check our comprehensive documentation or submit a support ticket through our website. Premium users get priority support.",
        order: 9
      },
      {
        question: "I no longer want or use sneeze, can I get a refund?",
        answer: "We offer a 7-day refund policy for premium purchases. If you're not satisfied with sneeze within the first week of purchase, contact our support team for a full refund. After 7 days, refunds are considered on a case-by-case basis.",
        order: 10
      }
    ];

    faqData.forEach(faq => {
      const id = this.currentId++;
      const faqItem: FaqItem = {
        ...faq,
        id,
        order: faq.order || 0
      };
      this.faqItems.set(id, faqItem);
    });

    // Initialize system status
    const statusData: InsertSystemStatus[] = [
      {
        service: "Bot",
        status: "Online",
        message: "99.9% uptime"
      },
      {
        service: "API",
        status: "Operational",
        message: "45ms avg response time"
      },
      {
        service: "Database",
        status: "Healthy",
        message: "1,247 active connections"
      },
      {
        service: "CDN",
        status: "Maintenance",
        message: "Scheduled 2-4 AM UTC"
      }
    ];

    statusData.forEach(status => {
      const id = this.currentId++;
      const systemStatus: SystemStatus = {
        ...status,
        id,
        message: status.message || null,
        lastUpdated: new Date()
      };
      this.systemStatus.set(id, systemStatus);
    });

    // Initialize bot stats
    this.botStats = {
      id: 1,
      totalUsers: 200918,
      totalServers: 5917,
      uptime: "99.9%",
      lastUpdated: new Date()
    };
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getCommands(): Promise<Command[]> {
    return Array.from(this.commands.values()).sort((a, b) => a.name.localeCompare(b.name));
  }

  async getCommandsByCategory(category: string): Promise<Command[]> {
    return Array.from(this.commands.values())
      .filter(cmd => cmd.category === category)
      .sort((a, b) => a.name.localeCompare(b.name));
  }

  async searchCommands(query: string): Promise<Command[]> {
    const lowercaseQuery = query.toLowerCase();
    return Array.from(this.commands.values())
      .filter(cmd => 
        cmd.name.toLowerCase().includes(lowercaseQuery) ||
        cmd.description.toLowerCase().includes(lowercaseQuery) ||
        cmd.category.toLowerCase().includes(lowercaseQuery)
      )
      .sort((a, b) => a.name.localeCompare(b.name));
  }

  async getFaqItems(): Promise<FaqItem[]> {
    return Array.from(this.faqItems.values()).sort((a, b) => (a.order || 0) - (b.order || 0));
  }

  async getSystemStatus(): Promise<SystemStatus[]> {
    return Array.from(this.systemStatus.values());
  }

  async getBotStats(): Promise<BotStats | undefined> {
    return this.botStats;
  }
}

export const storage = new MemStorage();
