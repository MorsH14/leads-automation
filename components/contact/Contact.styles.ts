import { styled, alpha } from '@mui/material/styles';
import { Box, Typography, TextField, Button } from '@mui/material';

export const ContactSectionWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(14, 0),
  backgroundColor: theme.palette.common.white,
}));

export const ContactHeader = styled(Box)({
  textAlign: 'center',
  marginBottom: '20px',
});

export const ContactSectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '2.8rem',
  color: theme.palette.primary.main,
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
  },
}));

export const ContactSubTitle = styled(Typography)(({ theme }) => ({
  maxWidth: 700,
  margin: '16px auto 0',
  color: theme.palette.text.secondary,
  textAlign: 'center',
  fontSize: '1.1rem',
  lineHeight: 1.8,
}));

export const ContactFormWrapper = styled(Box)(({ theme }) => ({
  maxWidth: '900px',
  margin: '0 auto',
  marginTop: theme.spacing(8),
  padding: theme.spacing(8),
  backgroundColor: alpha('#1a237e', 0.01),
  borderRadius: '4px',
  border: `1px solid ${alpha('#1a237e', 0.1)}`,
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(4),
  },
}));

export const FormContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
}) as typeof Box;

export const FormGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
  },
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    backgroundColor: theme.palette.common.white,
    '&:hover fieldset': {
      borderColor: theme.palette.secondary.main,
    },
  },
}));

export const FullWidthField = styled(StyledTextField)({
  gridColumn: '1 / -1',
});

export const ButtonWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
});

export const SubmitButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  padding: '16px 60px',
  fontSize: '1.1rem',
  fontWeight: 700,
  marginTop: theme.spacing(4),
  borderRadius: '4px',
  width: 'fit-content',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    transform: 'translateY(-2px)',
    boxShadow: `0 10px 20px ${alpha('#1a237e', 0.2)}`,
  },
}));
