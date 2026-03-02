'use client';
import React from 'react';
import { Container } from '@mui/material';
import {
    ContactSectionWrapper,
    ContactFormWrapper,
    FormContainer,
    FormGrid,
    StyledTextField,
    FullWidthField,
    ButtonWrapper,
    SubmitButton,
    ContactHeader,
    ContactSectionTitle,
    ContactSubTitle
} from './Contact.styles';
import { SectionLabel } from '../properties/Properties.styles';

const Contact = () => {
    return (
        <ContactSectionWrapper id="contact">
            <Container maxWidth="xl">
                <ContactHeader>
                    <SectionLabel>Connect With Us</SectionLabel>
                    <ContactSectionTitle variant="h2">
                        Inquire About Your Next Acquisition
                    </ContactSectionTitle>
                    <ContactSubTitle variant="body1">
                        Our representatives in London, Toronto, and Dubai are available for private
                        consultations. Please complete the form below to begin.
                    </ContactSubTitle>
                </ContactHeader>

                <ContactFormWrapper>
                    <FormContainer component="form">
                        <FormGrid>
                            <StyledTextField
                                required
                                fullWidth
                                label="First Name"
                                variant="outlined"
                            />
                            <StyledTextField
                                required
                                fullWidth
                                label="Last Name"
                                variant="outlined"
                            />
                            <StyledTextField
                                required
                                fullWidth
                                label="Email Address"
                                variant="outlined"
                            />
                            <StyledTextField
                                required
                                fullWidth
                                label="Phone Number"
                                variant="outlined"
                            />

                            <FullWidthField
                                select
                                fullWidth
                                label="Market of Interest"
                                variant="outlined"
                                defaultValue="London"
                                SelectProps={{ native: true }}
                            >
                                <option value="London">London, United Kingdom</option>
                                <option value="Toronto">Toronto, Canada</option>
                                <option value="Dubai">Dubai, UAE</option>
                            </FullWidthField>

                            <FullWidthField
                                required
                                fullWidth
                                label="Your Message"
                                multiline
                                rows={6}
                                placeholder="Describe your property requirements..."
                                variant="outlined"
                            />
                        </FormGrid>

                        <ButtonWrapper>
                            <SubmitButton variant="contained">
                                Send Inquiry
                            </SubmitButton>
                        </ButtonWrapper>
                    </FormContainer>
                </ContactFormWrapper>
            </Container>
        </ContactSectionWrapper>
    );
};

export default Contact;
