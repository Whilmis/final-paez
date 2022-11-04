import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Factura from './Factura'
import AppWidgetSummary from './AppWidgetSummary'
import { Grid, Container, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import PageviewIcon from '@mui/icons-material/Pageview';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#0077d1",
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

const CrudTableR = () => {

const db = [{name:"whilmis Perez", type:"Paypal",  Number:"55478991"}]

 
  return (

    <div>
    <hr></hr>
             
     
  
    
     

      
    <TableContainer component={Paper} color="primary">
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nombre </StyledTableCell>
            <StyledTableCell align="right">Tipo de pago</StyledTableCell>
            <StyledTableCell align="right">Numero de transaccion</StyledTableCell>
            <StyledTableCell align="right">Acciones</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {db.map((el) => (
            <StyledTableRow key={el.id}>
              <StyledTableCell component="th" scope="row">
                {el.name}
              </StyledTableCell>
              <StyledTableCell align="right">{el.type}</StyledTableCell>
              <StyledTableCell align="right">{el.Number}</StyledTableCell>
              <StyledTableCell align="right">{
                  <ButtonGroup variant="outlined" aria-label="outlined button group">
                    <Factura el={el}></Factura>
                  <Button >Eliminar</Button>
                </ButtonGroup>
              }</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
};

export default CrudTableR;