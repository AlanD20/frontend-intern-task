import { Container } from '@mui/material';
import LoopIcon from '@mui/icons-material/Loop';

const LoadingSpinner = () => (
  <Container
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      inset: 0
    }}
  >

    <LoopIcon
      color="primary"
      fontSize="large"
      sx={{
        animation: 'spin 500ms linear infinite',
        '@keyframes spin': {
          from: {
            transform: 'rotate(0deg)',
          },
          to: {
            transform: 'rotate(360deg)',
          },
        },
      }}
    />
  </Container>
);

export default LoadingSpinner;
