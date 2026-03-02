import { styled, alpha } from '@mui/material/styles';
import { Box, Container, Typography, Button } from '@mui/material';

export const HeroSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  minHeight: '90vh',
  display: 'flex',
  alignItems: 'center',
  backgroundImage: 'url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop")', 
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: alpha(theme.palette.common.black, 0.45),
  },
}));

export const HeroContainer = styled(Container)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  color: theme.palette.common.white,
  textAlign: 'center',
}));

export const HeroTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  fontSize: '4.8rem',
  fontWeight: 800,
  letterSpacing: '-0.02em',
  lineHeight: 1.1,
  background: 'linear-gradient(to right, #fff, #cecece)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  [theme.breakpoints.down('md')]: {
    fontSize: '3.5rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.8rem',
  },
}));

export const HeroSubtitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(6),
  fontSize: '1.5rem',
  fontWeight: 400,
  maxWidth: '850px',
  marginInline: 'auto',
  opacity: 0.85,
  lineHeight: 1.6,
  color: theme.palette.common.white,
  textShadow: '0 2px 10px rgba(0,0,0,0.3)',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.2rem',
  },
}));

export const CTAWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3),
  justifyContent: 'center',
  marginBottom: theme.spacing(8),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.spacing(2),
  },
}));

export const PrimaryCTA = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.common.white,
  padding: '18px 48px',
  fontSize: '1.1rem',
  fontWeight: 700,
  borderRadius: '8px',
  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  textTransform: 'none',
  letterSpacing: '0.02em',
  '&:hover': {
    backgroundColor: theme.palette.secondary.dark,
    transform: 'translateY(-4px)',
    boxShadow: `0 15px 30px ${alpha(theme.palette.secondary.main, 0.4)}`,
  },
}));

export const SecondaryCTA = styled(Button)(({ theme }) => ({
  borderColor: alpha(theme.palette.common.white, 0.6),
  color: theme.palette.common.white,
  padding: '18px 48px',
  fontSize: '1.1rem',
  fontWeight: 600,
  borderRadius: '8px',
  borderWidth: '1.5px',
  transition: 'all 0.3s ease',
  textTransform: 'none',
  backdropFilter: 'blur(10px)',
  backgroundColor: alpha(theme.palette.common.white, 0.05),
  '&:hover': {
    borderColor: theme.palette.common.white,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    transform: 'translateY(-4px)',
  },
}));

export const TrustIndicators = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: theme.spacing(6),
  paddingTop: theme.spacing(4),
  borderTop: `1px solid ${alpha(theme.palette.common.white, 0.15)}`,
  maxWidth: '900px',
  margin: '0 auto',
  [theme.breakpoints.down('md')]: {
    gap: theme.spacing(3),
    flexWrap: 'wrap',
  },
}));

export const TrustItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  color: alpha(theme.palette.common.white, 0.9),
  '& svg': {
    color: theme.palette.secondary.main,
    filter: 'drop-shadow(0 0 5px rgba(197, 160, 89, 0.5))',
  },
  '& span': {
    fontSize: '0.95rem',
    fontWeight: 500,
    letterSpacing: '0.03em',
  },
}));
