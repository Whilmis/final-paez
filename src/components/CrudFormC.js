
import React, { useState, useEffect, useContext } from "react";
import UserContext from "../context/CrudContext";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import "./CrudForm.css"

const initailForm = {
  id:null,idUsuario:5,nombreEstudiante:"",apellidoEstudiante:"",actaNacimiento:"https://drive.google.com/file/d/1WTEVwydq2xXty4zxJI8LeJySHVCYMR7q/view",direccion:"",nombrePadre:"",apellidoPadre:"",telefono:"",cedula:"",curso:"", documento_personal:"https://drive.google.com/file/d/1TGsVM9RhtOdnq8wyFgj0yYRIhcl7pAKR/view",tanda:"", confirmacion:"", pago:""
};


const CrudFormC = () => {
  const { createData, updateData, dataToEdit, setDataToEdit } =
    useContext(UserContext);

  const [form, setForm] = useState(initailForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initailForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

 


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.nombreEstudiante || !form.apellidoEstudiante) {
      alert("Datos incompletos");
      return;
    }

    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();
  };

  const handleReset = (e) => {
    setForm(initailForm);
    setDataToEdit(null);
  };

  return (
    <div>
      <h3 className="texto">{dataToEdit ? "Editar" : "Agregar"}</h3>
      <form onSubmit={handleSubmit}>

      <Grid
  container
  direction="row"
  justifyContent="space-evenly"
  alignItems="center"

>

<div style={{
    width:'90%',margin:'auto'
  }}>
     <h4 className="texto">{ "Datos del estudiante" }</h4>
<div style={{
    border: '2px solid #0077d1', borderRadius:'10px'
  }}>
<Grid
  container
  direction="row"
  justifyContent="space-evenly"
  alignItems="center"
  flexWrap="wrap"

>

            <TextField
        id="filled-multiline-flexible"
        label="Nombre del estudiante"
        value={form.nombreEstudiante}
        name="nombreEstudiante"
        onChange={handleChange}
        
      />

       
  
            <TextField
        id="outlined-name"
        label="Apellido del estudiante"
        value={form.apellidoEstudiante}
        name="apellidoEstudiante"
        onChange={handleChange}
        
      />
       <FormControl sx={{ m: 1, minWidth: 120, }} size="small">
      <InputLabel id="demo-select-small">Curso</InputLabel>
      <Select
         
         labelId="demo-simple-select-label"
         id="demo-simple-select-label"
          name="curso" value={form.curso}  onChange={handleChange}
          label="Curso"
          
        >
          <MenuItem value={'Maternal'}>Maternal</MenuItem>
          <MenuItem value={'Kinder'}>Kinder</MenuItem>
          <MenuItem value={'Pre-Primario'}>Pre-Primario</MenuItem>
        </Select>
    </FormControl>
    <FormControl sx={{ m: 1, minWidth: 120, }} size="small">
      <InputLabel id="demo-select-small">Tanda</InputLabel>
      <Select
         
         labelId="demo-simple-select-label"
         id="demo-simple-select-label"
          name="tanda" value={form.tanda}  onChange={handleChange}
          label="Tanda"
          
        >
          <MenuItem value={'matutina'}>Matutina</MenuItem>
          <MenuItem value={'vespertina'}>Vespertina</MenuItem>
          
        </Select>
    </FormControl>



        <div className="doc">
       <div className="doc2">
        <label>Actana de nacimiento</label>
       <input type="file"></input>
       </div>
       </div>
   </Grid>
   </div>
   </div>

   <div style={{
    width:'90%',margin:'auto'
  }}>
     <h4 className="texto">{ "Datos del padre o tutor" }</h4>
<div style={{
    border: '2px solid #0077d1', borderRadius:'10px'
  }}>
<Grid
  container
  direction="row"
  justifyContent="space-evenly"
  alignItems="center"
  flexWrap="wrap"

>   
          
       
<TextField
        id="outlined-name"
        label="Cedula"
        value={form.cedula}
        name="cedula"
        onChange={handleChange}
        
      />

            
            
            <TextField
        id="outlined-name"
        label="Nombre del Padre o tutor"
        value={form.nombrePadre}
        name="nombrePadre"
        onChange={handleChange}
        
      />
          
            
          
             
            <TextField
        id="outlined-name"
        label="Apellido del Padre"
        value={form.apellidoPadre}
        name="apellidoPadre"
        onChange={handleChange}
        
      />

           
            <TextField
        id="outlined-name"
        label="Telefono"
        value={form.telefono}
        name="telefono"
        onChange={handleChange}
        
      />
            
         
           


    <TextField
        id="outlined-name"
        label="Direccion"
        multiline
          rows={4}
        value={form.direccion}
        sx={{ m: 3, width: '25ch', mt: 3 }}
        name="direccion"
        onChange={handleChange}
        
      />
  


       <div className="doc2">
       <label>Documento personal</label>
       <input type="file"></input>
       </div>


     

     
          
       
        
      
       
       </Grid>
       </div>
       </div>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button type="submit">Enviar</Button>
      <Button onClick={handleReset}>Reset</Button>
    </ButtonGroup>
      
       
      
      
   

      </Grid>
            
       
      </form>
    </div>
  );
};

export default CrudFormC;