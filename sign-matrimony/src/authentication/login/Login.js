import React from "react";
import classes from './Login.module.css';
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Marriage from "../../assets/images/marriage1.jpg";
import logo from "../../assets/images/logo.png";

function Login() {
  return (
    <div>
      <div className={classes.authheader}>
        <img src={logo} alt="logo" className={classes.logoimg}></img>
      </div>

      <div className={classes.loginbody}>
        <Grid container spacing={3}>
          <Grid item sm={6}>
            <div className={classes.imagesection}>
              <img className={classes.marriageimg} src={Marriage} alt="logo"></img>
              <div className={classes.marriagequote}>
                "Marriage Gives You Both Roots And Wings"
              </div>
            </div>
          </Grid>

          <Grid item sm={6}>
            <div className={classes.formsection}>
            <h3 className={classes.formhead}>Please login to continue</h3>
              <TextField
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
                sx={{ marginTop: "20px", marginBottom: "20px" }}
              />

              <Link to="/admin" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  className={classes.textfield}
                  sx={{
                    height: "50px",
                    fontSize: "18px",
                    marginTop: "20px",
                    backgroundColor: "#f14f4f",
                    "&:hover": {
                      background: "#D83C3C",
                    },
                    letterSpacing: "1.5px",
                  }}
                >
                  Login
                </Button>
              </Link>
              <p className={classes.qustn}>
                
                <span className={classes.qustn1}><a href="/email">Forget Password</a></span>
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Login;
