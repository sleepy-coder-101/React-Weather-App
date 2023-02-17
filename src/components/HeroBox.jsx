import { Card, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import HeroDetails from "./HeroDetails";
import { ReactComponent as Temperature } from "../assets/temperature.svg";
import { ReactComponent as Location } from "../assets/location.svg";

const HeroBox = (props) => {
  const { weatherData } = props;
  const url = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function setTime(givenTimeZone) {
    const time = new Date();
    // console.log("Present Location time:", time);

    const utcTime = time.getTime() + time.getTimezoneOffset() * 60 * 1000;
    // console.log("UTC time offset:", utcTime);

    givenTimeZone *= 1000;
    // console.log("New City time offset:", givenTimeZone);

    let newTime = new Date(utcTime + givenTimeZone);
    newTime = newTime.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
    // console.log("New city time:", newTime);
    return newTime;
  }

  function setTimeZone(givenTime) {
    let symbol = "",
      mins = "00",
      hours = "00";
    if (givenTime > 0) symbol = "+";

    const newTime = givenTime / 3600;
    hours = newTime.toString().split(".")[0];
    if (newTime !== Math.floor(newTime)) {
      mins = newTime.toString().split(".")[1];
      mins = mins * 6;
    }

    return `${symbol}${hours}:${mins}`;
  }

  return (
    <Card
      sx={{
        mt: 3,
        borderRadius: "1rem",
        backgroundColor: "rgba(51, 51, 51, 0.6)",
        color: "#ffffff",
        width: "100%",
      }}
    >
      <Box
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        alignContent="center"
        justifyContent="space-between"
      >
        <HeroDetails
          attributeName1={"Location"}
          attributeValue1={weatherData.name}
          attributeName2={"Time"}
          attributeValue2={setTime(weatherData.timezone)}
          attributeIcon={<Location fill="#ffffff" />}
        />

        <HeroDetails
          attributeName1={"Temp"}
          attributeValue1={weatherData.main.temp}
          attributeName2={"Real feel"}
          attributeValue2={weatherData.main.feels_like}
          attributeUnit={"°C"}
          attributeIcon={<Temperature fill="#ffffff" />}
        />

        <Box
          display={{ xs: "none", sm: "flex" }}
          alignItems="center"
          justifyContent="center"
          flexWrap="wrap"
          sx={{ width: "33%" }}
        >
          <Box sx={{ width: "40%", textAlign: "center" }}>
            <img alt="weather-icon" src={url} width="100%" />
          </Box>
          <Box sx={{ width: "60%" }}>
            <Typography
              sx={{
                fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.7rem" },
                fontWeight: "600",
              }}
            >
              {weatherData.weather[0].main}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1.0rem", sm: "1.1rem", md: "1.2rem" },
                fontWeight: "400",
              }}
            >
              {capitalizeFirstLetter(weatherData.weather[0].description)}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default HeroBox;
