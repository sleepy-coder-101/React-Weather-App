import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const HeroDetails = (props) => {
  const {
    attributeName1,
    attributeValue1,
    attributeName2,
    attributeValue2,
    attributeIcon,
  } = props;

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexWrap="wrap"
      sx={{ width: { xs: "50%", sm: "32%" }, my: { xs: "1rem" } }}
    >
      <Box sx={{ width: "40%", textAlign: "center" }}>{attributeIcon}</Box>

      <Box sx={{ width: "60%" }}>
        <Typography
          sx={{
            fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.7rem" },
            fontWeight: "600",
          }}
        >
          {attributeName1}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "1.0rem", sm: "1.1rem", md: "1.2rem" },
            fontWeight: "400",
          }}
        >
          {attributeValue1} {props.attributeUnit}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.7rem" },
            fontWeight: "600",
            display: { xs: "none", sm: "flex" },
          }}
        >
          {attributeName2}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "1.0rem", sm: "1.1rem", md: "1.2rem" },
            fontWeight: "400",
            display: { xs: "none", sm: "flex" },
          }}
        >
          {attributeValue2} {props.attributeUnit}
        </Typography>
      </Box>
    </Box>
  );
};

export default HeroDetails;
