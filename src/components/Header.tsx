import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import LanguageToggle from '@/components/LanguageToggle';
import { BookOpen, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [language, setLanguage] = useState<'ar' | 'so'>('ar');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const translations = {
    ar: {
      title: 'معهد التعليم الإسلامي',
      home: 'الرئيسية',
      courses: 'الدروس',
      about: 'نبذة',
      contact: 'اتصال',
      login: 'دخول',
      register: 'تسجيل'
    },
    so: {
      title: 'Machadka Waxbarashada Islaamka',
      home: 'Guriga',
      courses: 'Casharrada',
      about: 'Naga',
      contact: 'Xiriir',
      login: 'Gal',
      register: 'Isciiladii'
    }
  };

  const t = translations[language];

  return (
    <header className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-elegant">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-islamic rounded-full flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-foreground" dir={language === 'ar' ? 'rtl' : 'ltr'}>
                {t.title}
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-foreground hover:text-primary transition-colors">{t.home}</a>
            <a href="#courses" className="text-foreground hover:text-primary transition-colors">{t.courses}</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">{t.about}</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">{t.contact}</a>
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <LanguageToggle language={language} onLanguageChange={setLanguage} />
            
            <div className="hidden md:flex items-center gap-2">
              <Button variant="ghost" size="sm">{t.login}</Button>
              <Button variant="islamic" size="sm">{t.register}</Button>
            </div>

            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <a href="#" className="text-foreground hover:text-primary transition-colors">{t.home}</a>
              <a href="#courses" className="text-foreground hover:text-primary transition-colors">{t.courses}</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">{t.about}</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">{t.contact}</a>
              <div className="flex gap-2 pt-2">
                <Button variant="ghost" size="sm" className="flex-1">{t.login}</Button>
                <Button variant="islamic" size="sm" className="flex-1">{t.register}</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;