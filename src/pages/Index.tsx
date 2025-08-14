import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CoursesSection from '@/components/CoursesSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CoursesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
