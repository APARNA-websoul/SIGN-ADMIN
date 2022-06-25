import React, { useEffect, useState } from "react";
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
import { ref, onValue } from 'firebase/database';
import { Link, useLocation, useParams, NavLink } from "react-router-dom";


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

) {
  return { slno, name, status, view, download };
}

function Admin() {

  const [record, setRecord] = useState([]);
  const [uniqueRecord, setUniqueRecord] = useState([]);

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

    }

    );
  }, [uniqueRecord]);


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
                {uniqueRecord && uniqueRecord.length !== 0 && uniqueRecord.map((item, index) => (
                  <StyledTableRow key={item.Email}>
                    <StyledTableCell component="th" scope="row">{index + 1}</StyledTableCell>
                    <StyledTableCell align="right" >{item.name}</StyledTableCell>
                    <StyledTableCell align="right" >Paid</StyledTableCell>

                    <StyledTableCell align="right" className="view">
                      {/* <Link to="/view" >view</Link> */}
                      <NavLink
                      
                        to={{
                          pathname: `/view/${item.uid}`,
                          state: { ProductData: item },
                        }}
                        style={{ fontWeight: 'bolder' }}>view</NavLink>
                    </StyledTableCell>
                    <StyledTableCell align="right" className="download"><a href="abc">Download</a></StyledTableCell>

                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>

    </div>
  )
}

export default Admin;
