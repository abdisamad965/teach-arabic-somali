import React, { useState } from 'react';
import CourseCard from '@/components/CourseCard';

const CoursesSection: React.FC = () => {
  const [language] = useState<'ar' | 'so'>('ar');

  const translations = {
    ar: {
      title: 'الدروس المتاحة',
      subtitle: 'تعلم العلوم الشرعية بطريقة منهجية ومتدرجة',
    },
    so: {
      title: 'Casharrada La Heli Karo',
      subtitle: 'Baro cilmiga Islaamka hab habeyn leh oo taxane ah',
    }
  };

  const courses = [
    {
      id: '1',
      title: {
        ar: 'دروس العقيدة',
        so: 'Duruus Caqiidah'
      },
      description: {
        ar: 'تعلم أصول العقيدة الإسلامية الصحيحة وفق منهج السلف الصالح',
        so: 'Baro aasaaska caqiidada Islaamka ee saxda ah sida salafka wanaagsan'
      },
      duration: '24',
      students: 1847,
      rating: 4.9,
      price: {
        ar: 'مجاني',
        so: 'Bilaash'
      },
      level: {
        ar: 'مبتدئ',
        so: 'Bilow'
      },
      category: 'عقيدة'
    },
    {
      id: '2',
      title: {
        ar: 'دروس التفسير',
        so: 'Duruus Tafsir'
      },
      description: {
        ar: 'فهم معاني القرآن الكريم وتدبر آياته العظيمة',
        so: 'Faham macnaha Quraanka Kariimka ah ee ayaadkiisa waaweyn'
      },
      duration: '36',
      students: 2156,
      rating: 4.8,
      price: {
        ar: '$97',
        so: '$97'
      },
      level: {
        ar: 'متوسط',
        so: 'Dhexe'
      },
      category: 'تفسير'
    },
    {
      id: '3',
      title: {
        ar: 'دروس الفقه',
        so: 'Duruus Fiqhi'
      },
      description: {
        ar: 'تعلم الأحكام الشرعية للعبادات والمعاملات',
        so: 'Baro xukumada sharciga ee cibaadada iyo macaamalka'
      },
      duration: '28',
      students: 1923,
      rating: 4.7,
      price: {
        ar: '$67',
        so: '$67'
      },
      level: {
        ar: 'متوسط',
        so: 'Dhexe'
      },
      category: 'فقه'
    },
    {
      id: '4',
      title: {
        ar: 'دروس اللغة العربية',
        so: 'Duruus Lugha'
      },
      description: {
        ar: 'إتقان اللغة العربية نحواً وصرفاً وبلاغة',
        so: 'Ku takhasuska luuqadda Carabiga naxwaha, sarfka iyo balaaghada'
      },
      duration: '42',
      students: 3241,
      rating: 4.9,
      price: {
        ar: '$127',
        so: '$127'
      },
      level: {
        ar: 'جميع المستويات',
        so: 'Dhammaan Heerarka'
      },
      category: 'لغة'
    }
  ];

  const t = translations[language];

  return (
    <section id="courses" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" dir={language === 'ar' ? 'rtl' : 'ltr'}>
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" dir={language === 'ar' ? 'rtl' : 'ltr'}>
            {t.subtitle}
          </p>
          
          {/* Decorative line */}
          <div className="flex items-center justify-center mt-8">
            <div className="h-px bg-gradient-islamic w-24"></div>
            <div className="w-3 h-3 bg-islamic-gold rounded-full mx-4"></div>
            <div className="h-px bg-gradient-islamic w-24"></div>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course) => (
            <CourseCard 
              key={course.id} 
              course={course} 
              language={language}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;