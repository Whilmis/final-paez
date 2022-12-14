import React, { useState, useEffect, useContext } from "react";
import UserContext from "../context/UserContext";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import HeadersC from "./HeadersC";
import CreditCardIcon from '@mui/icons-material/CreditCard';
import Paypal from "./Paypal";
import CrudTableR from "./CrudTableR";
import "./styles.css";



const Pago = ( )=>{
    return(
        <div className="contac">
        <HeadersC/>
     
        <h3>Pago vía transferencia</h3>
        <h5 className="h5">Puede realizar el pago depositando a la cuenta de banco #960-078896 a nombre de Commpass Point y colocar la informacion via este formulario, cantidad a pagar 1200 por inscripcion </h5>

        <form action="https://formsubmit.co/whilmis21@gmail.com" method="POST" >
      <Box
      sx={{
        '& .MuiTextField-root': { m: 3, width: '30ch',alignContent: "center" },
      }}
      noValidate
      autoComplete="off"
    >
            <TextField
        id="filled-multiline-flexible"
        label="Nombre Completa"
        name="Nombre "
      
        
      />
            <TextField
        id="outlined-name"
        label="Numero de cuenta origen"
        name="Cuenta"
        
      />
            <TextField
        id="outlined-name"
        label="Gmail"
        type="email"
        name="Gmail"
      
        
      />    
               <TextField
        id="outlined-name"
        label="Numero de transferencia"
        name="numero"
        
      />
  
<div className="check">

<CreditCardIcon sx={{ fontSize: 60 }} color="primary"/>
      
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button type="submit">Enviar</Button>
    </ButtonGroup>
</div>
      </Box>
    
      </form>
      <h3>Pago directo: Paypal o tarjeta </h3>
     <Paypal/>
     <div className="cont"></div>



     <CrudTableR></CrudTableR>
       </div>
    )
}

export default Pago;