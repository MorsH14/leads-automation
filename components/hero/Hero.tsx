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

const Hero = () => {
    return (
        <HeroSection>
            <HeroContainer maxWidth="xl">
                <HeroTitle variant="h1">Find Your Dream Property</HeroTitle>
                <HeroSubtitle variant="h5">
                    Experience the pinnacle of luxury living in world-class destinations.
                    The finest residences in London, Toronto, and Dubai.
                </HeroSubtitle>
                <MainCTA variant="contained" size="large">
                    Discover Collections
                </MainCTA>

                <SearchBarWrapper>
                    <TextField
                        select
                        label="Location"
                        fullWidth
                        defaultValue="London"
                        variant="outlined"
                    >
                        <MenuItem value="London">London, UK</MenuItem>
                        <MenuItem value="Toronto">Toronto, Canada</MenuItem>
                        <MenuItem value="Dubai">Dubai, UAE</MenuItem>
                    </TextField>

                    <TextField
                        select
                        label="Property Type"
                        fullWidth
                        defaultValue="Villa"
                        variant="outlined"
                    >
                        <MenuItem value="Villa">Luxury Villa</MenuItem>
                        <MenuItem value="Penthouse">Elite Penthouse</MenuItem>
                        <MenuItem value="Mansion">Modern Mansion</MenuItem>
                    </TextField>

                    <TextField
                        label="Budget"
                        fullWidth
                        placeholder="Price Range"
                        variant="outlined"
                    />

                    <SearchButton variant="contained" fullWidth>
                        Search
                    </SearchButton>
                </SearchBarWrapper>
            </HeroContainer>
        </HeroSection>
    );
};

export default Hero;
