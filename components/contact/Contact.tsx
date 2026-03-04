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
        name: '',
        email: '',
        phone: '',
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
            // 1. Try to save to Supabase via API
            const leadsResponse = await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const leadsResult = await leadsResponse.json();

            if (!leadsResponse.ok) {
                // If it's the RLS error, we still want to try sending the email
                console.error("Database save failed:", leadsResult.error);
                if (leadsResult.error?.includes('row-level security policy')) {
                    console.warn("RLS policy is blocking the database insert. Please check Supabase policies.");
                }
            }

            // 2. Try to send email notification
            const notifyResponse = await fetch('/api/notify', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (!notifyResponse.ok) {
                throw new Error('Notification failed');
            }

            setStatus('success');
            setFormData({
                name: "",
                email: "",
                phone: "",
                message: "",
            });

            setTimeout(() => setStatus('idle'), 3000);

        } catch (error) {
            console.error("Submission flow error:", error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };



    return (
        <ContactSectionWrapper id="contact">
            <Container maxWidth="xl">
                <ContactHeader>
                    <SectionLabel>System Access</SectionLabel>
                    <ContactSectionTitle variant="h2">
                        Get Your Demo Setup
                    </ContactSectionTitle>
                    <ContactSubTitle variant="body1">
                        Book a walkthrough and see how this system can work for your agency.
                        Our team will reach out within 15 minutes to schedule your session.
                    </ContactSubTitle>
                </ContactHeader>

                <ContactFormWrapper>
                    <FormContainer component="form" onSubmit={handleSubmit}>
                        <FormGrid>
                            <FullWidthField
                                required
                                fullWidth
                                label="Full Name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                variant="outlined"
                            />
                            <StyledTextField
                                required
                                fullWidth
                                label="Work Email Address"
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
                                required
                                fullWidth
                                label="Your Message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                multiline
                                rows={6}
                                placeholder="Tell us about your current lead flow..."
                                variant="outlined"
                            />
                        </FormGrid>

                        <ButtonWrapper>
                            <SubmitButton
                                variant="contained"
                                type="submit"
                                disabled={status === 'loading'}
                            >
                                {status === 'loading' ? 'Scheduling...' :
                                    status === 'success' ? 'Demo Requested!' :
                                        status === 'error' ? 'Error' : 'Book My Demo'}
                            </SubmitButton>
                        </ButtonWrapper>
                    </FormContainer>
                </ContactFormWrapper>
            </Container>
        </ContactSectionWrapper>
    );
};

export default Contact;
