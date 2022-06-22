import React,{useEffect,useState}from "react";
import './admin.css'
import { db } from "../../db"
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ref, onValue} from 'firebase/database';
import { Link, useLocation, useParams } from "react-router-dom";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#E77171',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
    
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  slno: number,
  name: string,
  status: String,
  view: String,
  download: String,
  
)
{
  return {slno, name, status, view, download };
}

function Admin() {
  
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
     <div id="body">
        <div className="table">
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Sl No</StyledTableCell>
                  <StyledTableCell align="right">Name</StyledTableCell>
                  <StyledTableCell align="right">Status</StyledTableCell>
                  <StyledTableCell align="right">View</StyledTableCell>
                  <StyledTableCell align="right">Download</StyledTableCell>
                </TableRow>
              </TableHead>
               <TableBody>
               {record.map((item,index) => (
                  <StyledTableRow  key={index}>
                    <StyledTableCell component="th" scope="row">{index}</StyledTableCell>
                    <StyledTableCell align="right" >{item.name}</StyledTableCell>   
                    <StyledTableCell align="right" >Paid</StyledTableCell>                
                     
                    <StyledTableCell align="right" className="view">
                       <link to="/view" >view</link>
                    </StyledTableCell>
                    <StyledTableCell align="right" className="download"><a href="abc">Download</a></StyledTableCell>
                    
                  </StyledTableRow>
                ))}
              </TableBody>              
            </Table>
          </TableContainer>
        </div>
      </div>
      <div className="mobile-view">
        <table id="mobile-table">
          <tr id="mb_head">
            <th>Name</th>
            <th>Status</th>
            <th>View</th>
            <th>Download</th>
          </tr>
          {record.map((item, index) => {
            return (
              <tr key={index} id="mb-data">
                <td>{item.name}</td>
                <td>status</td>
                <td><a href="abc">View</a></td>
                <td><a href="abc">Download</a></td>
              </tr>
            )
          })}
        </table>
      </div>
    </div>
  )
}

export default Admin;
