import { Box } from '@mui/material';
import { styled } from '@mui/system';
interface DashBoardBoxProps {
  // The background color of the box
  backgroundColor?: string;
  // The border radius of the box
  borderRadius?: string;
  // The box shadow CSS property
  boxShadow?: string;
  // The grid area property for CSS grid
  gridArea?: string;
  // The height of the box
  height?: number | string;
  // Content to be rendered inside the box
  children?: React.ReactNode;
}

const DashBoardBox = styled(Box)<DashBoardBoxProps>(({ theme }) => ({
  backgroundColor: theme.palette.background.light,
  borderRadius: '1rem',
  boxShadow: '0.15rem 0.2rem 0.15rem 0.1rem rgba(0, 0, 0, .8)'
}));

export default DashBoardBox;
