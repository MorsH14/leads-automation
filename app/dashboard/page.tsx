"use client";

import { useEffect, useState } from "react";
import { Container, Typography, Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip } from "@mui/material";

interface Lead {
    id: string;
    created_at: string;
    name: string;
    email: string;
    phone: string;
    message: string;
}

export default function Dashboard() {
    const [leads, setLeads] = useState<Lead[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch("/api/leads")
            .then((res) => {
                if (!res.ok) return res.json().then(d => { throw new Error(d.error || 'Failed to fetch') });
                return res.json();
            })
            .then((data) => {
                if (data.leads) {
                    setLeads(data.leads);
                }
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching leads:", err);
                setError(err.message);
                setLoading(false);
            });
    }, []);

    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>
            <Box mb={4}>
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                    Lead Management Dashboard
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    View and manage all real estate inquiries captured from your website.
                </Typography>
            </Box>

            <TableContainer component={Paper} elevation={0} variant="outlined">
                <Table sx={{ minWidth: 650 }}>
                    <TableHead sx={{ bgcolor: 'grey.50' }}>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bold' }}>Date</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Email</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Phone</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Message</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {loading ? (
                            <TableRow>
                                <TableCell colSpan={6} align="center" sx={{ py: 4 }}>
                                    Loading leads...
                                </TableCell>
                            </TableRow>
                        ) : error ? (
                            <TableRow>
                                <TableCell colSpan={6} align="center" sx={{ py: 4, color: 'error.main' }}>
                                    Error: {error}
                                </TableCell>
                            </TableRow>
                        ) : leads.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={6} align="center" sx={{ py: 4 }}>
                                    No leads captured yet.
                                </TableCell>
                            </TableRow>
                        ) : (
                            leads.map((lead) => (
                                <TableRow key={lead.id} hover>
                                    <TableCell>
                                        {new Date(lead.created_at).toLocaleDateString()}
                                    </TableCell>
                                    <TableCell sx={{ fontWeight: 500 }}>{lead.name}</TableCell>
                                    <TableCell>{lead.email}</TableCell>
                                    <TableCell>{lead.phone}</TableCell>
                                    <TableCell sx={{ maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                        {lead.message}
                                    </TableCell>
                                    <TableCell>
                                        <Chip label="New" size="small" color="primary" variant="outlined" />
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}