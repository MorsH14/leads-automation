'use client';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {
    HeroSection,
    HeroContainer,
    HeroTitle,
    HeroSubtitle,
    CTAWrapper,
    PrimaryCTA,
    SecondaryCTA,
    TrustIndicators,
    TrustItem
} from './Hero.styles';

const Hero = () => {
    const scrollToWorks = () => {
        const propertiesSection = document.getElementById('properties');
        if (propertiesSection) {
            propertiesSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToDemo = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <HeroSection>
            <HeroContainer maxWidth="xl">
                <HeroTitle variant="h1">
                    Turn Visitors Into Clients Automatically
                </HeroTitle>
                <HeroSubtitle variant="h5">
                    Automated lead capture and instant follow-ups designed for high-performing real estate agents.
                </HeroSubtitle>

                <CTAWrapper>
                    <PrimaryCTA variant="contained" size="large" onClick={scrollToWorks}>
                        See How It Works
                    </PrimaryCTA>
                    <SecondaryCTA variant="outlined" size="large" onClick={scrollToDemo}>
                        Request Demo
                    </SecondaryCTA>
                </CTAWrapper>

                <TrustIndicators>
                    <TrustItem>
                        <CheckCircleIcon fontSize="small" />
                        <span>Instant Response</span>
                    </TrustItem>
                    <TrustItem>
                        <CheckCircleIcon fontSize="small" />
                        <span>Organized Lead Dashboard</span>
                    </TrustItem>
                    <TrustItem>
                        <CheckCircleIcon fontSize="small" />
                        <span>No Missed Inquiries</span>
                    </TrustItem>
                </TrustIndicators>
            </HeroContainer>
        </HeroSection>
    );
};

export default Hero;
