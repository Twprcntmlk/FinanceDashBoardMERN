import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import FlexBetweenBox from "./FlexBetweenBox";

type Props = {
  title: string;
  sideText: string;
  subtitle?: string;
  icon?: React.ReactNode;
};

const BoxHeaderBox = ({ icon, title, subtitle, sideText }: Props) => {
  const { palette } = useTheme();
  return (
    <FlexBetweenBox color={palette.grey[400]} margin="1.5rem 1rem 0 1rem">
      <FlexBetweenBox>
        {icon}
        <Box width="100%">
          <Typography variant="h4" mb="-0.1rem">
            {title}
          </Typography>
          <Typography variant="h6">{subtitle}</Typography>
        </Box>
      </FlexBetweenBox>
      <Typography variant="h5" fontWeight="700" color={palette.secondary[500]}>
        {sideText}
      </Typography>
    </FlexBetweenBox>
  );
};

export default BoxHeaderBox;
