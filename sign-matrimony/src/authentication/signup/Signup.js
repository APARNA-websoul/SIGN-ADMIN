import React from "react";
import classes from './Signup.module.css';
import './auth.css'
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Marriage from "../../assets/images/marriage2.jpg";
import logo from "../../assets/images/logo.png";

function signup() {
  return (
    <>
      <div className={classes.authheader}>
        <img src={logo} alt="logo" className={classes.logoimg}></img>
      </div>

      <div className={classes.signupbody}>
        <Grid container spacing={3}>
          <Grid item sm={6}>
            <div className={classes.imagesection}>
              <img className={classes.marriageimg} src={Marriage} alt="logo"></img>
              <div className={classes.marriagequote}>
                “A good marriage is one where each partner secretly suspects
                they got the better deal.”
              </div>
            </div>
          </Grid>

          <Grid item sm={6}>
            <div className={classes.formsection}>
              <h3 className={classes.formhead}>Create New Account</h3>
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                className={classes.textfield}
                sx={{ marginTop: "20px" }}
              />
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                className={classes.textfield}
                sx={{ marginTop: "20px" }}
              />
              <TextField
                id="Password"
                label="Password"
                variant="outlined"
                className={classes.textfield}
                sx={{ marginTop: "20px" }}
              />
              <TextField
                id="Password"
                label="Confirm Password"
                variant="outlined"
                className={classes.textfield}
                sx={{ marginTop: "20px", marginBottom: "20px" }}
              />

              <Link to="/" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  className={classes.textfield}
                  sx={{
                    height: "50px",
                    marginTop: "20px",
                    fontSize: "18px",
                    backgroundColor: "#f14f4f",
                    "&:hover": {
                      background: "#D83C3C",
                    },
                    letterSpacing: "1.5px",
                  }}
                >
                  Sign Up
                </Button>
              </Link>
              <p className={classes.qustn}>
                Already have an account? <Link to="/">Login</Link>
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default signup;
