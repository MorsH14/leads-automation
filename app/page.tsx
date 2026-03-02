'use client';
import React, { useState, useMemo } from 'react';
import Hero from '@/components/hero/Hero';
import Properties from '@/components/properties/Properties';
import Features from '@/components/features/Features';
import About from '@/components/about/About';
import Testimonials from '@/components/testimonials/Testimonials';
import Contact from '@/components/contact/Contact';
import Footer from '@/components/footer/Footer';
import { propertiesData } from '@/lib/properties';

export default function Home() {
  const [filters, setFilters] = useState({
    location: 'All',
    type: 'All',
    budget: '',
  });

  const filteredProperties = useMemo(() => {
    return propertiesData.filter((property) => {
      const locationMatch = filters.location === 'All' || property.location === filters.location;
      const typeMatch = filters.type === 'All' || property.type === filters.type;

      let budgetMatch = true;
      if (filters.budget) {
        const maxBudget = parseInt(filters.budget.replace(/[^0-9]/g, ''), 10);
        if (!isNaN(maxBudget)) {
          budgetMatch = property.numericPrice <= maxBudget;
        }
      }

      return locationMatch && typeMatch && budgetMatch;
    });
  }, [filters]);

  const handleFilterChange = (newFilters: any) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  return (
    <main>
      <Hero onFilterChange={handleFilterChange} filters={filters} />
      <Properties properties={filteredProperties} />
      <Features />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
