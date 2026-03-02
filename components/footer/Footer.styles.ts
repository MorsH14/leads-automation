import { styled, alpha } from '@mui/material/styles';
import { Box, Typography, Link, IconButton } from '@mui/material';

export const FooterSectionWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: '#0a0a0d',
  color: theme.palette.common.white,
  padding: theme.spacing(12, 0, 6),
}));

export const FooterGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
  gap: theme.spacing(8),
  marginBottom: theme.spacing(10),
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr 1fr',
    gap: theme.spacing(6),
  },
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
  },
}));

export const FooterBrand = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
});

export const FooterLogoText = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  fontSize: '1.8rem',
  color: theme.palette.common.white,
  letterSpacing: '0.05em',
  '& span': {
    color: theme.palette.secondary.main,
  },
}));

export const FooterTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '0.9rem',
  marginBottom: theme.spacing(4),
  color: theme.palette.common.white,
  textTransform: 'uppercase',
  letterSpacing: '0.15em',
}));

export const FooterLinkItem = styled(Link)(({ theme }) => ({
  color: '#a0a0a0',
  textDecoration: 'none',
  marginBottom: theme.spacing(2),
  display: 'block',
  fontSize: '0.95rem',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    color: theme.palette.secondary.main,
    transform: 'translateX(4px)',
  },
})) as typeof Link;

export const SocialMediaIcons = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1.5),
  marginTop: theme.spacing(2),
}));

export const SocialIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.common.white,
  border: '1px solid #333',
  padding: '10px',
  borderRadius: '4px',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
    borderColor: theme.palette.secondary.main,
    transform: 'translateY(-4px)',
  },
}));

export const CopyrightRow = styled(Box)(({ theme }) => ({
  borderTop: '1px solid #1a1a1a',
  paddingTop: theme.spacing(5),
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: '#666',
  fontSize: '0.85rem',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: theme.spacing(3),
    textAlign: 'center',
  },
}));

export const BottomLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(2),
  },
}));

export const InlineFooterLink = styled(FooterLinkItem)({
  display: 'inline',
  margin: 0,
}) as typeof Link;

export const FooterDescription = styled(Typography)(({ theme }) => ({
  color: '#a0a0a0',
  lineHeight: 1.8,
  fontSize: '1rem',
  maxWidth: '350px',
}));
