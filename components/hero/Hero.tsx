'use client';
import React from 'react';
import { MenuItem, TextField } from '@mui/material';
import {
    HeroSection,
    HeroContainer,
    HeroTitle,
    HeroSubtitle,
    MainCTA,
    SearchBarWrapper,
    SearchButton
} from './Hero.styles';

interface HeroProps {
    filters: {
        location: string;
        type: string;
        budget: string;
    };
    onFilterChange: (filters: any) => void;
}

const Hero = ({ filters, onFilterChange }: HeroProps) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        onFilterChange({ [name]: value });
    };

    const handleSearch = () => {
        const propertiesSection = document.getElementById('properties');
        if (propertiesSection) {
            propertiesSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <HeroSection>
            <HeroContainer maxWidth="xl">
                <HeroTitle variant="h1">Find Your Dream Property</HeroTitle>
                <HeroSubtitle variant="h5">
                    Experience the pinnacle of luxury living in world-class destinations.
                    The finest residences in London, Toronto, and Dubai.
                </HeroSubtitle>
                <MainCTA variant="contained" size="large" onClick={handleSearch}>
                    Discover Collections
                </MainCTA>

                <SearchBarWrapper>
                    <TextField
                        select
                        label="Location"
                        fullWidth
                        name="location"
                        value={filters.location}
                        onChange={handleChange}
                        variant="outlined"
                    >
                        <MenuItem value="All">All Locations</MenuItem>
                        <MenuItem value="London">London, UK</MenuItem>
                        <MenuItem value="Toronto">Toronto, Canada</MenuItem>
                        <MenuItem value="Dubai">Dubai, UAE</MenuItem>
                    </TextField>

                    <TextField
                        select
                        label="Property Type"
                        fullWidth
                        name="type"
                        value={filters.type}
                        onChange={handleChange}
                        variant="outlined"
                    >
                        <MenuItem value="All">All Types</MenuItem>
                        <MenuItem value="Villa">Luxury Villa</MenuItem>
                        <MenuItem value="Penthouse">Elite Penthouse</MenuItem>
                        <MenuItem value="Mansion">Modern Mansion</MenuItem>
                        <MenuItem value="Apartment">Luxury Apartment</MenuItem>
                    </TextField>

                    {/* <TextField
                        label="Max Budget"
                        fullWidth
                        name="budget"
                        value={filters.budget}
                        onChange={handleChange}
                        placeholder="e.g. 10000000"
                        variant="outlined"
                        type="number"
                    /> */}

                    <SearchButton variant="contained" fullWidth onClick={handleSearch}>
                        Filter Results
                    </SearchButton>
                </SearchBarWrapper>
            </HeroContainer>
        </HeroSection>
    );
};

export default Hero;
