import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Login = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: "center",
        '& > :not(style)': {
          mb: 20,
          mt: 20,
          width: 300,
          height: 300,
        },
      }}
    >

      <Paper sx={{display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly"}}>
        
          <TextField
                required
                sx={{m: 2}}
                id="user"
                label="User"
                defaultValue=""/>

          <TextField
                sx={{m: 2}}
                id="loginPass"
                label="Password"
                type="password"
                autoComplete="current-password"
                />

          <Button variant="contained" 
                    color="success" 
                    sx={{m: 2, height: "50px"}}>
        
                Ingresar
      
          </Button>

        
      </Paper>

    </Box>
  )
}

export default Login