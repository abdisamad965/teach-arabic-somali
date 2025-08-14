import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Play, Star } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';

const HeroSection: React.FC = () => {
  const [language] = useState<'ar' | 'so'>('ar');

  const translations = {
    ar: {
      title: 'تعلم العلوم الإسلامية مع الشيخ الفاضل',
      subtitle: 'دروس متقنة في العقيدة والتفسير والفقه واللغة العربية',
      description: 'انضم إلى آلاف الطلاب الذين يتعلمون العلوم الشرعية بطريقة علمية منهجية',
      startLearning: 'ابدأ التعلم الآن',
      browseCourses: 'تصفح الدروس',
      studentsCount: 'طالب مسجل',
      coursesCount: 'درس متاح',
      rating: 'تقييم المنصة'
    },
    so: {
      title: 'Baro Cilmiga Islaamka ee Shaykh',
      subtitle: 'Cashaarro qoto dheer oo ku saabsan Caqiidada, Tafsirka, Fiqhiga iyo Luuqadda Carabiga',
      description: 'Ku biir kumanaan ardey ee baraya cilmiga Islaamka hab cilmi ah',
      startLearning: 'Bilow Waxbarasho',
      browseCourses: 'Casharrada',
      studentsCount: 'Ardey',
      coursesCount: 'Cashar',
      rating: 'Qiimayn'
    }
  };

  const t = translations[language];

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-right" dir={language === 'ar' ? 'rtl' : 'ltr'}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {t.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 font-medium">
              {t.subtitle}
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-lg mx-auto lg:mx-0">
              {t.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
              <Button variant="gold" size="xl" className="group">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                {t.startLearning}
              </Button>
              <Button variant="hero" size="xl">
                {t.browseCourses}
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-right">
                <div className="text-2xl font-bold text-white">2,847</div>
                <div className="text-white/70 text-sm">{t.studentsCount}</div>
              </div>
              <div className="text-center lg:text-right">
                <div className="text-2xl font-bold text-white">156</div>
                <div className="text-white/70 text-sm">{t.coursesCount}</div>
              </div>
              <div className="text-center lg:text-right">
                <div className="flex items-center justify-center lg:justify-end gap-1">
                  <Star className="w-5 h-5 text-islamic-gold fill-islamic-gold" />
                  <span className="text-2xl font-bold text-white">4.9</span>
                </div>
                <div className="text-white/70 text-sm">{t.rating}</div>
              </div>
            </div>
          </div>

          {/* Right Content - Instructor Card */}
          <div className="flex justify-center lg:justify-start">
            <Card className="p-8 bg-card/90 backdrop-blur-sm shadow-islamic border-islamic-green/20 max-w-md">
              <div className="text-center">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-islamic-gold shadow-gold">
                  <img 
                    src="/lovable-uploads/4de3754a-0fea-461a-bc12-96aaac7e014a.png"
                    alt="الشيخ المعلم"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2" dir={language === 'ar' ? 'rtl' : 'ltr'}>
                  {language === 'ar' ? 'الشيخ الدكتور محمد' : 'Shaykh Dr. Mohamed'}
                </h3>
                <p className="text-muted-foreground mb-4" dir={language === 'ar' ? 'rtl' : 'ltr'}>
                  {language === 'ar' 
                    ? 'خبير في العلوم الشرعية واللغة العربية' 
                    : 'Khibir ah Cilmiga Islaamka iyo Luuqadda Carabiga'
                  }
                </p>
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-islamic-gold fill-islamic-gold" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground" dir={language === 'ar' ? 'rtl' : 'ltr'}>
                  {language === 'ar' 
                    ? 'أكثر من 15 سنة خبرة في التدريس' 
                    : '15+ sanado waayo-aragnimo waxbarashada'
                  }
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;