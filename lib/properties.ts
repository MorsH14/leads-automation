export interface Property {
  id: number;
  title: string;
  category: string;
  location: string;
  price: string;
  numericPrice: number;
  description: string;
  img: string;
  beds: number;
  baths: number;
  area: string;
  status: string;
  type: string;
}

export const propertiesData: Property[] = [
  {
    id: 1,
    title: 'The Royal Penthouse',
    category: 'Elite Penthouse',
    location: 'London',
    price: '£12,500,000',
    numericPrice: 12500000,
    description: 'A sanctuary of sophistication perched above the historic streets of Knightsbridge. This 4,500 sq ft residence features floor-to-ceiling windows offering panoramic views of Hyde Park and the city skyline. Private elevator access, state-of-the-art automation, and 24/7 concierge service define this pinnacle of urban living.',
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
    beds: 5,
    baths: 6,
    area: '4,500 sq ft',
    status: 'Market Exclusive',
    type: 'Penthouse'
  },
  {
    id: 2,
    title: 'Modern Waterfront Villa',
    category: 'Luxury Villa',
    location: 'Dubai',
    price: '$8,200,000',
    numericPrice: 8200000,
    description: 'Experience architectural mastery on the iconic Palm Jumeirah. This modern villa seamlessly blends indoor and outdoor living with an infinity edge pool that flows towards the private beach. Featuring Italian finishes, professional-grade kitchens, and private wellness suites, it represents the ultimate global retreat.',
    img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop',
    beds: 6,
    baths: 7,
    area: '6,200 sq ft',
    status: 'Ready to Move',
    type: 'Villa'
  },
  {
    id: 3,
    title: 'Forest Estate Mansion',
    category: 'Modern Mansion',
    location: 'Toronto',
    price: 'C$15,800,000',
    numericPrice: 15800000,
    description: 'Nestled within the prestigious Bridle Path enclave, this limestone mansion is a testament to timeless elegance. Surrounded by lush forest trails, the estate provides unparalleled privacy. Features include a heated subterranean car gallery, grand ballroom, and a dedicated home cinema lounge.',
    img: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop',
    beds: 7,
    baths: 8,
    area: '12,000 sq ft',
    status: 'Newly Listed',
    type: 'Mansion'
  },
  {
    id: 4,
    title: 'Chelsea Garden Residence',
    category: 'Luxury Apartment',
    location: 'London',
    price: '£4,200,000',
    numericPrice: 4200000,
    description: 'A charming garden residence in the heart of Chelsea. Featuring private access to landscaped communal gardens and bespoke interior design.',
    img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop',
    beds: 3,
    baths: 2,
    area: '1,800 sq ft',
    status: 'Sold Out',
    type: 'Apartment'
  }
];
