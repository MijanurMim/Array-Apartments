import { Button, Container, Paper, Typography } from "@mui/material";
import React from "react";

const Welcome = () => {
  return (
    <Container>
      <Paper elevation={3} sx={{ mt: "100px" }}>
        <Typography variant="h3" color="primary">
          Welcome To Array Apartments
        </Typography>
        <Typography variant="h6" color="primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae id
          quo sit. Repellendus, vitae. Vitae dolore, maxime deserunt similique
          ab hic, dolorem aut quis quisquam suscipit, doloribus dolor rerum. In.
        </Typography>
        <Button variant="contained">More About Us</Button>
      </Paper>
    </Container>
  );
};

export default Welcome;
