import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@shared/schema";

interface FaqItemProps {
  faqItem: FaqItem;
}

export default function FaqItemComponent({ faqItem }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="glassmorphism rounded-lg overflow-hidden">
      <button
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-surface/30 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium">{faqItem.question}</span>
        <ChevronDown 
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          size={20}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-4 text-gray-400 animate-fade-in-up">
          {faqItem.answer}
        </div>
      )}
    </div>
  );
}
