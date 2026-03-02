'use client';
import React from 'react';
import { Container, Box } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import {
    FooterSectionWrapper,
    FooterGrid,
    FooterBrand,
    FooterLogoText,
    FooterDescription,
    FooterTitle,
    FooterLinkItem,
    SocialMediaIcons,
    SocialIconButton,
    CopyrightRow,
    BottomLinks,
    InlineFooterLink
} from './Footer.styles';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <FooterSectionWrapper>
            <Container maxWidth="xl">
                <FooterGrid>
                    <FooterBrand>
                        <FooterLogoText variant="h3">
                            MORS<span>H14</span>
                        </FooterLogoText>
                        <FooterDescription variant="body1">
                            Global leaders in luxury real estate advisory. Defining the pinnacle
                            of elite living across London, Toronto, and Dubai for over 25 years.
                        </FooterDescription>
                        <SocialMediaIcons>
                            <SocialIconButton size="small">
                                <InstagramIcon fontSize="small" />
                            </SocialIconButton>
                            <SocialIconButton size="small">
                                <LinkedInIcon fontSize="small" />
                            </SocialIconButton>
                            <SocialIconButton size="small">
                                <TwitterIcon fontSize="small" />
                            </SocialIconButton>
                            <SocialIconButton size="small">
                                <FacebookIcon fontSize="small" />
                            </SocialIconButton>
                        </SocialMediaIcons>
                    </FooterBrand>

                    <Box>
                        <FooterTitle variant="h6">Key Markets</FooterTitle>
                        <FooterLinkItem component="a" href="#">Central London Portfolio</FooterLinkItem>
                        <FooterLinkItem component="a" href="#">Greater Toronto Estates</FooterLinkItem>
                        <FooterLinkItem component="a" href="#">Dubai Waterfront Villas</FooterLinkItem>
                        <FooterLinkItem component="a" href="#">Emerging Luxury Hubs</FooterLinkItem>
                    </Box>

                    <Box>
                        <FooterTitle variant="h6">Private Services</FooterTitle>
                        <FooterLinkItem component="a" href="#">Asset Acquisition</FooterLinkItem>
                        <FooterLinkItem component="a" href="#">Portfolio Management</FooterLinkItem>
                        <FooterLinkItem component="a" href="#">Luxury Concierge</FooterLinkItem>
                        <FooterLinkItem component="a" href="#">Investment Advisory</FooterLinkItem>
                    </Box>

                    <Box>
                        <FooterTitle variant="h6">Corporate</FooterTitle>
                        <FooterLinkItem component="a" href="#">The Group Philosophy</FooterLinkItem>
                        <FooterLinkItem component="a" href="#">Sustainability Charter</FooterLinkItem>
                        <FooterLinkItem component="a" href="#">Newsroom</FooterLinkItem>
                        <FooterLinkItem component="a" href="#">Career Enquiries</FooterLinkItem>
                    </Box>
                </FooterGrid>

                <CopyrightRow>
                    <Box component="span">
                        © {currentYear} MorH14 Luxury Estates Group. All sovereign rights reserved.
                    </Box>
                    <BottomLinks>
                        <InlineFooterLink component="a" href="#">Privacy Policy</InlineFooterLink>
                        <InlineFooterLink component="a" href="#">Terms of Service</InlineFooterLink>
                        <InlineFooterLink component="a" href="#">Cookie Policy</InlineFooterLink>
                    </BottomLinks>
                </CopyrightRow>
            </Container>
        </FooterSectionWrapper>
    );
};

export default Footer;
