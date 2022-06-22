import React from 'react'
import classes from './Email.module.css';
import { Link } from 'react-router-dom';
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Marriage from "../../assets/images/marriage3.jpg";
import logo from "../../assets/images/logo.png";

function Email() {
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
                “To get the full value of joy you must have someone to divide it with”
              </div>
            </div>
          </Grid>

          <Grid item sm={6}>
            <div className={classes.formsection}>
            <h3 className={classes.formhead}>Please enter your E-mail id</h3>
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                className={classes.textfield}
                sx={{ marginTop: "20px" }}
              />

              <Link to="/forget" style={{ textDecoration: "none" }}>
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
                  Send
                </Button>
              </Link>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default Email