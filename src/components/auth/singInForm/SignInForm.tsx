"use client";

import React from "react";
import { useFormik } from "formik";
import { Button, TextField, Typography, Container, Paper } from "@mui/material";
import getLoginValidationSchema from "@/validations/signInValidationSchema";
import { useDispatch } from "react-redux";
import { loginThunk } from "@/redux/thunk/authThunk";

const SigninForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: getLoginValidationSchema(),
    onSubmit: async (values) => {
      console.log("Submitted", values);

      const dataToSend = {
        email: values.email,
        password: values.password,
      };
      dispatch(loginThunk(dataToSend as any) as any);

      // Handle sign-in logic here
    },
  });

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 8 }}>
        <Typography variant="h4" mb={3} align="center" color="#2ebcaa">
          Sign In
        </Typography>

        <form onSubmit={formik.handleSubmit}>
          <TextField
            name="email"
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />

          <TextField
            name="password"
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              backgroundColor: "#2ebcaa",
              "&:hover": {
                backgroundColor: "#27a699",
              },
            }}
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? "Signing In..." : "Sign In"}
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default SigninForm;
