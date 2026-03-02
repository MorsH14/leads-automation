'use client';
import { useState } from 'react';
import { Grid, Fade } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import KingBedIcon from '@mui/icons-material/KingBed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloseIcon from '@mui/icons-material/Close';
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
    CardButton,
    StyledDialog,
    DialogWrapper,
    DialogImageArea,
    DialogTextArea,
    CloseIconButton,
    DialogPropertyTitle,
    DialogPropertyPrice,
    DialogDescription,
    InquireButton,
    GridItemWrapper,
    LocationTextDialog,
    FeaturesContainer,
    FeatureItemVertical,
    FeatureCaption,
    EmptyBox
} from './Properties.styles';
import { Property } from '@/lib/properties';

interface PropertiesProps {
    properties: Property[];
}

const Properties = ({ properties }: PropertiesProps) => {
    const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

    const handleOpenExplore = (property: Property) => {
        setSelectedProperty(property);
    };

    const handleClose = () => {
        setSelectedProperty(null);
    };

    const handleInquiry = () => {
        handleClose();
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <PropertiesSectionWrapper id="properties">
            <SectionContainer maxWidth="xl">
                <SectionLabel>Curated Selection</SectionLabel>
                <SectionTitle variant="h2">Featured Luxury Estates</SectionTitle>

                {properties.length === 0 ? (
                    <EmptyBox>
                        <PropertyName variant="h5">
                            No properties found matching your criteria.
                        </PropertyName>
                    </EmptyBox>
                ) : (
                    <Grid container spacing={{ xs: 3, sm: 4, md: 5 }} justifyContent="center">
                        {properties.map((property) => (
                            <Grid
                                size={{ xs: 12, sm: 6, md: 4 }}
                                key={property.id}
                            >
                                <GridItemWrapper>
                                    <PropertyCard elevation={0} onClick={() => handleOpenExplore(property)}>
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
                                </GridItemWrapper>
                            </Grid>
                        ))}
                    </Grid>
                )}
            </SectionContainer>

            {/* Property Details Modal */}
            <StyledDialog
                open={Boolean(selectedProperty)}
                onClose={handleClose}
                TransitionComponent={Fade}
                transitionDuration={500}
            >
                {selectedProperty && (
                    <DialogWrapper>
                        <DialogImageArea>
                            <StyledCardMedia
                                image={selectedProperty.img}
                                title={selectedProperty.title}
                            />
                            <CloseIconButton onClick={handleClose}>
                                <CloseIcon />
                            </CloseIconButton>
                        </DialogImageArea>

                        <DialogTextArea>
                            <PropertyCategory variant="overline">
                                {selectedProperty.category}
                            </PropertyCategory>
                            <DialogPropertyTitle variant="h2">
                                {selectedProperty.title}
                            </DialogPropertyTitle>
                            <DialogPropertyPrice variant="h4">
                                {selectedProperty.price}
                            </DialogPropertyPrice>

                            <LocationTextDialog variant="body1">
                                <LocationOnIcon fontSize="small" />
                                {selectedProperty.location}
                            </LocationTextDialog>

                            <DialogDescription variant="body1">
                                {selectedProperty.description}
                            </DialogDescription>

                            <FeaturesContainer container spacing={2}>
                                <Grid size={4}>
                                    <FeatureItemVertical>
                                        <KingBedIcon />
                                        <FeatureCaption variant="caption">{selectedProperty.beds} Beds</FeatureCaption>
                                    </FeatureItemVertical>
                                </Grid>
                                <Grid size={4}>
                                    <FeatureItemVertical>
                                        <BathtubIcon />
                                        <FeatureCaption variant="caption">{selectedProperty.baths} Baths</FeatureCaption>
                                    </FeatureItemVertical>
                                </Grid>
                                <Grid size={4}>
                                    <FeatureItemVertical>
                                        <SquareFootIcon />
                                        <FeatureCaption variant="caption">{selectedProperty.area}</FeatureCaption>
                                    </FeatureItemVertical>
                                </Grid>
                            </FeaturesContainer>

                            <InquireButton
                                variant="contained"
                                size="large"
                                onClick={handleInquiry}
                            >
                                Inquire About Asset
                            </InquireButton>
                        </DialogTextArea>
                    </DialogWrapper>
                )}
            </StyledDialog>
        </PropertiesSectionWrapper>
    );
};

export default Properties;
