'use client';
import React from 'react';
import { Grid } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import KingBedIcon from '@mui/icons-material/KingBed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {
    PropertiesSectionWrapper,
    SectionContainer,
    SectionLabel,
    SectionTitle,
    PropertyCard,
    ImageWrapper,
    StyledCardMedia,
    StatusChip,
    PriceBadge,
    CardContentWrapper,
    PropertyCategory,
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
        category: 'Elite Penthouse',
        location: 'Knightsbridge, London',
        price: '£12,500,000',
        img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
        beds: 5,
        baths: 6,
        area: '4,500 sq ft',
        status: 'Market Exclusive'
    },
    {
        id: 2,
        title: 'Modern Waterfront Villa',
        category: 'Luxury Villa',
        location: 'Palm Jumeirah, Dubai',
        price: '$8,200,000',
        img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop',
        beds: 6,
        baths: 7,
        area: '6,200 sq ft',
        status: 'Ready to Move'
    },
    {
        id: 3,
        title: 'Forest Estate Mansion',
        category: 'Modern Mansion',
        location: 'Bridle Path, Toronto',
        price: 'C$15,800,000',
        img: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop',
        beds: 7,
        baths: 8,
        area: '12,000 sq ft',
        status: 'Newly Listed'
    },
];

const Properties = () => {
    return (
        <PropertiesSectionWrapper id="properties">
            <SectionContainer maxWidth="xl">
                <SectionLabel>Curated Selection</SectionLabel>
                <SectionTitle variant="h2">Featured Luxury Estates</SectionTitle>

                <Grid container spacing={{ xs: 3, sm: 4, md: 5 }} justifyContent="center">
                    {propertiesData.map((property) => (
                        <Grid item xs={12} sm={6} md={4} key={property.id} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <PropertyCard elevation={0}>
                                <ImageWrapper>
                                    <StyledCardMedia
                                        className="card-image"
                                        image={property.img}
                                        title={property.title}
                                    />
                                    <StatusChip label={property.status} />
                                    <PriceBadge>{property.price}</PriceBadge>
                                </ImageWrapper>

                                <CardContentWrapper>
                                    <PropertyCategory variant="overline">
                                        {property.category}
                                    </PropertyCategory>
                                    <PropertyName variant="h3">{property.title}</PropertyName>
                                    <LocationText variant="body2">
                                        <LocationOnIcon fontSize="small" color="inherit" />
                                        {property.location}
                                    </LocationText>

                                    <FeaturesGrid>
                                        <FeatureItem>
                                            <KingBedIcon />
                                            <span>{property.beds}</span>
                                        </FeatureItem>
                                        <FeatureItem>
                                            <BathtubIcon />
                                            <span>{property.baths}</span>
                                        </FeatureItem>
                                        <FeatureItem>
                                            <SquareFootIcon />
                                            <span>{property.area}</span>
                                        </FeatureItem>
                                    </FeaturesGrid>

                                    <CardButton
                                        variant="outlined"
                                        className="view-btn"
                                        endIcon={<ArrowForwardIcon />}
                                    >
                                        Examine Asset
                                    </CardButton>
                                </CardContentWrapper>
                            </PropertyCard>
                        </Grid>
                    ))}
                </Grid>
            </SectionContainer>
        </PropertiesSectionWrapper>
    );
};

export default Properties;
