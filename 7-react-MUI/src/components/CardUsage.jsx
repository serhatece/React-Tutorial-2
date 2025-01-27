import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export default function CardUsage() {
  return (
    <Box width="300px">
      <Card>
        <CardMedia
          component="img"
          height="150"
          image="https://picsum.photos/500"
          alt="random image"
        ></CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lorem ipsum dolor sit amet
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            doloremque officia, eaque, perspiciatis obcaecati aspernatur
            accusamus consequatur.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
}
