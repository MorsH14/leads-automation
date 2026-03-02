import { styled } from '@mui/material/styles';
import { Box, Container, Typography, Card, CardMedia, Button } from '@mui/material';

export const PropertiesSectionWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(14, 0),
  backgroundColor: '#fdfdfd',
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
  textAlign: 'center',
  marginBottom: theme.spacing(8),
  fontWeight: 700,
  fontSize: '2.8rem',
  color: theme.palette.primary.main,
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
  },
}));

export const PropertyCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
  backgroundColor: theme.palette.common.white,
  borderRadius: '12px',
  overflow: 'hidden',
  boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
  '&:hover': {
    transform: 'translateY(-12px)',
    boxShadow: '0 25px 50px rgba(0,0,0,0.1)',
  },
}));

export const StyledCardMedia = styled(CardMedia)({
  height: 280,
  position: 'relative',
});

export const PriceBadge = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 20,
  right: 20,
  backgroundColor: theme.palette.common.white,
  padding: '8px 16px',
  borderRadius: '4px',
  fontWeight: 700,
  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
  color: theme.palette.primary.main,
}));

export const CardContentWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
}));

export const PropertyName = styled(Typography)(({ theme }) => ({
  fontSize: '1.4rem',
  fontWeight: 700,
  marginBottom: theme.spacing(1),
  color: theme.palette.common.black,
}));

export const LocationText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '0.95rem',
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(3),
  gap: '4px',
}));

export const FeaturesGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: theme.spacing(2),
  padding: theme.spacing(2, 0),
  borderTop: `1px solid ${alpha(theme.palette.divider, 0.5)}`,
  marginTop: 'auto',
}));

export const FeatureItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '4px',
  '& svg': {
    color: theme.palette.secondary.main,
    fontSize: '1.2rem',
  },
  '& span': {
    fontSize: '0.85rem',
    color: theme.palette.text.secondary,
    fontWeight: 500,
  },
}));

export const CardButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(3),
  padding: '12px',
  borderRadius: '4px',
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.common.white,
  '&:hover': {
    backgroundColor: theme.palette.secondary.dark,
  },
}));

function alpha(color: string, value: number): string {
  return `${color}${Math.round(value * 255).toString(16).padStart(2, '0')}`;
}
