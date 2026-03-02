import { styled, alpha } from '@mui/material/styles';
import { Box, Container, Typography, Paper } from '@mui/material';

export const FeaturesSectionWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(14, 0),
  backgroundColor: theme.palette.common.white,
}));

export const SectionLabel = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(1),
  color: theme.palette.secondary.main,
  textTransform: 'uppercase',
  letterSpacing: '0.15em',
  fontSize: '0.85rem',
  fontWeight: 600,
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '2.8rem',
  marginBottom: theme.spacing(2),
  color: theme.palette.primary.main,
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
  },
}));

export const FeatureGridWrapper = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(8),
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(1, 1fr)',
    gap: theme.spacing(6),
  },
}));

export const FeatureItemCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
  height: '100%',
  boxShadow: 'none',
  backgroundColor: alpha('#1a237e', 0.02),
  borderRadius: '16px',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: alpha('#1a237e', 0.04),
    transform: 'translateY(-5px)',
  },
}));

export const IconContainer = styled(Box)(({ theme }) => ({
  width: '70px',
  height: '70px',
  borderRadius: '20px',
  backgroundColor: theme.palette.common.white,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto 24px',
  boxShadow: '0 8px 20px rgba(0,0,0,0.06)',
  color: theme.palette.secondary.main,
  '& svg': {
    fontSize: '2.2rem',
  },
}));

export const FeatureTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '1.4rem',
  marginBottom: theme.spacing(2),
  color: theme.palette.primary.main,
}));

export const FeatureDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  lineHeight: 1.7,
  fontSize: '1rem',
}));
