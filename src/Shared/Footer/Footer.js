import {
  Button,
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#F2F3F5" }}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontWeight: 700,
                fontSize: "30px",
                color: "tomato",
              }}
            >
              <div className="navName">E Import Shop</div>
            </Typography>
            <Typography variant="caption">
              You Can Easily Purchase Any Product. If You Do Not Like the
              Product? You Can Send a Return: E-Import-Shop Easy Shopping &
              Hassle Free Return in Bangladesh!
            </Typography>
            <TextField
              sx={{ my: 1 }}
              id="outlined-helperText"
              label="Your Email Address"
              type="email"
            />
            <br />
            <Button className="button" size="large" variant="outlined">
              Subscribe
            </Button>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontWeight: 700,
                mt: 1,
              }}
            >
              <div className="navName">
                <Divider>Contact</Divider>
              </div>
            </Typography>
            <Typography variant="subtitle2">Address:</Typography>
            <Typography variant="caption">Narail, Dhaka, Bangladesh</Typography>
            <Typography variant="subtitle2">Phone:</Typography>
            <Typography variant="caption">+8801640927177</Typography>
            <Typography variant="subtitle2">Email:</Typography>
            <Typography variant="caption">eimportshop@gmial.com</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontWeight: 700,
                mt: 1,
              }}
            >
              <div className="navName">
                <Divider>E Import Shop Quick Link</Divider>
              </div>
            </Typography>
            <Typography variant="subtitle2">About</Typography>
            <Typography variant="subtitle2">Contact Us</Typography>
            <Typography variant="subtitle2">Terms</Typography>
            <Typography variant="subtitle2">Privacy Policy</Typography>
            <Typography variant="subtitle2">Return Policy</Typography>
            <Typography variant="subtitle2">Shipping Policy</Typography>
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ backgroundColor: "tomato", p: 2, mt: 1 }}>
        <Typography variant="body1" component="div">
          <span style={{ color: "white", fontWeight: 700 }} className="navName">
            E Import Shop
          </span>{" "}
          <span>all right reserved © 2022</span>
        </Typography>
      </Box>
    </div>
  );
};

export default Footer;
