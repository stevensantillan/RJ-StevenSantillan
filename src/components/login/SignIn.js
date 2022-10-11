import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { UserAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import './logStyle.scss';

const SingIn = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  
  const { signIn } = UserAuth()
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("")
    try {
      await signIn(email, password)
    } catch (e) {
      setError(e.message)
    }
  }
  
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: "center",
        '& > :not(style)': {
          mb: 20,
          mt: 20,
          width: 400,
          height: 400,
          backgroundColor: "#f3e5f5",
          border: 1
        },
      }}
    >

    <form onSubmit={handleSubmit}>
      
      <Paper 
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            height: "100%"}}>
       
          <TextField
                required
                sx={{m: 2}}
                name="email"
                type={"email"}
                label="e-mail"
                onChange={(e) => setEmail(e.target.value)}/>

          <TextField
                sx={{m: 2}}
                name="password"
                label="Password"
                type="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
                />

          {
          error !== ""
          ? <Alert severity="error">{error && error}</Alert>
          : ""
          } 

          <Button
                variant="contained" 
                type='sumbit'
                color="success" 
                sx={{m: 2, height: "50px"}}>
        
                Ingresar
      
          </Button>

          <Link to="/login" className='logStyle'>Crear nuevo usuario</Link>

      </Paper>

    </form>

    </Box>
  )
}

export default SingIn