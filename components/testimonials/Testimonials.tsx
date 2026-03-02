'use client';
import React from 'react';
import { Container } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import {
    TestimonialsSectionWrapper,
    SectionTitle,
    SectionLabel,
    TestimonialsGrid,
    TestimonialCard,
    TestimonialText,
    UserProfileWrapper,
    UserAvatar,
    UserDetails,
    UserName,
    UserRole,
    RatingWrapper
} from './Testimonials.styles';

const testimonialsData = [
    {
        id: 1,
        name: 'Daniel Carter',
        role: 'London Estate Agent',
        text: 'Since implementing this system, my response time improved instantly. I closed 2 additional deals in one month simply because I was the first to respond.',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
        rating: 5
    },
    {
        id: 2,
        name: 'Sarah Jenkins',
        role: 'Toronto Real Estate Expert',
        text: 'The lead dashboard is a game changer. All my inquiries are organized in one place, and the automated follow-ups feel incredibly natural.',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop',
        rating: 5
    },
    {
        id: 3,
        name: 'Marcus Thorne',
        role: 'Dubai Luxury Realtor',
        text: 'No leads are left behind anymore. The system captures everything, and my clients are amazed at how quickly I get back to them.',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop',
        rating: 5
    }
];

const Testimonials = () => {
    return (
        <TestimonialsSectionWrapper id="testimonials">
            <Container maxWidth="xl">
                <SectionLabel>Partner Stories</SectionLabel>
                <SectionTitle variant="h2">
                    Trusted by Top Agents
                </SectionTitle>

                <TestimonialsGrid>
                    {testimonialsData.map((testimonial) => (
                        <TestimonialCard key={testimonial.id}>
                            <RatingWrapper>
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <StarIcon key={i} fontSize="small" />
                                ))}
                            </RatingWrapper>

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
