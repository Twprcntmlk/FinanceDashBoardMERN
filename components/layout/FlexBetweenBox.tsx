import { Box } from '@mui/material';
import { styled } from '@mui/system';

interface FlexBetweenBoxProps {
  // The background color of the box
  backgroundColor?: string;

  // The border radius of the box
  borderRadius?: string;

  // The box shadow CSS property
  boxShadow?: string;

  // Content to be rendered inside the box
  children?: React.ReactNode;
}
const FlexBetweenBox = styled(Box)<FlexBetweenBoxProps>({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
});

export default FlexBetweenBox;
