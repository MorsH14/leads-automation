'use client';
import React from 'react';
import Hero from '@/components/hero/Hero';
import Properties from '@/components/properties/Properties';
import Features from '@/components/features/Features';
import About from '@/components/about/About';
import Testimonials from '@/components/testimonials/Testimonials';
import Contact from '@/components/contact/Contact';
import Footer from '@/components/footer/Footer';
import { propertiesData } from '@/lib/properties';

export default function Home() {
  return (
    <main>
      <Hero />
      <Properties properties={propertiesData} />
      <Features />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
