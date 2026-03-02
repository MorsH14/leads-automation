'use client';
import React from 'react';
import { Container } from '@mui/material';
import BoltIcon from '@mui/icons-material/Bolt';
import AutoModeIcon from '@mui/icons-material/AutoMode';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
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
        icon: <BoltIcon />,
        title: 'Instant Lead Capture',
        description: 'Every inquiry is captured automatically and stored securely in your private database.'
    },
    {
        id: 2,
        icon: <AutoModeIcon />,
        title: 'Automated Follow-Ups',
        description: 'Respond instantly via email or DM without manual effort, ensuring you never miss a beat.'
    },
    {
        id: 3,
        icon: <DashboardIcon />,
        title: 'Organized Dashboard',
        description: 'Manage all your leads, properties, and client interactions in one clean, intuitive system.'
    },
    {
        id: 4,
        icon: <TrendingUpIcon />,
        title: 'Higher Conversion Rates',
        description: 'Faster response times and organized follow-ups directly lead to more closed deals.'
    }
];

const Features = () => {
    return (
        <FeaturesSectionWrapper id="why-choose-us">
            <Container maxWidth="xl">
                <SectionLabel>Performance Focused</SectionLabel>
                <SectionTitle variant="h2">
                    Engineered for Modern Agents
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
