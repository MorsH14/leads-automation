import { styled, alpha } from '@mui/material/styles';
import { Box, Container, Typography, Card, CardMedia, Button, Chip, Grid } from '@mui/material';

export const PropertiesSectionWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(14, 0),
  backgroundColor: '#f8f9fa',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(8, 0),
  },
}));

export const SectionContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

export const SectionLabel = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(1),
  color: theme.palette.secondary.main,
  textTransform: 'uppercase',
  letterSpacing: '0.2rem',
  fontSize: '0.75rem',
  fontWeight: 700,
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(8),
  fontWeight: 800,
  fontSize: '3rem',
  color: theme.palette.primary.main,
  fontFamily: 'var(--font-playfair), serif',
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.2rem',
    marginBottom: theme.spacing(5),
    padding: '0 10px',
  },
}));

export const PropertyCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'all 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
  backgroundColor: theme.palette.common.white,
  borderRadius: '16px',
  overflow: 'hidden',
  position: 'relative',
  border: '1px solid rgba(0,0,0,0.05)',
  boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
  '&:hover': {
    transform: 'translateY(-12px)',
    boxShadow: '0 30px 60px rgba(26, 35, 126, 0.12)',
    '& .card-image': {
      transform: 'scale(1.1)',
    },
    '& .view-btn': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    }
  },
  [theme.breakpoints.down('sm')]: {
    borderRadius: '12px',
    '&:hover': {
      transform: 'none',
    }
  },
}));

export const ImageWrapper = styled(Box)(({ theme }) => ({
  height: 320,
  width: '100%',
  overflow: 'hidden',
  position: 'relative',
  [theme.breakpoints.down('sm')]: {
    height: 240,
  },
}));

export const StyledCardMedia = styled(CardMedia)({
  height: '100%',
  width: '100%',
  transition: 'transform 0.6s ease-in-out',
}) as typeof CardMedia;

export const StatusChip = styled(Chip)(({ theme }) => ({
  position: 'absolute',
  top: 16,
  left: '50%',
  transform: 'translateX(-50%)', // Center the chip
  backgroundColor: alpha(theme.palette.common.black, 0.7),
  color: theme.palette.common.white,
  backdropFilter: 'blur(10px)',
  fontWeight: 600,
  fontSize: '0.65rem',
  textTransform: 'uppercase',
  padding: '4px',
  borderRadius: '4px',
  border: 'none',
}));

export const PriceBadge = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: '50%',
  transform: 'translateX(-50%)', // Center the price badge
  backgroundColor: theme.palette.common.white,
  padding: '10px 24px',
  borderTopLeftRadius: '12px',
  borderTopRightRadius: '12px',
  fontWeight: 800,
  fontSize: '1.2rem',
  color: theme.palette.primary.main,
  boxShadow: '0 -4px 15px rgba(0,0,0,0.05)',
  [theme.breakpoints.down('sm')]: {
    padding: '8px 20px',
    fontSize: '1.1rem',
  },
}));

export const CardContentWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', // Center content horizontally
  textAlign: 'center', // Center text alignment
  flexGrow: 1,
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3),
  },
}));

export const PropertyCategory = styled(Typography)(({ theme }) => ({
  fontSize: '0.75rem',
  color: theme.palette.secondary.main,
  fontWeight: 700,
  textTransform: 'uppercase',
  marginBottom: theme.spacing(0.5),
  letterSpacing: '0.08em',
}));

export const PropertyName = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 800,
  marginBottom: theme.spacing(1),
  color: '#111',
  lineHeight: 1.25,
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.3rem',
  },
}));

export const LocationText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '0.9rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center', // Center flex content
  marginBottom: theme.spacing(2.5),
  gap: '6px',
  '& svg': {
    fontSize: '1rem',
    color: theme.palette.secondary.main,
  },
}));

export const FeaturesGrid = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center', // Center icons
  gap: theme.spacing(4), // Add gap between items
  width: '100%',
  padding: theme.spacing(2, 0),
  borderTop: `1px solid ${alpha(theme.palette.divider, 0.6)}`,
  marginTop: 'auto',
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(3),
  }
}));

export const FeatureItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  '& svg': {
    color: '#a0a0a0',
    fontSize: '1.1rem',
  },
  '& span': {
    fontSize: '0.85rem',
    color: '#333',
    fontWeight: 600,
  },
}));

export const CardButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(3),
  padding: '12px 40px', // More horizontal padding for centered button
  borderRadius: '6px',
  border: `1.5px solid ${alpha(theme.palette.primary.main, 0.15)}`,
  color: theme.palette.primary.main,
  fontWeight: 700,
  fontSize: '0.9rem',
  width: 'auto', // Don't take full width
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
     backgroundColor: theme.palette.primary.main,
     color: theme.palette.common.white,
     borderColor: theme.palette.primary.main,
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%', // Full width on mobile is usually better for touch
    padding: '10px',
  },
}));
