import { Stack, TextField } from "@mui/material";

export default function TextFieldUsage() {
  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Stack direction={"row"} spacing={2}>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="standard-basic" label="Standard" variant="standard" />
      </Stack>

      <Stack direction={"row"} spacing={2} sx={{ mt: 2 }}>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          size="small"
          color="primary"
        />
        <TextField
          id="filled-basic"
          label="Filled"
          variant="filled"
          size="medium"
          color="success"
        />
        <TextField
          id="standard-basic"
          label="Standard"
          variant="standard"
          size="large"
          color="error"
        />
      </Stack>
    </Stack>
  );
}
