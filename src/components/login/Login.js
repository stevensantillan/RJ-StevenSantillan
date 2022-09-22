import React, { useContext } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { LoginContext } from '../context/LoginContext';
import { UseForm } from '../../hooks/UseForm';

const Login = () => {

  const {login, user} = useContext(LoginContext)
  const { values, handleImputChange } = UseForm({
    user: "",
    pass: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    login(values)
  }


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
          backgroundColor: "#f3e5f5",
          border: 1
        },
      }}
    >

      <Paper 
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly"}}>

      <form onSubmit={handleSubmit}>
                    
          <TextField
                required
                sx={{m: 2}}
                name="user"
                type={"user"}
                label="User"
                defaultValue=""
                value={values.user}
                onChange={handleImputChange}/>

          <TextField
                sx={{m: 2}}
                name="pass"
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                value={values.pass}
                onChange={handleImputChange}
                />

          {user.error && <h6>{user.error}</h6>}

          <Button
                variant="contained" 
                type='sumbit'
                color="success" 
                sx={{m: 2, height: "50px"}}>
        
                Ingresar
      
          </Button>

      </form>
   
      </Paper>

    </Box>
  )
}

export default Login