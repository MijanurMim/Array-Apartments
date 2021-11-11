import { Button, Container, Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

const AddReviews = () => {
  const { user } = useAuth();
  const [value, setValue] = React.useState("");

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const proceed = window.confirm("Want to Submit Your Review?");
    if (proceed) {
      alert(" Your Reviewsubmitted succesfully");
      data.email = user?.email;

      fetch("http://localhost:5000/addReviews", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => console.log(result));
    }
  };
  return (
    <Container sx={{ mt: "165px" }} className="packageDetailForm">
      <Typography variant="h3" color="primary">
        Give Review
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("displayName", { required: true })}
          placeholder="name"
          className="inputField"
          defaultValue={user.displayName}
        />

        <input
          {...register("description", { required: true })}
          type="textarea"
          placeholder="Description"
          className="inputField"
        />

        {/* Rating area  */}
        <input
          {...register("rating", { required: true })}
          value={value}
          type="number"
          className="inputField"
        />
        <Rating
          value={value}
          name="simple-controlled"
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />

        <br />

        <br />
        <Button type="submit" variant="contained" className="button">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default AddReviews;
