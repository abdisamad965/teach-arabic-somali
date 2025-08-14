import React from 'react';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

interface LanguageToggleProps {
  language: 'ar' | 'so';
  onLanguageChange: (lang: 'ar' | 'so') => void;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ language, onLanguageChange }) => {
  return (
    <div className="flex items-center gap-2 bg-card rounded-lg p-1 shadow-elegant">
      <Button
        variant={language === 'ar' ? 'islamic' : 'ghost'}
        size="sm"
        onClick={() => onLanguageChange('ar')}
        className="text-xs"
      >
        <Globe className="w-3 h-3 mr-1" />
        عربي
      </Button>
      <Button
        variant={language === 'so' ? 'islamic' : 'ghost'}
        size="sm"
        onClick={() => onLanguageChange('so')}
        className="text-xs"
      >
        <Globe className="w-3 h-3 mr-1" />
        Somali
      </Button>
    </div>
  );
};

export default LanguageToggle;