import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Star, BookOpen } from 'lucide-react';

interface Course {
  id: string;
  title: {
    ar: string;
    so: string;
  };
  description: {
    ar: string;
    so: string;
  };
  duration: string;
  students: number;
  rating: number;
  price: {
    ar: string;
    so: string;
  };
  level: {
    ar: string;
    so: string;
  };
  category: string;
}

interface CourseCardProps {
  course: Course;
  language: 'ar' | 'so';
}

const CourseCard: React.FC<CourseCardProps> = ({ course, language }) => {
  const translations = {
    ar: {
      enroll: 'التسجيل في الدرس',
      students: 'طالب',
      duration: 'ساعة',
      level: 'المستوى',
    },
    so: {
      enroll: 'Isciiladii Casharka',
      students: 'Ardey',
      duration: 'Saac',
      level: 'Heer',
    }
  };

  const t = translations[language];

  return (
    <Card className="group hover:shadow-islamic transition-all duration-300 hover:-translate-y-1 bg-card border-border/50">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start mb-3">
          <Badge variant="secondary" className="bg-islamic-green-light text-islamic-green">
            {course.category}
          </Badge>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-islamic-gold fill-islamic-gold" />
            <span className="text-sm font-medium">{course.rating}</span>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors" dir={language === 'ar' ? 'rtl' : 'ltr'}>
          {course.title[language]}
        </h3>
        
        <p className="text-muted-foreground text-sm line-clamp-2" dir={language === 'ar' ? 'rtl' : 'ltr'}>
          {course.description[language]}
        </p>
      </CardHeader>

      <CardContent className="pb-4">
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{course.duration} {t.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{course.students.toLocaleString()} {t.students}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <Badge variant="outline" className="text-xs">
              {t.level}: {course.level[language]}
            </Badge>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-islamic-green" dir={language === 'ar' ? 'rtl' : 'ltr'}>
              {course.price[language]}
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <Button variant="islamic" className="w-full group-hover:bg-gradient-gold transition-all duration-300">
          <BookOpen className="w-4 h-4 mr-2" />
          {t.enroll}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;