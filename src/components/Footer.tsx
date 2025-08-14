import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { BookOpen, Mail, Phone, MapPin, Facebook, Youtube, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const [language] = useState<'ar' | 'so'>('ar');

  const translations = {
    ar: {
      title: 'معهد التعليم الإسلامي',
      description: 'منصة تعليمية متخصصة في العلوم الشرعية واللغة العربية',
      newsletter: 'النشرة الإخبارية',
      newsletterDesc: 'اشترك ليصلك كل جديد',
      subscribe: 'اشتراك',
      email: 'البريد الإلكتروني',
      quickLinks: 'روابط سريعة',
      home: 'الرئيسية',
      courses: 'الدروس',
      about: 'نبذة',
      contact: 'اتصال',
      contactInfo: 'معلومات التواصل',
      followUs: 'تابعونا',
      rights: 'جميع الحقوق محفوظة',
    },
    so: {
      title: 'Machadka Waxbarashada Islaamka',
      description: 'Baraan-celiso takhasusan cilmiga Islaamka iyo luuqadda Carabiga',
      newsletter: 'Warqadda Wararka',
      newsletterDesc: 'Isciiladii si aad u hesho warar cusub',
      subscribe: 'Isciiladii',
      email: 'Imeyl',
      quickLinks: 'Linkiyada Degdega',
      home: 'Guriga',
      courses: 'Casharrada',
      about: 'Naga',
      contact: 'Xiriir',
      contactInfo: 'Macluumaadka Xidhiidhka',
      followUs: 'Na Raac',
      rights: 'Dhammaan xuquuqda way dhowran yihiin',
    }
  };

  const t = translations[language];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 py-12">
          <Card className="bg-islamic-green-light border-islamic-green/20 p-8">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-islamic-green mb-4" dir={language === 'ar' ? 'rtl' : 'ltr'}>
                {t.newsletter}
              </h3>
              <p className="text-muted-foreground mb-6" dir={language === 'ar' ? 'rtl' : 'ltr'}>
                {t.newsletterDesc}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input 
                  placeholder={t.email}
                  className="flex-1"
                  dir={language === 'ar' ? 'rtl' : 'ltr'}
                />
                <Button variant="islamic">
                  <Mail className="w-4 h-4 mr-2" />
                  {t.subscribe}
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-islamic-gold rounded-full flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold" dir={language === 'ar' ? 'rtl' : 'ltr'}>
                {t.title}
              </h3>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md" dir={language === 'ar' ? 'rtl' : 'ltr'}>
              {t.description}
            </p>
            
            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4" dir={language === 'ar' ? 'rtl' : 'ltr'}>
                {t.followUs}
              </h4>
              <div className="flex gap-3">
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-islamic-gold hover:text-white">
                  <Youtube className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-islamic-gold hover:text-white">
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-islamic-gold hover:text-white">
                  <Twitter className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6" dir={language === 'ar' ? 'rtl' : 'ltr'}>
              {t.quickLinks}
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-islamic-gold transition-colors" dir={language === 'ar' ? 'rtl' : 'ltr'}>
                  {t.home}
                </a>
              </li>
              <li>
                <a href="#courses" className="text-primary-foreground/80 hover:text-islamic-gold transition-colors" dir={language === 'ar' ? 'rtl' : 'ltr'}>
                  {t.courses}
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-islamic-gold transition-colors" dir={language === 'ar' ? 'rtl' : 'ltr'}>
                  {t.about}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-islamic-gold transition-colors" dir={language === 'ar' ? 'rtl' : 'ltr'}>
                  {t.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-6" dir={language === 'ar' ? 'rtl' : 'ltr'}>
              {t.contactInfo}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-islamic-gold" />
                <span className="text-primary-foreground/80 text-sm">info@islamiclearning.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-islamic-gold" />
                <span className="text-primary-foreground/80 text-sm">+252 61 1234567</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-islamic-gold" />
                <span className="text-primary-foreground/80 text-sm" dir={language === 'ar' ? 'rtl' : 'ltr'}>
                  {language === 'ar' ? 'مقديشو، الصومال' : 'Muqdisho, Soomaaliya'}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center text-primary-foreground/60" dir={language === 'ar' ? 'rtl' : 'ltr'}>
            © 2024 {t.title}. {t.rights}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;