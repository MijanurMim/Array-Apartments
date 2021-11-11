import ShareIcon from "@mui/icons-material/Share";
import {
  CardActionArea,
  CardActions,
  CardHeader,
  Grid,
  IconButton,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  card: {
    [theme.breakpoints.down("md")]: {
      width: "300px",
    },
  },
  cardButton: {
    display: "flex",
    justifyContent: "center",
  },
  buttonText: {
    textDecoration: "none",
  },
}));

const Review = ({ pd }) => {
  const classes = useStyles();
  // const [value, setValue] = React.useState(2);
  const { title, description, rating, email } = pd;
  return (
    <Grid item xs={12} md={5} sx={{ m: "20px" }}>
      <Card className={classes.card}>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <ShareIcon></ShareIcon>
            </IconButton>
          }
          title={title}
        />
        <CardActionArea>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {email}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <Rating name="read-only" value={rating} readOnly />
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.cardButton}></CardActions>
      </Card>
    </Grid>
  );
};

export default Review;
