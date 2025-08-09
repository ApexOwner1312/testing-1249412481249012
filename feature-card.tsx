import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  children?: ReactNode;
  iconColor?: string;
  className?: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  children,
  iconColor = "from-primary to-success",
  className = ""
}: FeatureCardProps) {
  return (
    <div className={`glassmorphism rounded-2xl p-8 hover:bg-surface/50 transition-all duration-300 group ${className}`}>
      <div className={`w-16 h-16 bg-gradient-to-br ${iconColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
        <Icon className="text-2xl text-white" size={32} />
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-300 mb-6">{description}</p>
      {children}
    </div>
  );
}
