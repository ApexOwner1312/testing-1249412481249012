import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Server, Shield, Info, Music, Users, Lock } from "lucide-react";
import CommandCard from "@/components/ui/command-card";
import { COMMAND_CATEGORIES } from "@/lib/constants";
import type { Command } from "@shared/schema";

export default function Commands() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const { data: commands = [], isLoading } = useQuery<Command[]>({
    queryKey: ["/api/commands"],
  });

  const filteredCommands = useMemo(() => {
    let filtered = commands;

    if (selectedCategory !== "all") {
      filtered = filtered.filter(cmd => cmd.category === selectedCategory);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(cmd =>
        cmd.name.toLowerCase().includes(query) ||
        cmd.description.toLowerCase().includes(query) ||
        cmd.category.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [commands, selectedCategory, searchQuery]);

  const getIcon = (categoryId: string) => {
    switch (categoryId) {
      case "server": return <Server size={16} />;
      case "moderation": return <Shield size={16} />;
      case "information": return <Info size={16} />;
      case "music": return <Music size={16} />;
      case "social": return <Users size={16} />;
      case "security": return <Lock size={16} />;
      default: return <Info size={16} />;
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen pt-16 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-gray-400">Loading commands...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 bg-dark">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Commands</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive command documentation with search functionality
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                type="text"
                placeholder="Search commands..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-surface border border-gray-600 rounded-lg px-6 py-4 pl-12 text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          </div>
          
          {/* Command Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
              onClick={() => setSelectedCategory("all")}
              variant={selectedCategory === "all" ? "default" : "outline"}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === "all" 
                  ? "bg-primary hover:bg-purple-600" 
                  : "bg-surface hover:bg-primary border-gray-600"
              }`}
            >
              All Commands ({commands.length})
            </Button>
            
            {COMMAND_CATEGORIES.map((category) => {
              const categoryCount = commands.filter(cmd => cmd.category === category.id).length;
              
              return (
                <Button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.id 
                      ? "bg-primary hover:bg-purple-600" 
                      : "bg-surface hover:bg-primary border-gray-600"
                  }`}
                >
                  {getIcon(category.id)}
                  <span className="ml-2">{category.name} ({categoryCount})</span>
                </Button>
              );
            })}
          </div>
          
          {/* Commands Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredCommands.map((command) => (
              <CommandCard key={command.id} command={command} />
            ))}
          </div>
          
          {filteredCommands.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-surface rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="text-gray-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">No commands found</h3>
              <p className="text-gray-400">
                {searchQuery
                  ? `No commands match "${searchQuery}". Try a different search term.`
                  : "No commands available in this category."}
              </p>
            </div>
          )}
          
          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">
              Found {filteredCommands.length} command{filteredCommands.length !== 1 ? 's' : ''}
              {selectedCategory !== "all" && ` in ${COMMAND_CATEGORIES.find(c => c.id === selectedCategory)?.name}`}
              {searchQuery && ` matching "${searchQuery}"`}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
