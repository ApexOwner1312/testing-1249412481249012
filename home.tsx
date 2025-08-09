import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Lock, Users, Eye, Ban, Plus, Minus, Mic, Settings, Monitor } from "lucide-react";
import { SiSpotify, SiInstagram, SiX, SiPinterest, SiLastdotfm } from "react-icons/si";
import AnimatedCounter from "@/components/ui/animated-counter";
import FeatureCard from "@/components/ui/feature-card";
import { DISCORD_INVITE_URL } from "@/lib/constants";
import type { BotStats } from "@shared/schema";
import sorrowPfp from "@assets/derrick_1753292881073.jpg";
import hardwarePfp from "@assets/jonthan_1753292841877.gif";
import pastPfp from "@assets/past_1753292928951.png";

export default function Home() {
  const { data: stats } = useQuery<BotStats>({
    queryKey: ["/api/stats"],
  });

  const handleInviteBot = () => {
    window.open(DISCORD_INVITE_URL, "_blank");
  };

  const handlePurchase = () => {
    window.open("https://sneeze.bot/purchase", "_blank");
  };

  return (
    <div className="min-h-screen bg-darker">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-gray-800 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              <span className="gradient-text">sneeze</span> is Discord's<br/>
              premier all-in-one app
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
              Meet the leading bot for management and engagement. Built to 
              elevate your community's experience, streamline server management, 
              and provide you access to premium resources for every necessity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-16 justify-center">
              <Button
                onClick={handleInviteBot}
                className="group bg-white hover:bg-gray-200 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                size="lg"
              >
                <svg className="mr-3 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0002 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z"/>
                </svg>
                Invite to Discord
              </Button>
              <Button
                onClick={handlePurchase}
                className="group bg-white hover:bg-gray-200 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                size="lg"
              >
                Purchase
              </Button>
            </div>
            
            <div className="text-center">
              <p className="text-gray-400 text-xl mb-6">
                Powering{" "}
                <span className="text-white font-bold">
                  {stats ? <AnimatedCounter end={stats.totalUsers} /> : "200,918"}
                </span>{" "}
                users across{" "}
                <span className="text-white font-bold">
                  {stats ? <AnimatedCounter end={stats.totalServers} /> : "5,917"}
                </span>{" "}
                communities
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Anti-Raid and Anti-Nuke */}
      <section className="py-20 bg-darker">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left side - Filters and Anti-Nuke */}
            <div className="space-y-8">
              {/* Filters */}
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-gray-700/50 transition-all duration-300">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-4">Filters</h3>
                  <p className="text-gray-400 mb-6">Keep any chat clean with our many automated filtering options.</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 flex items-center">
                      <span className="text-sm text-gray-300">Links</span>
                    </div>
                    <div className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 flex items-center">
                      <span className="text-sm text-gray-300">Mass Mentions</span>
                    </div>
                    <div className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 flex items-center">
                      <span className="text-sm text-gray-300">Spoilers</span>
                    </div>
                    <div className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 flex items-center">
                      <span className="text-sm text-gray-300">Invites</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <button className="w-8 h-8 bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                      <span className="text-gray-400 text-xl">+</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Anti-Nuke */}
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-gray-700/50 transition-all duration-300 relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-8 left-8 w-32 h-32 border border-gray-600 rounded-full"></div>
                  <div className="absolute top-12 left-12 w-24 h-24 border border-gray-600 rounded-full"></div>
                  <div className="absolute top-16 left-16 w-16 h-16 border border-gray-600 rounded-full"></div>
                  <div className="absolute top-20 left-20 w-8 h-8 bg-red-500 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-12 right-12 w-2 h-2 bg-gray-500 rounded-full"></div>
                  <div className="absolute bottom-16 right-16 w-2 h-2 bg-gray-500 rounded-full"></div>
                  <div className="absolute bottom-20 right-20 w-2 h-2 bg-gray-500 rounded-full"></div>
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-4">Anti-Nuke</h3>
                  <p className="text-gray-400">Easily prevent your server from malicious attacks and griefing, with a customizable threshold set by you.</p>
                </div>
              </div>
            </div>

            {/* Right side - Fake Permissions and Anti-Raid */}
            <div className="space-y-8">
              {/* Fake Permissions */}
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-gray-700/50 transition-all duration-300">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-4">Fake Permissions</h3>
                  <p className="text-gray-400">Remove all dangerous Discord permissions that can be used for malicious reasons through API.</p>
                </div>
              </div>

              {/* Anti-Raid */}
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-gray-700/50 transition-all duration-300">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-4">Anti-Raid</h3>
                  <p className="text-gray-400">Protect against targeted bot raids on your server, with our mass join, avatar and account age anti-raid filters.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Button
              className="group bg-white hover:bg-gray-200 text-black px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              100+ more commands →
            </Button>
          </div>
        </div>
      </section>

      {/* Integrations with Platforms */}
      <section className="py-20 bg-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Integrations with your favorite Platforms</h2>
            <p className="text-xl text-gray-300">Effortlessly track, view, search, play, notify updates and more from many platforms.</p>
          </div>
          
          {/* Infinite Scrolling Platform Cards */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll space-x-6">
              {/* First set of platforms */}
              <div className="flex space-x-6 flex-shrink-0">
                {/* Last.fm */}
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-700/50 transition-all duration-300 w-80 flex-shrink-0">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center mr-3">
                      <SiLastdotfm className="text-red-600" size={18} />
                    </div>
                    <h3 className="text-lg font-semibold text-white">Last.fm</h3>
                  </div>
                  <p className="text-sm text-gray-400 mb-4">
                    View your <span className="text-white">current track</span>, <span className="text-white">Recent Tracks</span>, Search <span className="text-white">Profiles</span>, <span className="text-white">Track Leaderboards</span>, and <span className="text-white">50+ more</span>.
                  </p>
                </div>

                {/* Spotify */}
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-700/50 transition-all duration-300 w-80 flex-shrink-0">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center mr-3">
                      <SiSpotify className="text-green-500" size={18} />
                    </div>
                    <h3 className="text-lg font-semibold text-white">Spotify</h3>
                  </div>
                  <p className="text-sm text-gray-400 mb-4">
                    Play, Queue, Control your <span className="text-white">Music</span>. Listen in any <span className="text-white">Voice Channel</span> and <span className="text-white">14+ more</span>.
                  </p>
                </div>

                {/* Instagram */}
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-700/50 transition-all duration-300 w-80 flex-shrink-0">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center mr-3">
                      <SiInstagram className="text-pink-500" size={18} />
                    </div>
                    <h3 className="text-lg font-semibold text-white">Instagram</h3>
                  </div>
                  <p className="text-sm text-gray-400 mb-4">
                    Search, View <span className="text-white">Profiles</span>, <span className="text-white">Track Feeds</span>. Notify any channel about <span className="text-white">New Posts</span>, <span className="text-white">Retweets</span>.
                  </p>
                </div>

                {/* X (Twitter) */}
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-700/50 transition-all duration-300 w-80 flex-shrink-0">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center mr-3">
                      <SiX className="text-white" size={18} />
                    </div>
                    <h3 className="text-lg font-semibold text-white">X</h3>
                  </div>
                  <p className="text-sm text-gray-400 mb-4">
                    Search, View <span className="text-white">Profiles</span>, <span className="text-white">Track Feeds</span>. Notify any channel about <span className="text-white">New Posts</span>, <span className="text-white">Retweets</span>.
                  </p>
                </div>

                {/* Pinterest */}
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-700/50 transition-all duration-300 w-80 flex-shrink-0">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center mr-3">
                      <SiPinterest className="text-red-600" size={18} />
                    </div>
                    <h3 className="text-lg font-semibold text-white">Pinterest</h3>
                  </div>
                  <p className="text-sm text-gray-400 mb-4">
                    Use <span className="text-white">Last Search</span> on Images, See <span className="text-white">Embed Pins</span> into any channel, and much <span className="text-white">more</span>.
                  </p>
                </div>
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="flex space-x-6 flex-shrink-0">
                {/* Last.fm */}
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-700/50 transition-all duration-300 w-80 flex-shrink-0">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center mr-3">
                      <SiLastdotfm className="text-red-600" size={18} />
                    </div>
                    <h3 className="text-lg font-semibold text-white">Last.fm</h3>
                  </div>
                  <p className="text-sm text-gray-400 mb-4">
                    View your <span className="text-white">current track</span>, <span className="text-white">Recent Tracks</span>, Search <span className="text-white">Profiles</span>, <span className="text-white">Track Leaderboards</span>, and <span className="text-white">50+ more</span>.
                  </p>
                </div>

                {/* Spotify */}
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-700/50 transition-all duration-300 w-80 flex-shrink-0">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center mr-3">
                      <SiSpotify className="text-green-500" size={18} />
                    </div>
                    <h3 className="text-lg font-semibold text-white">Spotify</h3>
                  </div>
                  <p className="text-sm text-gray-400 mb-4">
                    Play, Queue, Control your <span className="text-white">Music</span>. Listen in any <span className="text-white">Voice Channel</span> and <span className="text-white">14+ more</span>.
                  </p>
                </div>

                {/* Instagram */}
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-700/50 transition-all duration-300 w-80 flex-shrink-0">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center mr-3">
                      <SiInstagram className="text-pink-500" size={18} />
                    </div>
                    <h3 className="text-lg font-semibold text-white">Instagram</h3>
                  </div>
                  <p className="text-sm text-gray-400 mb-4">
                    Search, View <span className="text-white">Profiles</span>, <span className="text-white">Track Feeds</span>. Notify any channel about <span className="text-white">New Posts</span>, <span className="text-white">Retweets</span>.
                  </p>
                </div>

                {/* X (Twitter) */}
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-700/50 transition-all duration-300 w-80 flex-shrink-0">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center mr-3">
                      <SiX className="text-white" size={18} />
                    </div>
                    <h3 className="text-lg font-semibold text-white">X</h3>
                  </div>
                  <p className="text-sm text-gray-400 mb-4">
                    Search, View <span className="text-white">Profiles</span>, <span className="text-white">Track Feeds</span>. Notify any channel about <span className="text-white">New Posts</span>, <span className="text-white">Retweets</span>.
                  </p>
                </div>

                {/* Pinterest */}
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-700/50 transition-all duration-300 w-80 flex-shrink-0">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center mr-3">
                      <SiPinterest className="text-red-600" size={18} />
                    </div>
                    <h3 className="text-lg font-semibold text-white">Pinterest</h3>
                  </div>
                  <p className="text-sm text-gray-400 mb-4">
                    Use <span className="text-white">Last Search</span> on Images, See <span className="text-white">Embed Pins</span> into any channel, and much <span className="text-white">more</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voicemaster Interface */}
      <section className="py-20 bg-darker">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Personal channels with Voicemaster</h2>
            <p className="text-xl text-gray-300">Temporary personalized voice channels for your community.</p>
          </div>
          
          {/* Main Voicemaster Interface Card */}
          <div className="glassmorphism rounded-2xl p-8 mb-8">
            <div className="flex flex-col lg:flex-row items-start gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-4">Voicemaster Interface</h3>
                <p className="text-gray-400 mb-6">Powerful control for your personal voice channel, with an intuitive, built-in chat interface.</p>
              </div>
              
              <div className="flex-shrink-0">
                <div className="grid grid-cols-5 gap-3">
                  <button className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                    <Lock className="text-gray-400" size={16} />
                  </button>
                  <button className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                    <Users className="text-gray-400" size={16} />
                  </button>
                  <button className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                    <Eye className="text-gray-400" size={16} />
                  </button>
                  <button className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                    <Ban className="text-gray-400" size={16} />
                  </button>
                  <button className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                    <Mic className="text-gray-400" size={16} />
                  </button>
                  <button className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                    <Settings className="text-gray-400" size={16} />
                  </button>
                  <button className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                    <Monitor className="text-gray-400" size={16} />
                  </button>
                  <button className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                    <Plus className="text-gray-400" size={16} />
                  </button>
                  <button className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                    <Minus className="text-gray-400" size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Setup and Roles Cards */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Easy Setup Card */}
            <div className="glassmorphism rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Easy Setup</h3>
              <p className="text-gray-400 mb-6">Spend seconds not hours. One command, it's ready to go.</p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-300">voicemaster setup</span>
                </div>
                
                <div className="ml-9 space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    Configured server
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    Configured channels
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-300">Voicemaster Setup Complete</span>
                </div>
              </div>
            </div>

            {/* Roles Card */}
            <div className="glassmorphism rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Roles</h3>
              <p className="text-gray-400 mb-6">Grant custom roles to members joined in your voice channel.</p>
              
              <div className="space-y-4">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>🔊 VOICE CHANNELS</span>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-gray-600 rounded mr-3"></div>
                    <span className="text-gray-400">🔊 Join to Create</span>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-gray-600 rounded mr-3"></div>
                    <span className="text-gray-400">🔊 sorrow's channel</span>
                  </div>
                  
                  <div className="ml-7 space-y-2">
                    <div className="flex items-center">
                      <img 
                        src={sorrowPfp} 
                        alt="sorrow" 
                        className="w-6 h-6 rounded-full mr-2 object-cover"
                      />
                      <span className="text-gray-400 text-sm">sorrow</span>
                    </div>
                    <div className="flex items-center">
                      <img 
                        src={hardwarePfp} 
                        alt="hardware" 
                        className="w-6 h-6 rounded-full mr-2 object-cover"
                      />
                      <span className="text-gray-400 text-sm">hardware</span>
                    </div>
                    <div className="flex items-center">
                      <img 
                        src={pastPfp} 
                        alt="past" 
                        className="w-6 h-6 rounded-full mr-2 object-cover"
                      />
                      <span className="text-gray-400 text-sm">past</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}