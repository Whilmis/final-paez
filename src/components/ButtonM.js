import Button from '@mui/material/Button';
import { useModal } from '../hook/useModal';
import Alert from '@mui/material/Alert';
/*import './Modal.css'*/
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';




const ButtonM = ({el})=>{
    let { nombreEstudiante,apellidoEstudiante,acta,direccion,nombrePadre,tanda,apellidoPadre,telefono,cedula,confirmacion,pago,curso,documento_personal, id } = el;
  
    const handelPrint = ()=>{   window.print()};
    const[isOpenModal,openModal,closeModal] = useModal(false);


    return(<div><Button onClick={openModal}>Detalle</Button><div><div className={`modal ${isOpenModal && "is-open"}`} onClick={closeModal}><div className='modal-container'> <h1 className='h1'>Compass Point</h1><div onClick={handelPrint}> <PictureAsPdfIcon color="primary"/> </div> <hr></hr><div className='info'>
          <div id="divb2"><h3>Nombre del estudiante</h3> <p>{nombreEstudiante}</p></div> 
          <div id="divb2"><h3>Apellido del Estudiante</h3> <p>{apellidoEstudiante}</p></div> 
          <div id="divb2"><h3>Direccion</h3> <p>{direccion}</p></div> 
          <div id="divb2"><h3>Nombre del Padre</h3> <p>{nombrePadre}</p></div> 
          <div id="divb2"><h3>Apellido del Padre</h3> <p>{apellidoPadre}</p></div>
          <div id="divb2"><h3>Cedula</h3> <p>{cedula}</p></div>
          <div id="divb2"><h3>Telefono</h3> <p>{telefono}</p></div>                                                   
          <div id="divb2"><h3>Curso</h3> <p>{curso}</p></div>
          <div id="divb2"><h3>Tanda</h3> <p>{tanda}</p></div>
          <div id="divb2"><h3>Acta de Naciminento</h3> <a href={"https://drive.google.com/file/d/1ZlExAmvhYfv8bbpDMucMf3b2oNjIRjEq/view"}>Documanto</a></div> 
          <div id="divb2"><h3>Documento Personal</h3> <a href={"https://drive.google.com/file/d/1HPUjsaEIo12VvlkkNH2Le3GXdKky8qMV/view"}>Documanto</a></div> 
          <div id="divb2"><h3>Confirmacion</h3><p> {confirmacion? <Alert severity="success">Realizada</Alert>: <Alert severity="error">No realizada</Alert> }</p></div>  
          <div id="divb2"><h3>Pago</h3> <p>{pago? <Alert severity="success">Confirmado</Alert> :<Alert severity="error">No confirmado</Alert>}</p></div> 
        
        </div></div></div></div></div>);
}


export default ButtonM;