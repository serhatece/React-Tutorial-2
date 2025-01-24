import Button from "@mui/material/Button";
import { IconButton, Stack } from "@mui/material";
import Send from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function ButtonUsage() {
  return (
    <>
      <Stack direction={"row"} spacing={2}>
        <Button variant="contained">contained</Button>
        <Button variant="outlined">outlined</Button>
        <Button variant="text">text</Button>
      </Stack>

      <Stack direction={"row"} spacing={2} sx={{ mt: 2 }}>
        <Button variant="contained" color="success">
          contained
        </Button>
        <Button variant="outlined" color="success">
          outlined
        </Button>
        <Button variant="text" color="success">
          text
        </Button>
      </Stack>

      <div style={{ margin: "2rem 0" }}>
        <Button
          variant="contained"
          color="success"
          size="small"
          endIcon={<Send />}
        >
          contained
        </Button>
        <Button
          variant="outlined"
          color="success"
          size="medium"
          startIcon={<Send />}
        >
          outlined
        </Button>
        <Button variant="text" color="success" size="large" endIcon={<Send />}>
          text
        </Button>
      </div>

      <div style={{ margin: "2rem 0" }}>
        <IconButton color="error">
          <DeleteIcon />
        </IconButton>
      </div>

      <ButtonGroup
        variant="contained"
        color="secondary"
        aria-label="outlined primary button group"
      >
        <Button color="primary">One</Button>
        <Button color="secondary">Two</Button>
        <Button color="success">Three</Button>
      </ButtonGroup>
    </>
  );
}
