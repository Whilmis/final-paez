import * as React from 'react';
import  { useState, useEffect, useContext } from "react";
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Grid from '@mui/material/Grid';
import "./CrudForm.css"
import CrudContext from "../context/CrudContext";


const initailForm = {
    id:null,idUsuario:1,nombreEstudiante:"",apellidoEstudiante:"",actaNacimiento:"https://drive.google.com/file/d/1aRbTQcluHXG4Z9T9fFXOwS1xOJjmrcwL/view",curso:"",tanda:"",sexo:"",fecha_n: null ,vacunas: "", discapacidad:"", tipo_sangre: "", seguro_medico:"https://docplayer.es/docs-images/43/1236426/images/page_1.jpg" ,alergias:"",tipo_de_estudiante:"",  foto:"",cedula:"",nombrePadre:"",apellidoPadre:"",telefono:"",direccion:"", trabajo:false,tipo_trabajo:"", correo:"", 
    nacionalidad:"",  documento_personal:"https://drive.google.com/file/d/1aRbTQcluHXG4Z9T9fFXOwS1xOJjmrcwL/view", otro:"pdf", cedula2:"", nombrePadre2:"",apellidoPadre2:"", telefono2:"",direccion2:"",   documento_personal2:"https://drive.google.com/file/d/1aRbTQcluHXG4Z9T9fFXOwS1xOJjmrcwL/view", estado_acta:"", numero_de_acta:"",provincias_JCE:"",municipio_JCE:"",oficialias_JCE:"",libro:"",folio:"", year:""   
};


