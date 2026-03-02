'use client';
import React from 'react';
import { Container } from '@mui/material';
import {
    AboutSectionWrapper,
    SplitLayout,
    AboutImageContainer,
    AboutTextContent,
    AboutSectionTitle,
    AboutDescription,
    LearnMoreButton,
    SectionLabel
} from './About.styles';

const About = () => {
    return (
        <AboutSectionWrapper id="about">
            <Container maxWidth="xl">
                <SplitLayout>
                    {/* Image Left */}
                    <AboutImageContainer>
                        <img
                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
                            alt="Lead Automation Dashboard"
                        />
                    </AboutImageContainer>

                    {/* Text Right */}
                    <AboutTextContent>
                        <SectionLabel>Our Mission</SectionLabel>
                        <AboutSectionTitle variant="h2">
                            Built for Modern Real Estate Professionals
                        </AboutSectionTitle>
                        <AboutDescription variant="body1">
                            In a fast-paced market, speed is everything. Our lead automation system
                            is designed specifically for high-performing agents who can't afford
                            to let a single inquiry slip through the cracks.
                        </AboutDescription>
                        <AboutDescription variant="body1">
                            We help you eliminate missed opportunities, drastically reduce your
                            response time, and significantly increase deal conversion rates.
                            Our technology works in the background so you can focus on what
                            you do best: closing deals and building relationships.
                        </AboutDescription>

                        <LearnMoreButton variant="outlined">
                            See The Dashboard
                        </LearnMoreButton>
                    </AboutTextContent>
                </SplitLayout>
            </Container>
        </AboutSectionWrapper>
    );
};

export default About;
