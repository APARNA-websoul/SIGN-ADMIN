import React, { useEffect, useState } from 'react'
import classes from './View.module.css';
import { Grid } from "@mui/material";
import Header from "../../../components/Header/header"
import { db } from "../../../db"
import { ref, onValue } from 'firebase/database';
import { useParams } from "react-router-dom";

function ProfileDetail() {

  const [record, setRecord] = useState([]);
  const [uniqueRecord, setUniqueRecord] = useState([]);
  const { id } = useParams();
  const [item, setItem] = useState({})

  useEffect(() => {
    const starCountRef = ref(db, '/record');
    onValue(starCountRef, snapshot => {
      const data1 = snapshot.val();
      Object.values(data1).map(Team => {

        setRecord((old) => [...old, Team]);
      });
      const seen = new Set();
      const filteredArr = record.filter(el => {
        const duplicate = seen.has(el.Email);
        seen.add(el.Email);
        return !duplicate;
      });
      setUniqueRecord(filteredArr)

      const unique = uniqueRecord.filter((data) => data.uid === id)
      setItem(...unique)
    }

    );
  }, [uniqueRecord]);

console.log("item is:",item);

  if(item)
  return (
   <div>
      <div>
        <div>
          <Header />
        </div>
        <div className={classes.formbody}>
          <div className={classes.formbox}>
            <h3 className={classes.formhead}>PERSONAL DETAILS</h3>
            <div className={classes.formsection}>
              <Grid container>
                <Grid item lg={4} sm={6}>
                  <label>Name :{item.name}</label>
                </Grid>
                <Grid item lg={4} sm={6}>
                  <label>Age :{item.age}</label>
                </Grid>
                <Grid item lg={4} sm={6}>
                  <label>Gender :{item.Gender}</label>
                </Grid>
                <Grid item lg={4} sm={6}>
                  <label>Highest Education :{item.HighestEducation}</label>
                </Grid>
                <Grid item lg={4} sm={6}>
                  <label>Profession :{item.profession}</label>
                </Grid>
                <Grid item lg={4} sm={6}>
                  <label>Salary:{item.Salary}</label>
                </Grid>
                <Grid item lg={4} sm={6}>
                  <label>City Living in:{item.CityLivingIn}</label>
                </Grid>
                <Grid item lg={4} sm={6}>
                  <label>Native Place:{item.NativePlace}</label>
                </Grid>
                <Grid item lg={4} sm={6}>
                  <label>Height:{item.Height}</label>
                </Grid>
                <Grid item lg={4} sm={6}>
                  <label>Complexion:{item.complexion}</label>
                </Grid>
                <Grid item lg={4} sm={6}>
                  <label>Mother Tongue :{item.MotherTongue}</label>
                </Grid>
                <Grid item lg={4} sm={6}>
                  <label>Spoken Languages :{item.SpokenLanguages}</label>
                </Grid>
                <Grid item lg={4} sm={6}>
                  <label>Religion :{item.Religion}</label>
                </Grid>
                <Grid item lg={4} sm={6}>
                  <label>Physical Status :{item.PhysicalStatus}</label>
                </Grid>
              </Grid>

              <p className={classes.subhead}>Family Details</p>
              <Grid container>
                <Grid item lg={4} sm={6}>
                  <label>No.of Brothers :{item.NoOfBrothers}</label>
                </Grid>
                <Grid item lg={4} sm={6}>
                  <label>No.of Sisters:{item.NoOfSisters}</label>
                </Grid>
                <Grid item lg={4} sm={6}>
                  <label>About your Family:{item.AboutYourFamily}</label>
                </Grid>
              </Grid>

              <p className={classes.subhead}>Contact Person Details</p>
              <Grid container>
                <Grid item lg={4} sm={6}>
                  <label>E-mail ID :{item.Email}</label>
                </Grid>
                <Grid item lg={4} sm={6}>
                  <label>Phone No. :{item.PhoneNo}</label>
                </Grid>
                <Grid item lg={4} sm={6}>
                  <label>Address :{item.Address}</label>
                </Grid>
                <Grid item lg={4} sm={6}>
                  <label>Anything you want to Write :{item.AnyThingWantToWrite}</label>
                </Grid>
              </Grid>
            </div>
          </div>
        </div> 
      </div>
    </div>
  )
}

export default ProfileDetail