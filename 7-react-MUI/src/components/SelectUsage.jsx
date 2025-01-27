import { Box, MenuItem, TextField } from "@mui/material";
import { useState } from "react";

const cities = [
  { label: "Kocaeli", value: "41" },
  { label: "Istanbul", value: "42" },
  { label: "Ankara", value: "43" },
  { label: "Izmir", value: "44" },
  { label: "Bursa", value: "45" },
];

export default function SelectUsage() {
  const [city, setCity] = useState(41);

  function handleChange(e) {
    setCity(e.target.value);
  }

  return (
    <Box width="300px">
      <TextField
        label="Select City"
        value={city}
        onChange={handleChange}
        select
        fullWidth
      >
        {/* <MenuItem value="41">Kocaeli</MenuItem>
        <MenuItem value="42">Istanbul</MenuItem>
        <MenuItem value="43">Ankara</MenuItem>
        <MenuItem value="44">Izmir</MenuItem>
        <MenuItem value="45">Bursa</MenuItem> */}

        {cities.map((city) => (
          <MenuItem key={city.value} value={city.value}>
            {city.label}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
}
