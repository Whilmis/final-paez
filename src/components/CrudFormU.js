import React, { useState, useEffect, useContext } from "react";
import UserContext from "../context/UserContext";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import "./CrudForm.css"

const initailForm = {
  nombre: "",
  apellido: "",
  gmail:"",
  contrasena:"",
  cedula: "",
  admin: "General",
  id: null,
};

const CrudFormU = () => {
  const { createDataU, updateDataU, dataToEditU, setDataToEditU } =
    useContext(UserContext);

  const [form, setForm] = useState(initailForm);

  useEffect(() => {
    if (dataToEditU) {
      setForm(dataToEditU);
    } else {
      setForm(initailForm);
    }
  }, [dataToEditU]);

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

    if (!form.nombre || !form.apellido) {
      alert("Datos incompletos");
      return;
    }

    if (form.id === null) {
      createDataU(form);
    } else {
      updateDataU(form);
    }

    handleReset();
  };

  const handleReset = (e) => {
    setForm(initailForm);
    setDataToEditU(null);
  };

  return (
    <div>
      <h3 className="texto">{dataToEditU ? "Editar" : "Agregar"}</h3>
      <form onSubmit={handleSubmit}>
      <Box
      sx={{
        '& .MuiTextField-root': { m: 3, width: '30ch',alignContent: "center" },
      }}
      noValidate
      autoComplete="off"
    >
            <TextField
        id="filled-multiline-flexible"
        label="Nombre"
        value={form.nombre}
        name="nombre"
        onChange={handleChange}
        
      />
            <TextField
        id="outlined-name"
        label="Apellido"
        value={form.apellido}
        name="apellido"
        onChange={handleChange}
        
      />
            <TextField
        id="outlined-name"
        label="Gmail"
        type="email"
        value={form.gmail}
        name="gmail"
        onChange={handleChange}
        
      />    
      <TextField
        id="outlined-name"
        label="Cedula"
        value={form.cedula}
        name="cedula"
        onChange={handleChange}
        
      />  
      
  

    <div className="check" >
  <TextField
        id="outlined-name"
        label="Contraseña"
        value={form.contrasena}
        type="password"
        name="contrasena"
        onChange={handleChange}

      />
    
    <FormControl sx={{ m: 1, minWidth: 120, }} size="small">
      <InputLabel id="demo-select-small">Usuario</InputLabel>
      <Select
         
         labelId="demo-simple-select-label"
         id="demo-simple-select-label"
          name="admin" value={form.admin}  onChange={handleChange}
          label="Usuario"
          
        >
          <MenuItem value={'Admin'}>Admin</MenuItem>
          <MenuItem value={'General'}>General</MenuItem>
          
        </Select>
    </FormControl>
      
    </div>
        
         <div className="check">
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button type="submit">Enviar</Button>
      <Button onClick={handleReset}>Reset</Button>
    </ButtonGroup>
    </div>
      </Box>
    
      </form>
    </div>
  );
};

export default CrudFormU;
