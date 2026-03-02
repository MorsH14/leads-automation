import { styled, alpha } from '@mui/material/styles';
import { Box, Card, Typography, Avatar } from '@mui/material';

export const TestimonialsSectionWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(14, 0),
  backgroundColor: alpha('#1a237e', 0.02),
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

export const TestimonialsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: theme.spacing(5),
  marginTop: theme.spacing(8),
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
    gap: theme.spacing(4),
  },
}));

export const TestimonialCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(5),
  height: '100%',
  backgroundColor: theme.palette.common.white,
  borderRadius: '20px',
  boxShadow: '0 10px 40px rgba(0,0,0,0.03)',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  border: 'none',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

export const RatingWrapper = styled(Box)(({ theme }) => ({
  color: '#ffc107',
  display: 'flex',
  gap: '2px',
  marginBottom: theme.spacing(1),
}));

export const TestimonialText = styled(Typography)(({ theme }) => ({
  fontSize: '1.1rem',
  color: theme.palette.text.secondary,
  lineHeight: 1.8,
  fontStyle: 'italic',
  marginBottom: theme.spacing(3),
  flexGrow: 1,
}));

export const UserProfileWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  borderTop: `1px solid ${alpha(theme.palette.divider, 0.5)}`,
  paddingTop: theme.spacing(3),
}));

export const UserAvatar = styled(Avatar)(({ theme }) => ({
  width: '56px',
  height: '56px',
  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
}));

export const UserDetails = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
});

export const UserName = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '1.1rem',
  color: theme.palette.primary.main,
}));

export const UserRole = styled(Typography)(({ theme }) => ({
  fontSize: '0.85rem',
  color: theme.palette.text.secondary,
  fontWeight: 500,
}));
