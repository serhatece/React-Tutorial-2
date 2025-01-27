import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useState } from "react";

export default function RadioButton() {
  const [value, setValue] = useState("0");

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <Box>
      <p>{value}</p>
      <FormControl>
        <FormLabel>Eğitiminiz</FormLabel>
        <RadioGroup name="eğitim" row value={value} onChange={handleChange}>
          <FormControlLabel
            control={<Radio size="small" color="primary" />}
            label="Lise"
            value="0"
          />
          <FormControlLabel
            control={<Radio size="medium" color="error" />}
            label="Üniversite"
            value="1"
          />
          <FormControlLabel
            control={<Radio size="large" color="success" />}
            label="Lisans"
            value="2"
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );
}
