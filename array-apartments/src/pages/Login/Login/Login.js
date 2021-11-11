import {
  Alert,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Spinner from "../../Shared/Spinner/Spinner";

const Login = () => {
  // google signin
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, authError, isLoading, signInUsingGoogle } =
    useAuth();

  //  redirect the private route
  const location = useLocation();
  const history = useHistory();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };

  // Handling Google Sign in
  const handleGoogleSignIn = () => {
    signInUsingGoogle(location, history);
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item sx={{ mt: 10 }} xs={12} md={6}>
          <Typography variant="h4" color="primary">
            Login
          </Typography>
          <form onSubmit={handleLoginSubmit}>
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Your Email"
              variant="standard"
              type="email"
              name="email"
              onBlur={handleOnChange}
            />
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="filled-basic"
              label="Your Password"
              variant="filled"
              type="password"
              name="password"
              onChange={handleOnChange}
            />
            <Button
              type="submit"
              sx={{ width: "75%", m: 1 }}
              variant="contained"
            >
              Login
            </Button>
            {/* go to register component  */}
            <Link style={{ textDecoration: "none" }} to="register">
              <Button>New User? Please Register</Button>
            </Link>

            {/* Spinner  */}
            {isLoading && <Spinner />}

            {/* Login Alert  */}
            {user?.email && (
              <Alert severity="success">You Logged in Successfully</Alert>
            )}
            {authError && <Alert severity="error">{authError}</Alert>}
          </form>
          <p>----------------------------------------------</p>
          <Button onClick={handleGoogleSignIn} variant="contained">
            Google Sign In
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
