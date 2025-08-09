import { Link } from "wouter";
import { Book, ExternalLink, Code, Shield, Users, Settings } from "lucide-react";

export default function Docs() {
  const sections = [
    {
      icon: Book,
      title: "Getting Started",
      description: "Learn how to invite and set up sneeze in your Discord server",
      links: [
        { title: "Quick Setup Guide", href: "#setup" },
        { title: "Initial Configuration", href: "#config" },
        { title: "Permission Setup", href: "#permissions" }
      ]
    },
    {
      icon: Shield,
      title: "Security Features",
      description: "Configure anti-nuke, automod, and security settings",
      links: [
        { title: "Anti-Nuke Configuration", href: "#antinuke" },
        { title: "Automod Settings", href: "#automod" },
        { title: "Raid Protection", href: "#raid" }
      ]
    },
    {
      icon: Users,
      title: "Moderation",
      description: "Moderation commands and jail system setup",
      links: [
        { title: "Moderation Commands", href: "#moderation" },
        { title: "Jail System", href: "#jail" },
        { title: "Warning System", href: "#warnings" }
      ]
    },
    {
      icon: Settings,
      title: "Server Management",
      description: "Voicemaster, reaction roles, and server utilities",
      links: [
        { title: "Voicemaster Setup", href: "#voicemaster" },
        { title: "Reaction Roles", href: "#reaction-roles" },
        { title: "Welcome Messages", href: "#welcome" }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-dark">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Documentation</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete guide to setting up and using sneeze for your Discord server
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Link 
              href="/commands"
              className="glassmorphism rounded-lg p-6 hover:bg-surface/50 transition-all duration-300 group"
            >
              <Code className="text-primary mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-lg font-semibold mb-2">Commands Reference</h3>
              <p className="text-gray-400 text-sm">Browse all available commands</p>
              <ExternalLink className="mt-4 text-gray-400 group-hover:text-primary transition-colors" size={16} />
            </Link>
            
            <Link 
              href="/faq"
              className="glassmorphism rounded-lg p-6 hover:bg-surface/50 transition-all duration-300 group"
            >
              <Book className="text-primary mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-lg font-semibold mb-2">FAQ</h3>
              <p className="text-gray-400 text-sm">Frequently asked questions</p>
              <ExternalLink className="mt-4 text-gray-400 group-hover:text-primary transition-colors" size={16} />
            </Link>
            
            <Link 
              href="/status"
              className="glassmorphism rounded-lg p-6 hover:bg-surface/50 transition-all duration-300 group"
            >
              <Shield className="text-success mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-lg font-semibold mb-2">System Status</h3>
              <p className="text-gray-400 text-sm">Check service availability</p>
              <ExternalLink className="mt-4 text-gray-400 group-hover:text-primary transition-colors" size={16} />
            </Link>
            
            <a 
              href="https://discord.gg/sneeze"
              target="_blank"
              rel="noopener noreferrer"
              className="glassmorphism rounded-lg p-6 hover:bg-surface/50 transition-all duration-300 group"
            >
              <Users className="text-primary mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-lg font-semibold mb-2">Discord Support</h3>
              <p className="text-gray-400 text-sm">Get help from our community</p>
              <ExternalLink className="mt-4 text-gray-400 group-hover:text-primary transition-colors" size={16} />
            </a>
          </div>
          
          {/* Documentation Sections */}
          <div className="grid md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <div key={index} className="glassmorphism rounded-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-success rounded-lg flex items-center justify-center mr-4">
                    <section.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{section.title}</h3>
                    <p className="text-gray-400 text-sm">{section.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.href}
                      className="flex items-center justify-between p-3 bg-surface/50 rounded-lg hover:bg-surface transition-colors group"
                    >
                      <span className="text-gray-300 group-hover:text-white transition-colors">
                        {link.title}
                      </span>
                      <ExternalLink className="text-gray-400 group-hover:text-primary transition-colors" size={16} />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional Resources */}
          <div className="mt-16 text-center">
            <div className="glassmorphism rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Need More Help?</h3>
              <p className="text-gray-400 mb-6">
                Join our Discord community for real-time support, updates, and to connect with other sneeze users.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://discord.gg/sneezebot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-gray-200 text-black px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                >
                  <svg className="mr-2 h-5 w-5 inline" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0002 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z"/>
                  </svg>
                  Join Discord
                </a>
                <a
                  href="mailto:support@sneeze.bot"
                  className="border border-gray-600 hover:border-primary px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:bg-primary/10"
                >
                  Email Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}