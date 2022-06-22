import React,{useEffect,useState} from 'react'
import classes from './View.module.css';
import { Grid } from "@mui/material";
import Header from "../../../components/Header/header"
import { db } from "../../../db"
import { ref, onValue} from 'firebase/database';

function ProfileDetail() {
  
  const [record, setRecord] = useState([]);
  
  useEffect(() => { 
    const starCountRef = ref(db, '/record' );  
     onValue(starCountRef, snapshot => {       
       const data1 = snapshot.val();
       if (data1 !== null) {
         setRecord([]);
         Object.values(data1).map(Team => {
           setRecord(oldArray => [...oldArray, Team]);         
         });        
       } else {
         setRecord([]);
       }      
       console.log('record', record);
       record.map((item, index) => {
         console.log('item.name', item.name);
       });      
     }
     ,{
       onlyOnce: true
     } 
     );    
   },[]);  

  

  return (
    <div>
    <div>
      <div>
        <Header />
      </div>

      
        <div className={classes.formbody}>
          {
            record && record.map(item=>{
              return(
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
                      <label>Salary:{item.salary}</label>
                    </Grid>
                    <Grid item lg={4} sm={6}>
                      <label>City Living in:{item.CityLivingIn}</label>
                    </Grid>
                    <Grid item lg={4} sm={6}>
                      <label>Native Place:{item.NativePlace}</label>
                    </Grid>
                    <Grid item lg={4} sm={6}>
                      <label>Height</label>
                    </Grid>
                    <Grid item lg={4} sm={6}>
                      <label>Complexion</label>
                    </Grid>
                    <Grid item lg={4} sm={6}>
                      <label>Mother Tongue :{item.MotherTongue}</label>
                    </Grid>
                    <Grid item lg={4} sm={6}>
                      <label>Spoken Languages :</label>
                    </Grid>
                    <Grid item lg={4} sm={6}>
                      <label>Religion :</label>
                    </Grid>
                    <Grid item lg={4} sm={6}>
                      <label>Physical Status :</label>
                    </Grid>
                  </Grid>
    
                  <p className={classes.subhead}>Family Details</p>
                  <Grid container>
                    <Grid item lg={4} sm={6}>
                      <label>No.of Brothers :</label>
                    </Grid>
                    <Grid item lg={4} sm={6}>
                      <label>No.of Sisters</label>
                    </Grid>
                    <Grid item lg={4} sm={6}>
                      <label>About your Family</label>
                    </Grid>
                  </Grid>
    
                  <p className={classes.subhead}>Contact Person Details</p>
                  <Grid container>
                    <Grid item lg={4} sm={6}>
                      <label>E-mail ID :</label>
                    </Grid>
                    <Grid item lg={4} sm={6}>
                      <label>Phone No. :</label>
                    </Grid>
                    <Grid item lg={4} sm={6}>
                      <label>Address :</label>
                    </Grid>
                    <Grid item lg={4} sm={6}>
                      <label>Anything you want to Write :</label>
                    </Grid>
                  </Grid>
                  
    
                </div>
              </div>
              )
              

            })
          }

        </div>
        
      </div>

   
    
    
    </div>
  )
}

export default ProfileDetail