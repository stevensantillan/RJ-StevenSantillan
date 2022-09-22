import React from "react";
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
import CartWidget from "../cartComponents/CartWidget";
import { Link } from "react-router-dom";
import "./navbar.scss"
import logoHeader from "../../data/multi/logoalt.ico"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { UseLoginContext } from "../context/LoginContext";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#212121',
    },
  },
});

const pages = [ <Link to="/productos/futbol" className="links">Futbol</Link>,
                <Link to="/productos/running" className="links">Running</Link>,
                <Link to="/productos/urbanas" className="links">Urbanas</Link>];

const Navbar = () => {

    const {user, logout} = UseLoginContext()

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };

    return (
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <img src={logoHeader} alt="example" className="logoEdit"/>
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
                Nike Store
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

                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">
                        {
                        user.user !== ""
                        ? <span>{user.user}</span>
                        : <Link to="/login" className="links">Login</Link> 
                        } 
                      </Typography>
                    </MenuItem>

                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">
                        <a onClick={logout}>Logout</a>
                      </Typography>
                    </MenuItem>
    
                </Menu>

              </Box>
              
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="/"
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
                Nike Store
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page, index) => (
                  <Button
                    key={index}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>

              <Link to="/cart" style={{textDecoration: "none"}}><CartWidget/></Link>

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
                  <MenuItem onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">
                        {
                        user.user !== ""
                        ? <span>{user.user}</span>
                        : <Link to="/login" className="links">Login</Link> 
                        } 
                      </Typography>
                    </MenuItem>

                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">
                        <a onClick={logout}>Logout</a>
                      </Typography>
                    </MenuItem>

                </Menu>

              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    )
}

export default Navbar