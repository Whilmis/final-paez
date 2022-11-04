import Button from '@mui/material/Button';
import { useModal } from '../hook/useModal';
import TextField from '@mui/material/TextField';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import Box from '@mui/material/Box';

/*import './Modal.css'*/
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';





const Notificacion = ({el})=>{
    
  
    const handelPrint = ()=>{   window.print()};
    const[isOpenModal,openModal,closeModal] = useModal(false);


    return(<div><Button onClick={openModal}><MarkEmailUnreadIcon/></Button><div><div className={`modal ${isOpenModal && "is-open"}`} onClick={closeModal}><div className='modal-container'> <h1 className='h1'>Compass Point</h1><div onClick={handelPrint}> <PictureAsPdfIcon color="primary"/> </div> <hr></hr><div >
                   <form action="https://formsubmit.co/whilmis21@gmail.com" method="POST" >
    
           
           
            
               <TextField
               multiline
               bordernone
               fullWidth
            
        id="outlined-name"
        label="Notificacion estudiante"
        name="Notificacion"
        defaultValue={`Por este medio le notificamos que su solicitud de inscripción en el colegio Compass Point ha sido aprobada usted y su niño o niña ya son parte de nuestra institución educativa, favor entrar al sistema para otorgar la información requerida para estudiantes ya aceptados para así ofrecer el mejor servicio posible `}
        
      />
  
<div className="check">


      
      <Button type="submit">Enviar</Button>

</div>
    
      </form>
        </div></div></div></div></div>);
}


export default Notificacion;