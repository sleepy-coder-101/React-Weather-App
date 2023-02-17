import React from "react";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@mui/material";
import SearchBox from "./SearchBox";
import HeroBox from "./HeroBox";
import WeatherBox from "./WeatherBox";
import EnterLocation from "./EnterLocation";

const MainBox = () => {
  const [queryLocation, setQueryLocation] = useState("");
  const [weather, setWeather] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  let latitude = 0;
  let longitude = 0;

  const recievedLocation = (locationName) => {
    setQueryLocation(locationName);
  };

  const fetchData = async (event) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${queryLocation}&limit=1&units=metric&appid=${
          import.meta.env.VITE_API_KEY
        }`
      );

      const data = await response.json();
      latitude = data[0].lat;
      longitude = data[0].lon;

      const weatherQuery = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${
          import.meta.env.VITE_API_KEY
        }`
      );
      const weatherData = await weatherQuery.json();
      // console.log(weatherData);
      setWeather(weatherData);
      setIsLoaded(true);
    } catch (err) {
      console.log(`There was an error: ${err}`);
    }
  };

  useEffect(() => {
    if (queryLocation !== "") {
      fetchData();
    }
  }, [queryLocation]);

  return (
    <Card
      variant="outlined"
      sx={{
        minWidth: "45%",
        maxWidth: { xs: "95%", sm: "75%" },
        borderRadius: "1rem",
        height: "auto",
        backgroundColor: "rgba(17, 17, 17, 0.6)",
      }}
    >
      <CardContent>
        <SearchBox onQuerySubmit={recievedLocation} />

        {isLoaded ? (
          <>
            <HeroBox weatherData={weather} />
            <WeatherBox weatherData={weather} />
          </>
        ) : (
          <>
            <EnterLocation />
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default MainBox;
