import { Box } from "@mui/material";
import React from "react";
import WeatherDetails from "./WeatherDetails";

import { ReactComponent as Wind } from "../assets/wind.svg";
import { ReactComponent as Humidity } from "../assets/humidity.svg";
import { ReactComponent as Pressure } from "../assets/pressure.svg";
import { ReactComponent as Visibility } from "../assets/visibility.svg";
import { ReactComponent as Sunrise } from "../assets/sunrise.svg";
import { ReactComponent as Sunset } from "../assets/sunset.svg";

const WeatherBox = (props) => {
  const { weatherData } = props;
  const baseUrl = `src/assets`;

  const findDate = (unixDate) => {
    let date = new Date(unixDate * 1000);
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="space-between"
      alignItems="stretch"
    >
      <WeatherDetails
        attributeName={"Wind"}
        attributeValue={weatherData.wind.speed}
        attributeUnit={"m/s"}
        attributeIcon={<Wind fill="#ffffff" />}
        //   attributeUrl={`${baseUrl}/wind.svg`}
      />
      <WeatherDetails
        attributeName={"Humidity"}
        attributeValue={weatherData.main.humidity}
        attributeUnit={"%"}
        attributeIcon={<Humidity fill="#ffffff" />}
      />
      <WeatherDetails
        attributeName={"Pressure"}
        attributeValue={weatherData.main.pressure}
        attributeUnit={"hPa"}
        attributeIcon={<Pressure fill="#ffffff" />}
      />
      <WeatherDetails
        attributeName={"Visibility"}
        attributeValue={(weatherData.visibility / 1000).toPrecision(2)}
        attributeUnit={"km"}
        attributeIcon={<Visibility fill="#ffffff" />}
      />
      <WeatherDetails
        attributeName={"Sunrise"}
        attributeValue={findDate(weatherData.sys.sunrise)}
        attributeUnit={""}
        attributeIcon={<Sunrise fill="#ffffff" />}
      />
      <WeatherDetails
        attributeName={"Sunset"}
        attributeValue={findDate(weatherData.sys.sunset)}
        attributeUnit={""}
        attributeIcon={<Sunset fill="#ffffff" />}
      />
    </Box>
  );
};

export default WeatherBox;