const CrudFormEs = () => {
  const { createData, updateData, dataToEdit, setDataToEdit } =
    useContext(CrudContext);

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

  const handleChecked = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked,
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
        margin="normal"
        value={form.nombreEstudiante}
        name="nombreEstudiante"
        onChange={handleChange}
        sx={{ m: 3, width: '25ch', mt: 3 }}
        size="small"
        
      />

       
  
            <TextField
        id="outlined-name"
        label="Apellido del estudiante"
        value={form.apellidoEstudiante}
        name="apellidoEstudiante"
        sx={{ m: 3, width: '25ch', mt: 3 }}
        onChange={handleChange}
        
      />

<TextField
        id="outlined-name"
        label="discapacidad"
        value={form.discapacidad}
        name="discapacidad"
        onChange={handleChange}
        sx={{ m: 3, width: '25ch', mt: 3 }}
        
      />

        

      

<TextField
        id="outlined-name"
        label="Fecha de nacimiento"
        value={form.fecha_n}
        name="fecha_n"
        onChange={handleChange}
        sx={{ m: 3, width: '25ch', mt: 3 }}
        helperText="Dia/Mes/Año"
        
      />


       

     
    
    
    <TextField
        id="outlined-name"
        label="Tipo de sangre"
        value={form.tipo_sangre}
        name="tipo_sangre"
        onChange={handleChange}
        
      />
   
   


       <TextField
        id="outlined-name"
        label="Alergias"
        value={form.alergias}
        name="alergias"
        onChange={handleChange}
        sx={{ m: 3, width: '25ch', mt: 3 }}
        
      />


       <TextField
        id="outlined-name"
        label="Forma de aprencizaje"
        value={form.tipo_de_estudiante}
        name="tipo_de_estudiante"
        onChange={handleChange}
        
      />


<FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select">Sexo</InputLabel>
      <Select
         
         labelId="demo-simple-select-label"
         id="demo-simple-select"
          name="sexo" value={form.sexo}  onChange={handleChange}
          label="Sexo"
          
        >
          <MenuItem value={'Masculino'}>Masculino</MenuItem>
          <MenuItem value={'Femenino'}>Femenino</MenuItem>
          
        </Select>
    </FormControl>


    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
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
        <div className="doc2">
        <label>Actana de nacimiento</label>
       <input type="file"></input>
       </div>

       <div className="doc2">
       <label>Vacunas</label>
       <input type="file"></input>
       </div>


       

        <div className="doc2">
       <label>Seguro medico</label>
       <input type="file"></input>
       </div>
     
</Grid>
</div>
</div>
  
<div style={{
    width:'90%',margin:'auto'
  }}>
     <h4 className="texto">{ "Datos de los  Padres o tutores" }</h4>
<div style={{
    border: '2px solid #0077d1', borderRadius:'10px'
  }}>



<div style={{
    width:'90%',margin:'auto'
  }}>
     <h4 className="texto">{ "Primero" }</h4>
<div style={{
    borderTop: '2px solid #0077d1', 
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
        sx={{ m: 4, width: '25ch', mt: 3 }}
        
      />

            
<TextField
        id="outlined-name"
        label="Nombre del Padre"
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
        id="filled-multiline-flexible"
        label="Correo"
        value={form.correo}
        name="correo"
        onChange={handleChange}
        
      />
         
        <TextField
        id="filled-multiline-flexible"
        label="Tipo de trabajo"
        value={form.tipo_trabajo}
        name="tipo_trabajo"
        onChange={handleChange}
        sx={{ m: 3, width: '25ch', mt: 3 }}
        
      />

<TextField
        id="outlined-name"
        label="Direccion"
        multiline
          rows={4}
        value={form.direccion}
        name="direccion"
        onChange={handleChange}
        
      />

      <div>
        <label for="trabajo" class="textos">Trabajo</label>
         <input
           type="checkbox"
           name="trabajo"
           id="trabajo"
           className="centro"
           onChange={handleChecked}
           checked={form.trabajo}
         />
         </div>

      <div className="doc2">
       <label>Documento Personal</label>
       <input type="file"></input>
       </div>
  

      </Grid>
</div></div>


<div style={{
    width:'90%',margin:'auto'
  }}>
     <h4 className="texto">{ "Segundo" }</h4>
<div style={{
    borderTop: '2px solid #0077d1',padding: '50px' ,borderRadius:'10px'
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
        label="Nacionalidad"
        value={form.nacionalidad}
        name="nacionalidad"
        onChange={handleChange}
        sx={{ m: 3, width: '25ch', mt: 3 }}
      />



       


    
   
       
       <TextField
        id="filled-multiline-flexible"
        label="Cedula"
        value={form.cedula2}
        name="cedula2"
        onChange={handleChange}
        
      />



<TextField
        id="outlined-name"
        label="Nombre del padre 2"
        value={form.nombrePadre2}
        name="nombrePadre2"
        onChange={handleChange}
        
      />

       
  
            <TextField
        id="outlined-name"
        label="Apellido padre 2"
        value={form.apellidoPadre2}
        name="apellidoPadre2"
        onChange={handleChange}
        
      />

<TextField
        id="outlined-name"
        label="Telefono"
        value={form.telefono2}
        name="telefono2"
        onChange={handleChange}
        
      />
          

  



            
            <TextField
        id="outlined-name"
        label="Direccion"
        multiline
          rows={4}
        value={form.direccion2}
        name="direccion2"
        onChange={handleChange}
        
      />



<div className="doc2">
       <label>Documento Personal2</label>
       <input type="file"></input>
       </div>

</Grid>
      </div>
      </div>
       

      </div>
      </div> 

            
      <div style={{
    width:'90%',margin:'auto' 
  }}>
     <h4 className="texto">{ "Gestion escolar" }</h4>
<div style={{
    border: '2px solid #0077d1',padding: '50px',borderRadius:'10px'
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
        label="Estado del acta"
        value={form.estado_acta}
        name="estado_acta"
        onChange={handleChange}
        
      />

           
            <TextField
        id="outlined-name"
        label="Numero de acta"
        value={form.numero_de_acta}
        name="numero_de_acta"
        onChange={handleChange}
        
      />
            
         
            <TextField
        id="outlined-name"
        label="ProvinciasJCE"
        value={form.provincias_JCE}
        sx={{ m: 3, width: '25ch', mt: 3 }}
        name="provincias_JCE"
        onChange={handleChange}
        
      />
                  <TextField
        id="filled-multiline-flexible"
        label="Municipio JCE"
        value={form.municipio_JCE}
        name="municipio_JCE"
        onChange={handleChange}
        
      />

       
  
            <TextField
        id="outlined-name"
        label="Oficialias JCE"
        sx={{ m: 3, width: '25ch', mt: 3 }}
        value={form.oficialias_JCE}
        name="oficialias_JCE"
        onChange={handleChange}
        
      />

       

            
            
            <TextField
        id="outlined-name"
        label="Libro"
        value={form.libro}
        name="libro"
        onChange={handleChange}
        
      />
          
            
          
             
            <TextField
        id="outlined-name"
        label="Folio"
        value={form.folio}
        name="folio"
        onChange={handleChange}
        
      />

           
            <TextField
        id="outlined-name"
        label="Año"
        sx={{ m: 3, width: '25ch', mt: 3 }}
        value={form.year}
        name="year"
        onChange={handleChange}
        
      />
            
         
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

export default CrudFormEs;