import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material";
import { useState } from "react";

export default function CheckBoxUsage() {
  const [value, setValue] = useState(true);
  const [skills, setSkills] = useState(["HTML", "CSS"]);

  const handleChange = (e) => {
    setValue(e.target.checked);
  };

  const handleSkillChange = (e) => {
    const index = skills.indexOf(e.target.value);
    if (index === -1) {
      setSkills([...skills, e.target.value]);
    } else {
      setSkills(skills.filter((s) => s !== e.target.value));
    }
  };

  return (
    <Box>
      <Box>
        <FormControlLabel
          label="Kullanım koşulları"
          control={<Checkbox checked={value} onChange={handleChange} />}
        />
      </Box>
      <Box>
        <Checkbox
          icon={<span>✘</span>}
          checkedIcon={<span>✔</span>}
          checked={value}
          onChange={handleChange}
        />
      </Box>
      <Box>
        <FormControl>
          <FormLabel>Yetenekler</FormLabel>
          <FormGroup>
            <FormControlLabel
              label="HTML"
              control={
                <Checkbox
                  value="HTML"
                  checked={skills.includes("HTML")}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              label="CSS"
              control={
                <Checkbox
                  value="CSS"
                  checked={skills.includes("CSS")}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              label="JS"
              control={
                <Checkbox
                  value="JS"
                  checked={skills.includes("JS")}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              label="React"
              control={
                <Checkbox
                  value="React"
                  checked={skills.includes("React")}
                  onChange={handleSkillChange}
                />
              }
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
}
