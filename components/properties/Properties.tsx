'use client';
import React from 'react';
import { Container, Grid, Box } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import {
    PropertiesSectionWrapper,
    SectionLabel,
    SectionTitle,
    PropertyCard,
    StyledCardMedia,
    PriceBadge,
    CardContentWrapper,
    PropertyName,
    LocationText,
    FeaturesGrid,
    FeatureItem,
    CardButton
} from './Properties.styles';

const propertiesData = [
    {
        id: 1,
        title: 'The Royal Penthouse',
        location: 'Knightsbridge, London',
        price: '£12,500,000',
        img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
        beds: 5,
        baths: 6,
        area: '4,500 sq ft',
    },
    {
        id: 2,
        title: 'Modern Waterfront Villa',
        location: 'Palm Jumeirah, Dubai',
        price: '$8,200,000',
        img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop',
        beds: 6,
        baths: 7,
        area: '6,200 sq ft',
    },
    {
        id: 3,
        title: 'Forest Estate Mansion',
        location: 'Bridle Path, Toronto',
        price: 'C$15,800,000',
        img: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop',
        beds: 7,
        baths: 8,
        area: '12,000 sq ft',
    },
];

const Properties = () => {
    return (
        <PropertiesSectionWrapper id="properties">
            <Container maxWidth="xl">
                <SectionLabel>Curated Selection</SectionLabel>
                <SectionTitle variant="h2">Featured Luxury Estates</SectionTitle>

                <Grid container spacing={4}>
                    {propertiesData.map((property) => (
                        <Grid item xs={12} sm={6} md={4} key={property.id}>
                            <PropertyCard>
                                <StyledCardMedia
                                    image={property.img}
                                    title={property.title}
                                >
                                    <PriceBadge>{property.price}</PriceBadge>
                                </StyledCardMedia>

                                <CardContentWrapper>
                                    <PropertyName variant="h4">{property.title}</PropertyName>
                                    <LocationText variant="body2">
                                        <LocationOnIcon fontSize="small" color="inherit" />
                                        {property.location}
                                    </LocationText>

                                    <FeaturesGrid>
                                        <FeatureItem>
                                            <BedIcon />
                                            <span>{property.beds} Beds</span>
                                        </FeatureItem>
                                        <FeatureItem>
                                            <BathtubIcon />
                                            <span>{property.baths} Baths</span>
                                        </FeatureItem>
                                        <FeatureItem>
                                            <SquareFootIcon />
                                            <span>{property.area}</span>
                                        </FeatureItem>
                                    </FeaturesGrid>

                                    <CardButton variant="contained" fullWidth>
                                        View Details
                                    </CardButton>
                                </CardContentWrapper>
                            </PropertyCard>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </PropertiesSectionWrapper>
    );
};

export default Properties;
