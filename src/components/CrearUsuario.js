import { useState, useEffect, useContext } from "react";
import * as React from 'react';
import UserContext from '../context/UserContext';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/Whilmis">
        Whilmis Perez | Jairo Brito | Mirleny De Jesús 
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();


const initailForm = {
  nombre: "",
  apellido: "",
  gmail:"",
  contrasena:"",
  cedula: "",
  admin: "General",
  id: null,
};




export default function CrearUsuario() {
  const { createDataU, updateDataU, dataToEditU, setDataToEditU } =
    useContext(UserContext);

const [form, setForm] = useState(initailForm);
const [contra, setContra] = useState("");
const [alert2, setAlert2] = useState(false);
const [alert, setAlert] = useState(false);
const [alert3, setAlert3] = useState(false);



useEffect(() => {
  if (dataToEditU) {
    setForm(dataToEditU);
  } else {
    setForm(initailForm);
  }
}, [dataToEditU]);





const handleSubmit = (e) => {
  e.preventDefault();

  if (form.nombre = "" || !form.apellido || !form.gmail || !form.contrasena || !contra) {
   setAlert2(true)
   
  }
  else if (form.id === null) {
    setAlert(true);
    setContra("");
    createDataU(form);
  }
 else if (form.contrasena !== contra) {
    setAlert3(true);
   
  }  else {
    updateDataU(form);
  }

  handleReset();
};
const handleChange = (e) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value,
  });
};



const handleReset = (e) => {
  setForm(initailForm);
  setDataToEditU(null);
};


  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://images.pexels.com/photos/8466901/pexels-photo-8466901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Compass Point
            </Typography>
            <Typography component="h5" variant="h6" color="primary">
              Crear usuario
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                label="Nombre"
                value={form.nombre}
                name="nombre"
                onChange={handleChange}
              
                autoFocus
              />
                   <TextField
                margin="normal"
                required
                fullWidth
                onChange={handleChange}
                id="apellido"
                label="Apellido"
                value={form.apellido}
                name="apellido"
                
                autoFocus
              />
                   <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Gmail"
                value={form.gmail}
                name="gmail"
                onChange={handleChange}
                autoComplete="email"
                autoFocus
              />

<TextField
                margin="normal"
                required
                fullWidth
                id="cedula"
                label="Cedula"
                value={form.cedula}
                name="cedula"
                  onChange={handleChange}
               
                autoFocus
              />
             
              <TextField
               
                margin="normal"
                required
                fullWidth
                value={form.contrasena}
                type="password"
                 name="contrasena"
                onChange={handleChange}
                label="Contraseña"
                id="password"
                autoComplete="current-password"
              />

<TextField
                  onChange={(e) => {
                    setContra(e.target.value)
                  }}

                  value={contra}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Confirmar Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Crear
              </Button>
              <Grid container>
              
                <Grid item>
                  <Link href="/" variant="body2">
                    {"Login"}
                  </Link>
                </Grid>
             
              </Grid>
              { alert2 && <Stack sx={{ width: '100%' }} spacing={2}>
     
              <Alert severity="error">Favor conpletar toda la informacion!</Alert>
   </Stack>}
   { alert3 && <Stack sx={{ width: '100%' }} spacing={2}>
     
              <Alert severity="error">Las contraseñas tienen que ser iguales!</Alert>
   </Stack>}
              { alert && <Stack sx={{ width: '100%' }} spacing={2}>
     
     <Alert severity="success">Usuario creado exitosamente — ya te puedes loguearte!</Alert>
   </Stack>}
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}