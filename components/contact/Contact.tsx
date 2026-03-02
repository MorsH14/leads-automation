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
    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        market: 'London',
        message: ''
    });
    const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: `${formData.firstName} ${formData.lastName}`,
                    email: formData.email,
                    phone: formData.phone,
                    message: formData.message,
                    market: formData.market
                }),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    market: 'London',
                    message: ''
                });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
        }
    };
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
                    <FormContainer component="form" onSubmit={handleSubmit}>
                        <FormGrid>
                            <StyledTextField
                                required
                                fullWidth
                                label="First Name"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                variant="outlined"
                            />
                            <StyledTextField
                                required
                                fullWidth
                                label="Last Name"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                variant="outlined"
                            />
                            <StyledTextField
                                required
                                fullWidth
                                label="Email Address"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                variant="outlined"
                            />
                            <StyledTextField
                                required
                                fullWidth
                                label="Phone Number"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                variant="outlined"
                            />

                            <FullWidthField
                                select
                                fullWidth
                                label="Market of Interest"
                                name="market"
                                value={formData.market}
                                onChange={handleChange}
                                variant="outlined"
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
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                multiline
                                rows={6}
                                placeholder="Describe your property requirements..."
                                variant="outlined"
                            />
                        </FormGrid>

                        <ButtonWrapper>
                            <SubmitButton
                                variant="contained"
                                type="submit"
                                disabled={status === 'loading'}
                            >
                                {status === 'loading' ? 'Sending...' :
                                    status === 'success' ? 'Inquiry Sent!' :
                                        status === 'error' ? 'Error Sending' : 'Send Inquiry'}
                            </SubmitButton>
                        </ButtonWrapper>
                    </FormContainer>
                </ContactFormWrapper>
            </Container>
        </ContactSectionWrapper>
    );
};

export default Contact;
