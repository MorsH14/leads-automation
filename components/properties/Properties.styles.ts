import { styled, alpha } from '@mui/material/styles';
import { 
  Box, 
  Container, 
  Typography, 
  Card, 
  CardMedia, 
  Button, 
  Dialog, 
  DialogContent,
  IconButton,
  Grid
} from '@mui/material';

export const PropertiesSectionWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(14, 0),
  backgroundColor: '#f8f9fa',
  scrollMarginTop: '80px', // Offset for fixed headers if any
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(8, 0),
  },
}));

export const SectionContainer = styled(Container)(({ theme }) => ({
  maxWidth: '1200px !important',
  paddingLeft: theme.spacing(4),
  paddingRight: theme.spacing(4),
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
  marginBottom: theme.spacing(6),
  fontWeight: 800,
  fontSize: '3.2rem',
  color: theme.palette.primary.main,
  letterSpacing: '-0.02em',
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.4rem',
    marginBottom: theme.spacing(4),
    padding: '0 10px',
  },
}));

export const PropertyCard = styled(Card)(({ theme }) => ({
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'all 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
  backgroundColor: theme.palette.common.white,
  borderRadius: '16px',
  overflow: 'hidden',
  position: 'relative',
  border: '1px solid rgba(0,0,0,0.05)',
  cursor: 'pointer',
  boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
  '&:hover': {
    transform: 'translateY(-12px)',
    boxShadow: '0 30px 60px rgba(26, 35, 126, 0.12)',
    '& .card-image': {
      transform: 'scale(1.08)',
    },
    '& .view-btn': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    }
  },
  [theme.breakpoints.down('md')]: {
    '&:hover': {
      transform: 'none',
    }
  },
}));

export const ImageWrapper = styled(Box)(({ theme }) => ({
  height: 260,
  width: '100%',
  overflow: 'hidden',
  position: 'relative',
  [theme.breakpoints.down('sm')]: {
    height: 220,
  },
}));

export const StyledCardMedia = styled(CardMedia)({
  height: '100%',
  width: '100%',
  transition: 'transform 0.6s ease-in-out',
}) as typeof CardMedia;

export const LeadTag = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 16,
  left: 16,
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.common.white,
  padding: '6px 14px',
  borderRadius: '4px',
  fontSize: '0.7rem',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
  zIndex: 2,
  transition: 'all 0.3s ease',
}));

export const PriceBadge = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: '50%',
  transform: 'translateX(-50%)',
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
  alignItems: 'center',
  textAlign: 'center',
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
  justifyContent: 'center',
  marginBottom: theme.spacing(2.5),
  gap: '6px',
  '& svg': {
    fontSize: '1rem',
    color: theme.palette.secondary.main,
  },
}));

export const FeaturesGrid = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: theme.spacing(4),
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
  padding: '12px 40px',
  borderRadius: '6px',
  border: `1.5px solid ${alpha(theme.palette.primary.main, 0.15)}`,
  color: theme.palette.primary.main,
  fontWeight: 700,
  fontSize: '0.9rem',
  width: 'auto',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
     backgroundColor: theme.palette.primary.main,
     color: theme.palette.common.white,
     borderColor: theme.palette.primary.main,
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    padding: '10px',
  },
}));

/* Dialog Styles for "Explore" functionality */

export const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: '20px',
    maxWidth: '1000px',
    overflow: 'hidden',
  },
}));

export const DialogWrapper = styled(DialogContent)(({ theme }) => ({
  padding: 0,
  display: 'flex',
  flexDirection: 'row',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

export const DialogImageArea = styled(Box)(({ theme }) => ({
  width: '50%',
  height: 'auto',
  minHeight: '500px',
  position: 'relative',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    minHeight: '300px',
  },
}));

export const DialogTextArea = styled(Box)(({ theme }) => ({
  width: '50%',
  padding: theme.spacing(6),
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme.palette.common.white,
  [theme.breakpoints.down('md')]: {
    width: '100%',
    padding: theme.spacing(4),
  },
}));

export const CloseIconButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: 16,
  right: 16,
  zIndex: 10,
  backgroundColor: 'rgba(0,0,0,0.2)',
  color: theme.palette.common.white,
  '&:hover': {
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
}));

export const DialogPropertyTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  fontSize: '2rem',
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(2),
}));

export const DialogPropertyPrice = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 700,
  color: theme.palette.secondary.main,
  marginBottom: theme.spacing(3),
}));

export const DialogDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  lineHeight: 1.8,
  fontSize: '1rem',
  marginBottom: theme.spacing(4),
}));

export const InquireButton = styled(Button)(({ theme }) => ({
  marginTop: 'auto',
  padding: '12px',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  fontSize: '1.1rem',
  fontWeight: 700,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    transform: 'translateY(-2px)',
  },
}));

export const GridItemWrapper = styled(Box)(({ theme }) => ({
  display: 'flex', 
  justifyContent: 'center',
  width: '100%',
}));

export const LocationTextDialog = styled(LocationText)(({ theme }) => ({
  justifyContent: 'flex-start',
  marginBottom: theme.spacing(4),
}));

export const FeaturesContainer = styled(Grid)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

export const FeatureItemVertical = styled(FeatureItem)(({ theme }) => ({
  flexDirection: 'column',
  gap: theme.spacing(1),
}));

export const FeatureCaption = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '0.75rem',
}));

export const EmptyBox = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(10, 0),
}));
