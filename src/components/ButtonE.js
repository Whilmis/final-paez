import Button from '@mui/material/Button';
import { useModal } from '../hook/useModal';
/*import './Modal.css'*/
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import Avatar from '@mui/material/Avatar';
import nino1 from "./nino1.jpg";




const ButtonE = ({el})=>{
    let { nombreEstudiante,apellidoEstudiante,actaNacimiento,sexo,fecha_n,vacunas,discapacidad,tipo_sangre,seguro_medico,alergias,tipo_de_estudiante,foto,direccion,nombrePadre,apellidoPadre,telefono,cedula,trabajo,tipo_trabajo,curso,documento_personal, id,correo,nacionalidad,cedula2,nombrePadre2,apellidoPadre2,telefono2,direccion2,documento_personal2,estado_acta,numero_de_acta,provincias_JCE,municipio_JCE,oficialias_JCE,libro,folio,year } = el;
  
    const handelPrint = ()=>{   window.print()};
    const[isOpenModal,openModal,closeModal] = useModal(false);


    return(<div><Button onClick={openModal}>Detalle</Button><div><div className={`modal ${isOpenModal && "is-open"}`} onClick={closeModal}><div className='modal-container'> <h1 className='h1'>Compass Point</h1><div onClick={handelPrint}> <PictureAsPdfIcon color="primary"/> </div> <hr></hr><div className='info'>
          <div id="divb2"><h3>Nombre del estudiante</h3> <p>{nombreEstudiante}</p></div> 
          <div id="divb2"><h3>Apellido del Estudiante</h3> <p>{apellidoEstudiante}</p></div> 
          
          <div id="divb2"><h3>Curso</h3> <p>{curso}</p></div>
          <div id="divb2"><h3>Sexo</h3> <p>{sexo}</p></div>
          <div id="divb2"><h3>Fecha de nacimiento</h3> <p>{fecha_n}</p></div>
          <div id="divb2"><h3>Vacunas</h3> <p>{vacunas}</p></div>
          <div id="divb2"><h3>Discapacidad</h3> <p>{discapacidad}</p></div>
          <div id="divb2"><h3>Tipo de sangre</h3> <p>{tipo_sangre}</p></div>
          <div id="divb2"><h3>Seguro medico</h3> <a href={"https://drive.google.com/file/d/1wE2t3B2eAYkr0vauiklCb8_iHdA2PX5Q/view"}>Documanto</a></div>
          <div id="divb2"><h3>Alergias</h3> <p>{alergias}</p></div>
          <div id="divb2"><h3>Tipo de aprendizaje</h3> <p>{tipo_de_estudiante}</p></div>
          <div id="divb2"><h3>Foto</h3> <p><Avatar alt="Remy Sharp" src={nino1}  sx={{ width: 100, height: 100 }} /></p></div>

          <div id="divb2"><h3>Acta de Naciminento</h3> <a href={"https://drive.google.com/file/d/1ZlExAmvhYfv8bbpDMucMf3b2oNjIRjEq/view"}>Documanto</a></div> 
          <div id="divb2"><h3>Documento Personal</h3> <a href={"https://drive.google.com/file/d/1HPUjsaEIo12VvlkkNH2Le3GXdKky8qMV/view"}>Documanto</a></div> 
          <div id="divb2"><h3>Nombre del Padre</h3> <p>{nombrePadre}</p></div> 
          <div id="divb2"><h3>Apellido del Padre</h3> <p>{apellidoPadre}</p></div>
          <div id="divb2"><h3>Telefono</h3> <p>{telefono}</p></div> 
          <div id="divb2"><h3>Direccion</h3> <p>{direccion}</p></div> 
          <div id="divb2"><h3>Trabajo</h3><p> {trabajo? "Confirmado":"En Proceso"}</p></div>  
          <div id="divb2"><h3>Tipo de trabajo</h3> <p>{tipo_trabajo}</p></div> 
          <div id="divb2"><h3>Nacionalidad</h3> <p>{nacionalidad}</p></div> 
          <div id="divb2"><h3>Documento Personal</h3> <a href={"https://drive.google.com/file/d/1ackOdnPsGFjKWqL2htWR-fYDoJ3Dgpoy/view"}>Documanto</a></div> 
         
          <div id="divb2"><h3>Cedula</h3> <p>{cedula2}</p></div>
          <div id="divb2"><h3>Nombre del Padre</h3> <p>{nombrePadre2}</p></div> 
          <div id="divb2"><h3>Apellido del Padre</h3> <p>{apellidoPadre2}</p></div>
          <div id="divb2"><h3>Telefono</h3> <p>{telefono2}</p></div> 
          <div id="divb2"><h3>Direccion</h3> <p>{direccion2}</p></div> 
           
          <div id="divb2"><h3>Documento Personal</h3> <a href={"https://drive.google.com/file/d/1ackOdnPsGFjKWqL2htWR-fYDoJ3Dgpoy/view"}>Documanto</a></div> 
          
          <div id="divb2"><h3>Estado de acta</h3> <p>{estado_acta}</p></div>
          <div id="divb2"><h3>Numero de acta</h3> <p>{numero_de_acta}</p></div>
          <div id="divb2"><h3>Provincias JCE</h3> <p>{provincias_JCE}</p></div>
          <div id="divb2"><h3>Municipio JCE</h3> <p>{municipio_JCE}</p></div>
          <div id="divb2"><h3>Oficiales JCE</h3> <p>{oficialias_JCE}</p></div>
          <div id="divb2"><h3>Libro</h3> <p>{libro}</p></div>
          <div id="divb2"><h3>Folio</h3> <p>{folio}</p></div>
          <div id="divb2"><h3>Año</h3> <p>{year}</p></div>        


        
        </div></div></div></div></div>);
}


export default ButtonE;