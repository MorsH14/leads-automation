'use client';
import React from 'react';
import { Container } from '@mui/material';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import PublicIcon from '@mui/icons-material/Public';
import SecurityIcon from '@mui/icons-material/Security';
import {
    FeaturesSectionWrapper,
    SectionTitle,
    FeatureGridWrapper,
    FeatureItemCard,
    IconContainer,
    FeatureTitle,
    FeatureDescription,
    SectionLabel
} from './Features.styles';

const featuresData = [
    {
        id: 1,
        icon: <WorkspacePremiumIcon />,
        title: 'Expert Market Insight',
        description: 'Deep local knowledge in three of the world\'s most competitive real estate markets: London, Toronto, and Dubai.'
    },
    {
        id: 2,
        icon: <PublicIcon />,
        title: 'Global Network',
        description: 'Exclusive access to off-market properties and international investors, ensuring seamless cross-border transactions.'
    },
    {
        id: 3,
        icon: <SecurityIcon />,
        title: 'Bespoke Privacy',
        description: 'Ultra-secure handling of high-value asset acquisitions with complete confidentiality for every distinguished client.'
    }
];

const Features = () => {
    return (
        <FeaturesSectionWrapper id="why-choose-us">
            <Container maxWidth="xl">
                <SectionLabel>Our Excellence</SectionLabel>
                <SectionTitle variant="h2">
                    Why Discerning Clients Choose Us
                </SectionTitle>

                <FeatureGridWrapper>
                    {featuresData.map((feature) => (
                        <FeatureItemCard key={feature.id} elevation={0}>
                            <IconContainer>
                                {feature.icon}
                            </IconContainer>
                            <FeatureTitle variant="h5">
                                {feature.title}
                            </FeatureTitle>
                            <FeatureDescription variant="body1">
                                {feature.description}
                            </FeatureDescription>
                        </FeatureItemCard>
                    ))}
                </FeatureGridWrapper>
            </Container>
        </FeaturesSectionWrapper>
    );
};

export default Features;
