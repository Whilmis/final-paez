import * as React from 'react';
import {  useNavigate  } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';




const Headers = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  let navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleInicio = () => {
    navigate("/administrador")
  };

  const handleEstudiantes = () => {
    navigate("/estudiantes")
  };
  
  const handleAdministrar = () => {
    navigate("/administrar")
  };
  
  const handleUser = () => {
    navigate("/usuarios")
  };
  const handlePagosA = () => {
    navigate("/pagoA")
  };
  

  const handleCloseUserMenu = () => {
    navigate("/")
  };
  

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AccountBalanceIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Copass Point
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
           
                <MenuItem  onClick={handleInicio}>
                  <Typography textAlign="center">Inicio</Typography>
                </MenuItem>
                <MenuItem  onClick={handleAdministrar}>
                  <Typography textAlign="center">Administrar</Typography>
                </MenuItem>
                <MenuItem  onClick={handleEstudiantes}>
                  <Typography textAlign="center">Estudiantes</Typography>
                </MenuItem>
                <MenuItem  onClick={handlePagosA}>
                  <Typography textAlign="center">Pagos</Typography>
                </MenuItem>
                <MenuItem  onClick={handleUser}>
                  <Typography textAlign="center">Usuarios</Typography>
                </MenuItem>
                
            </Menu>
          </Box>
          <AccountBalanceIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Compass
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        
              <Button
           
                onClick={handleInicio}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Inicio
              </Button>
        
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          
              <Button
             
                onClick={handleAdministrar}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                 Administrar
              </Button>
      
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          
          <Button
         
            onClick={handleEstudiantes}
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
             Estudiantes
          </Button>
  
      </Box>
      


          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          
              <Button
              
                onClick={handleUser}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Usuarios
              </Button>
      
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
           
                <MenuItem  onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Salir</Typography>
                </MenuItem>
         
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Headers;