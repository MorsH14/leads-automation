import { styled } from '@mui/material/styles';
import { Box, Typography, Button } from '@mui/material';

export const AboutSectionWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(14, 0),
  backgroundColor: '#fcfcfc',
}));

export const SectionLabel = styled(Typography)(({ theme }) => ({
  textAlign: 'left',
  marginBottom: theme.spacing(1),
  color: theme.palette.secondary.main,
  textTransform: 'uppercase',
  letterSpacing: '0.15em',
  fontSize: '0.85rem',
  fontWeight: 600,
}));

export const SplitLayout = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: theme.spacing(10),
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
    gap: theme.spacing(6),
  },
}));

export const AboutImageContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '600px',
  borderRadius: '8px',
  overflow: 'hidden',
  boxShadow: '0 30px 60px rgba(0,0,0,0.1)',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  [theme.breakpoints.down('md')]: {
    height: '400px',
  },
}));

export const AboutTextContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
}));

export const AboutSectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '2.8rem',
  marginBottom: theme.spacing(3),
  color: theme.palette.primary.main,
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
  },
}));

export const AboutDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '1.1rem',
  lineHeight: 1.8,
  marginBottom: theme.spacing(4),
}));

export const LearnMoreButton = styled(Button)(({ theme }) => ({
  width: 'fit-content',
  padding: '14px 40px',
  border: `1.5px solid ${theme.palette.primary.main}`,
  color: theme.palette.primary.main,
  borderRadius: '4px',
  fontWeight: 700,
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    boxShadow: '0 10px 20px rgba(26, 35, 126, 0.2)',
  },
}));
