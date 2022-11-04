import Button from '@mui/material/Button';
import { useModal } from '../hook/useModal';
/*import './Modal.css'*/
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import Imagen from "./firma.png";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ButtonGroup from '@mui/material/ButtonGroup';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';



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

const Factura= ({el})=>{
    let { name,type,Number } = el;
  
    const handelPrint = ()=>{   window.print()};
    const[isOpenModal,openModal,closeModal] = useModal(false);


    return(<div><Button onClick={openModal}>Factura</Button><div><div className={`modal ${isOpenModal && "is-open"}`} onClick={closeModal}><div className='modal-container'> <h1 className='h1'>Compass Point</h1><div onClick={handelPrint}> <PictureAsPdfIcon color="primary"/> </div> <hr></hr><div className='info'>
          <div id="divb2"><h3>Factura por derecho a cupo</h3> </div> 
          <div id="divb2"> <p>10/5/2022</p></div> 
          <div id="divb2"> <p>Este documento es válida el pago realizado por {name} con el valor de 1200$RD número de transacción </p></div> 
          <div id="divb2"> 
          <TableContainer component={Paper} color="primary">
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nombre </StyledTableCell>
            <StyledTableCell align="right">Tipo de pago</StyledTableCell>
            <StyledTableCell align="right">Numero de transaccion</StyledTableCell>
            <StyledTableCell align="right">Monto</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
      
            <StyledTableRow key={el.id}>
              <StyledTableCell component="th" scope="row">
                {name}
              </StyledTableCell>
              <StyledTableCell align="right">{type}</StyledTableCell>
              <StyledTableCell align="right">{Number}</StyledTableCell>
              <StyledTableCell align="right">1200$RD</StyledTableCell>
        
            </StyledTableRow>
      
        </TableBody>
      </Table>
    </TableContainer>
          </div> 
          
          <img className="imgm" src={Imagen} style={{height:'100px',width:'150px',marginLeft: '250px'}}/>

        
        </div></div></div></div></div>);
}


export default Factura;