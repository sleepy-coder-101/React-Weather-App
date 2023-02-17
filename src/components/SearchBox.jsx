import React from "react";
import { useState } from "react";
import {
  Box,
  InputAdornment,
  IconButton,
  FormControl,
  InputLabel,
  FilledInput,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBox = (props) => {
  const [queryLocation, setQueryLocation] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onQuerySubmit(queryLocation);
    setQueryLocation("");
  };

  const handleChange = (event) => {
    setQueryLocation(event.target.value);
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          color: "#ffffff",
          borderRadius: "1rem",
        }}
        noValidate
        autoComplete="off"
      >
        <FormControl
          sx={{
            input: { color: "#ffffff" },
            label: { color: "#ffffff" },
            backgroundColor: "rgba(85,85,85, 0.8)",
            borderRadius: "1rem",
          }}
          variant="filled"
          fullWidth
        >
          <InputLabel
            htmlFor="filled-adornment-search"
            sx={{
              fontSize: "1rem",
              fontWeight: "400",
              color: "#ffffff",
            }}
          >
            Search...
          </InputLabel>

          <FilledInput
            autoFocus
            onChange={handleChange}
            value={queryLocation}
            label="Search..."
            variant="standard"
            fullWidth
            id="filled-adornment-search"
            type="text"
            disableUnderline={true}
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="search" type="submit">
                  <SearchIcon
                    aria-label="search"
                    edge="end"
                    sx={{ color: "#ffffff" }}
                  />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </Box>
    </>
  );
};

export default SearchBox;
