import { useState } from "react";
import { Copy, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import type { Command } from "@shared/schema";

interface CommandCardProps {
  command: Command;
}

export default function CommandCard({ command }: CommandCardProps) {
  const { toast } = useToast();
  const [isHovered, setIsHovered] = useState(false);

  const copyCommand = () => {
    navigator.clipboard.writeText(`,${command.name}`);
    toast({
      title: "Command copied!",
      description: `Command ",${command.name}" copied to clipboard`,
    });
  };

  return (
    <div 
      className="glassmorphism rounded-lg p-6 hover:bg-surface/50 transition-all duration-300 animate-fade-in-up"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold flex items-center">
          {command.name}
          {command.isPremium && (
            <Star className="ml-2 text-gaming-accent" size={16} />
          )}
        </h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={copyCommand}
          className={`text-gray-400 hover:text-primary transition-all duration-200 ${
            isHovered ? "opacity-100" : "opacity-60"
          }`}
        >
          <Copy size={16} />
        </Button>
      </div>
      
      <p className="text-gray-400 mb-4">{command.description}</p>
      
      <div className="space-y-2 text-sm">
        {command.arguments && (
          <>
            <div><strong>arguments:</strong></div>
            <div className="text-gray-400">{command.arguments}</div>
          </>
        )}
        
        {command.permissions && (
          <>
            <div><strong>permissions:</strong></div>
            <div className={`${command.isPremium ? 'text-gaming-accent' : 'text-gray-400'}`}>
              {command.permissions}
            </div>
          </>
        )}
        
        {command.note && (
          <>
            <div><strong>note:</strong></div>
            <div className="text-gray-400">{command.note}</div>
          </>
        )}
      </div>
    </div>
  );
}
