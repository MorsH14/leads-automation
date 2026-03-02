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
  marginBottom: theme.spacing(2),
  fontSize: '4.5rem',
  fontWeight: 800,
  letterSpacing: '-0.02em',
  [theme.breakpoints.down('md')]: {
    fontSize: '3.2rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.5rem',
  },
}));

export const HeroSubtitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(5),
  fontSize: '1.4rem',
  fontWeight: 300,
  maxWidth: '800px',
  margin: '0 auto',
  opacity: 0.9,
  [theme.breakpoints.down('md')]: {
    fontSize: '1.1rem',
  },
}));

export const MainCTA = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.common.white,
  padding: '16px 48px',
  fontSize: '1.1rem',
  borderRadius: '4px',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: theme.palette.secondary.dark,
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 15px rgba(197, 160, 89, 0.4)',
  },
}));

export const SearchBarWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.98)',
  padding: theme.spacing(4),
  borderRadius: '4px',
  marginTop: theme.spacing(8),
  maxWidth: '1000px',
  marginInline: 'auto',
  boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: theme.spacing(3),
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr 1fr',
  },
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
    padding: theme.spacing(3),
    marginTop: theme.spacing(4),
  },
}));

export const SearchButton = styled(Button)(({ theme }) => ({
  height: '56px',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));
