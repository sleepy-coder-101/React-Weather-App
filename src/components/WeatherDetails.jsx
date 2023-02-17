import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

const WeatherDetails = (props) => {
  const { attributeName, attributeValue, attributeIcon, attributeUnit } = props;

  return (
    <Card
      sx={{
        width: { xs: "49%", sm: "32%" },
        mt: 3,
        borderRadius: "1rem",
        backgroundColor: "rgba(51, 51, 51, 0.6)",
        color: "#ffffff",
      }}
    >
      <CardContent>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexWrap="wrap"
        >
          <Box sx={{ width: "40%", textAlign: "center" }}>{attributeIcon}</Box>
          {/* <Box sx={{ width: "40%", textAlign: "center" }}>
            <img
              alt="weather-icon"
              src={attributeUrl}
              width="30%"
              sx={{ objectFit: "cover" }}
            />
          </Box> */}

          <Box sx={{ width: "60%" }}>
            <Typography
              sx={{
                fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.7rem" },
                fontWeight: "600",
              }}
            >
              {attributeName}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1.0rem", sm: "1.1rem", md: "1.2rem" },
                fontWeight: "400",
              }}
            >
              {attributeValue} {attributeUnit}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default WeatherDetails;
