'use client';
import React from 'react';
import { Container } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import {
    TestimonialsSectionWrapper,
    SectionTitle,
    SectionLabel,
    TestimonialsGrid,
    TestimonialCard,
    QuoteWrapper,
    TestimonialText,
    UserProfileWrapper,
    UserAvatar,
    UserDetails,
    UserName,
    UserRole
} from './Testimonials.styles';

const testimonialsData = [
    {
        id: 1,
        name: 'Victoria Sinclair',
        role: 'Managing Director, London Fine Arts',
        text: 'Their market insight during the acquisition of our Mayfair property was exceptional. The level of privacy and professionalism exceeded every expectation.',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop'
    },
    {
        id: 2,
        name: 'Alexander Sterling',
        role: 'Private Investor, Toronto',
        text: 'A truly bespoke experience. They didn’t just find me a home; they identified a high-yield asset that fit perfectly into my diversified portfolio.',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: 3,
        name: 'Fatima Al Zarooni',
        role: 'Strategic Partnerships, Dubai',
        text: 'Seamless transition across borders. Their ability to handle luxury acquisitions globally made my transition to Dubai entirely effortless.',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop'
    }
];

const Testimonials = () => {
    return (
        <TestimonialsSectionWrapper id="testimonials">
            <Container maxWidth="xl">
                <SectionLabel>Client Perspectives</SectionLabel>
                <SectionTitle variant="h2">
                    Distinguished Testimonials
                </SectionTitle>

                <TestimonialsGrid>
                    {testimonialsData.map((testimonial) => (
                        <TestimonialCard key={testimonial.id}>
                            <QuoteWrapper>
                                <FormatQuoteIcon fontSize="inherit" />
                            </QuoteWrapper>

                            <TestimonialText variant="body1">
                                {testimonial.text}
                            </TestimonialText>

                            <UserProfileWrapper>
                                <UserAvatar src={testimonial.avatar} />
                                <UserDetails>
                                    <UserName variant="h6">{testimonial.name}</UserName>
                                    <UserRole variant="body2">{testimonial.role}</UserRole>
                                </UserDetails>
                            </UserProfileWrapper>
                        </TestimonialCard>
                    ))}
                </TestimonialsGrid>
            </Container>
        </TestimonialsSectionWrapper>
    );
};

export default Testimonials;
