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
    LearnMoreButton
} from './About.styles';

const About = () => {
    return (
        <AboutSectionWrapper id="about">
            <Container maxWidth="xl">
                <SplitLayout>
                    {/* Image Left */}
                    <AboutImageContainer>
                        <img
                            src="https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=1984&auto=format&fit=crop"
                            alt="Luxury Real Estate Advisory"
                        />
                    </AboutImageContainer>

                    {/* Text Right */}
                    <AboutTextContent>
                        <AboutSectionTitle variant="h2">
                            Defining the Global Standard for Luxury Real Estate
                        </AboutSectionTitle>
                        <AboutDescription variant="body1">
                            With over two decades of unmatched expertise, we bridge the gap between
                            discerning investors and the world’s most prestigious property markets.
                            Our advisory goes beyond simple transactions; we curate lifestyle
                            investments that define legacy.
                        </AboutDescription>
                        <AboutDescription variant="body1">
                            From historic estates in London to modern vertical paradises in Dubai
                            and waterfront retreats in Toronto, our portfolio is as diverse as it
                            is exclusive. We provide a bespoke service designed specifically for
                            high-net-worth individuals and family offices globally.
                        </AboutDescription>

                        <LearnMoreButton variant="outlined">
                            Our Vision & Philosophy
                        </LearnMoreButton>
                    </AboutTextContent>
                </SplitLayout>
            </Container>
        </AboutSectionWrapper>
    );
};

export default About;
