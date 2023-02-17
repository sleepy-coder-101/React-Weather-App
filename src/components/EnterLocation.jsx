import React from "react";

import { Box, Typography } from "@mui/material";

const EnterLocation = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <Typography
        sx={{
          fontSize: { xs: "2.5rem", sm: "3rem" },
          fontWeight: "400",
          color: "#ffffff",
          mt: 4,
          textAlign: "center",
        }}
      >
        Enter a location
      </Typography>
    </Box>
  );
};

export default EnterLocation;
